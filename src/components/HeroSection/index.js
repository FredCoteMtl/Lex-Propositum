import React, { useState } from 'react';
import { 
    FaDiscord,
    FaTelegramPlane
} from 'react-icons/fa'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    SocialIcons,
    SocialIconLink,
} from './HeroElements';
import Video from '../../videos/nightCity.mp4';
import ImageBg from '../../images/backgrounds/JackBlue.jpg'
import { browserName, browserVersion } from 'react-device-detect';
 


const HeroSection = ({ mothMaster }) => {

    const [isRecentBrowser] = useState(browserName === "Chrome" & browserVersion >= "91");


    return (
        <HeroContainer>
            <HeroBg> 
                {isRecentBrowser ? 
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> :
                    <ImgBg src={ImageBg} type='img/JPG' />
                };
            </HeroBg>
            <HeroContent>
                <HeroH1>LEX PROPOSITUM</HeroH1>
                <HeroP>Ideas For Humans</HeroP> 
            </HeroContent>
            <SocialIcons>
                <SocialIconLink href="https://t.me/joinchat/h7lMawPKhn4xMTRh" target="_blank" aria-label="Telegram">
                    <FaTelegramPlane />
                </SocialIconLink>
                <SocialIconLink href="https://discord.gg/TXKKRWZe" target="_blank" aria-label="Discord">
                    <FaDiscord />
                </SocialIconLink>
            </SocialIcons>
        </HeroContainer>  
    )
}

export default HeroSection
