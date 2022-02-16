import { Link } from 'react-router-dom';
import './topbar.css';
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() { //for logout 
    const {user, dispatch}=useContext(Context);
    const PF="http://localhost:5000/images/";
    const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
    }
  return (
  <div className='top'>
      <div className='topLeft'>
          <h1>My Blog</h1>
          {/* <i className=" topIcon fab fa-facebook-square"></i>
          <i className=" topIcon fab fa-twitter-square"></i>
          <i className=" topIcon fab fa-pinterest-square"></i>
          <i className=" topIcon fab fa-instagram-square"></i> */}
      </div>
      <div className='topCenter'>
          <ul className='topList'>
              <li className='topListItem'>
                  <Link className='link' to="/" >HOME</Link>
              </li>
              {/* <li className='topListItem'>
              <Link className='link' to="/about" >ABOUT</Link>
              </li> */}
              
              <li className='topListItem'>
              <Link className='link' to="/write" >WRITE</Link>
              </li>
              {/* <li className='topListItem'>
              <Link className='link' to="/contact" >CONTACT</Link>
              </li> */}
              <li className='topListItem' onClick={handleLogout}> 
                  {user && "LOGOUT"}
              </li>
          </ul>
      </div>
      <div className='topRight'>
          
          {
              user ?(//if there is a user then he can see his photo and go to setting page
                <Link to="/settings">
                <img 
                src={PF+user.profilePic}
                className="topImg" alt=''/>
                </Link>
                
              ):
              (
                  <ul className='topList'>
                      <button className='topListButton'>
                      <Link className='link' to="/login">
                          LOGIN
                       </Link>
                      </button>
                      <button className='topListButton'>
                      <Link className='link' to="/register">REGISTER</Link>
                      </button>
                  </ul>
              )
          }
          
          {/* <i className=" topSearchIcon fas fa-search"></i> */}
      </div>

  </div>
    );
}
