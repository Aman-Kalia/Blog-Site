const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL,)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    }, filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});
app.post('/server/upload', upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})
// app.get('/',authRoute);
app.use('/server/auth', authRoute);
app.use('/server/users', userRoute);
app.use('/server/posts', postRoute);
app.use('/server/categories', categoryRoute);


// if(process.env.NODE_ENV=="production"){
//     app.use(express.static("../client/build"))
// }
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log('server running at port 5000');
});
