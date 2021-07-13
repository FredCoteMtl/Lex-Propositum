import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar';
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};
    
    return (
        <>
            <NavBar toggle={toggle} />
            <SideBar 
                isOpen={isOpen}
                toggle={toggle}
            />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <Footer />
        </>
    )
}

export default HomePage
