import React from 'react';
import {Nav} from './NavbarElements';
import {Bars} from './NavbarElements';
import {NavMenu} from './NavbarElements';
import {NavLink} from './NavbarElements';
import {NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Menu' activeStyle>
                        Menu
                    </NavLink>
                    <NavLink to='/About' activeStyle>
                        About us
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        Contact
                    </NavLink>
                    <NavBtnLink to='/book'>
                        Make a reservation
                    </NavBtnLink>
                </NavMenu>
            </Nav>
            </>
    );
};

export default Navbar;
