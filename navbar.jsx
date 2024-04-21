import React from "react";
import logo from  '../backroads-html/images/logo.svg';
import { pagelinks , socialLinks} from "../data";

function Navbar()
{
    return(
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        
          <ul className="nav-links" id="nav-links">
            {
              pagelinks.map((link)=>{
                const{id, href,text}=link;
                return(
                  <li key={id}>  
                  <a href={href} class="nav-links">{text}</a> </li>
                );
              })
                
            }
  
           
          </ul>
  
          <ul className="nav-icons">
          {
          socialLinks.map((link)=>{
                    const {id, href, icon}= link;
                    return(
                        <li key={id}>

              <a href={href} 
              target='_blank'
              rel='noreferrer'
              className='Nav-icon'
               ><i className={icon}></i> </a>
            </li>
                    );
                } )
              }
          </ul>
        </div>
      </nav>

    );
}
export default Navbar;
