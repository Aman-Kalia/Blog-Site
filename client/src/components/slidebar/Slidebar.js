// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './sliderbar.css';

export default function Slidebar() {
    // const [cats, setCats]=useState([]);

    // useEffect(()=>{
    //     const getCats =async ()=>
    //     {
    //         const res = await axios.get("/categories");
    //         setCats(res.data);
    //     }
    //     getCats();

    // },[])
  return (
  <div className='slidebar'>
      <div className='slidebarItem'>
          <span className='slidebarTitle'><i>ABOUT ME</i></span>
          <img alt=''
          src="https://media.istockphoto.com/photos/sifting-through-streams-of-data-picture-id638620962?k=20&m=638620962&s=612x612&w=0&h=JhlR6kH8WV91VnnNz7o7fJu_oPHF0s7kN-3BeSwFx7Q="
          />
          <p className='text1'>Hey everyone, I'm Aman Kalia.<br/>
          I'm a Chitkara University engineering under-graduate student, and on this site we all create content that helps people lead happier, healthier and more productive lives with the overall aim of helping people do more of what matters to them.

          </p>
      </div>
      {/* <div className='slidebarItem'>
          <span className='slidebarTitle'>CATEGORIES</span>
          <ul className='slidebarList'>
              {cats.map(c=>(
                  <Link className='link' to={`/?cat=${c.name}`}>
                  <li className='slidebarListItem'>{c.name}</li>
                  </Link>
                
              ))}
            
          </ul>
      </div> */}
      <div className='slidebarItem'>
      <span className='slidebarTitle'>FOLLOW US</span>
      <div className='slidebarSocial'>
          <i className=" slidebarIcon fab fa-facebook-square"></i>
          <i className=" slidebarIcon fab fa-twitter-square"></i>
          <i className=" slidebarIcon fab fa-pinterest-square"></i>
          <i className=" slidebarIcon fab fa-instagram-square"></i>
      </div>
      </div>
  </div>
  );
}
