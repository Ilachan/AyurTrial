import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from "./SidebarElements";
import { Link } from 'react-router-dom';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>

                <CloseIcon />

            </Icon>

            <SidebarWrapper>
                <SidebarMenu>


                    <SidebarLink to='Home' onClick={toggle}>
                        <Link className='link' to="/">Home</Link>
                    </SidebarLink>

                    <SidebarLink to='about' onClick={toggle}>
                        <Link className='link' to="/RegisterProperty">Add trial data</Link>
                    </SidebarLink>


                    <SidebarLink to='property' onClick={toggle}>
                        <Link className='link' to="property">View Data</Link>
                    </SidebarLink>

                    <SidebarLink to='commercial' onClick={toggle}>
                        <Link className='link' to="/HomeRemedy">Home Remedies</Link>
                    </SidebarLink>

                    <SidebarLink to='residential' onClick={toggle}>
                        <Link className='link' to="/Blog">Blogs</Link>
                    </SidebarLink>

                    <SidebarLink to='RegisterProperty ' onClick={toggle}>
                        <Link className='Btn' to='/RegisterProperty'> Sign In </Link>
                    </SidebarLink>


                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
