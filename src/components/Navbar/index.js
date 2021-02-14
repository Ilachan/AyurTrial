import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from "./NavbarElemets";


const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavbarContainer>

                <NavLogo className="logo" to="/">AyurTrial</NavLogo>
        

                <MobileIcon onClick={ toggle }>
                    <FaBars />
                </MobileIcon>
               
                <NavMenu> 
                <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to="">Home</Link></div>
                    </NavItem>
                    <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to='/RegisterProperty'>Add Trial Data</Link></div>
                    </NavItem>

                    <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to="property">View Data</Link></div>
                    </NavItem>

                    <NavItem>
                    <div className="navitem">
                         <Link className="link" to="/HomeRemedy">Home Remedies</Link></div>
                    </NavItem>
                    
                      <NavItem>
                      <div className="navitem">
                           
                        <Link className="link" to="/Blog">Blogs</Link>
                        </div>
                    </NavItem>
             
            <NavItemBtn>
                <Link className="Btn" to='/RegisterProperty'> Sign In </Link>
            </NavItemBtn>

            {/* <NavItemBtn>
            <NavBtnLink to="/SignIn">
                    <Button primary> SIGN IN</Button>
                  </NavBtnLink>
            </NavItemBtn> */}

            

                </NavMenu>
            </NavbarContainer>
        </Nav>         
     </>
    )
};

export default Navbar;
