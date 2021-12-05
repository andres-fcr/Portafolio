import React, { useState } from "react";

import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon } from "../styled/Navbar.elements";

import {
    FaBattleNet,
    FaBars,
    FaTimes,
    FaHome,
    FaUserAlt,
    FaBriefcase,
    FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    
                    <LogoContainer>
                        <p>Andrés</p>
                        <p>Cagua</p>
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open = {showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHome />
                                    Hola
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaUserAlt />
                                    Proyectos
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaBriefcase />
                                    Testimonio
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaGlasses />
                                    Contacto
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
            
    )
}

export default Navbar