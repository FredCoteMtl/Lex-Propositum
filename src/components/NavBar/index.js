import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import Icon from "../../images/icons/test-tube-white.png";
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIcon,
    NavTempLogo,
} from './NavBarElements';


const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo onClick={toggleHome}>
                            <NavIcon src={Icon} type="img/png" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='about'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-20}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='projects'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                            >
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='team'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={30}
                            >
                                Team
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavTempLogo onClick={toggleHome}>
                            MOTH LAB
                    </NavTempLogo>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar