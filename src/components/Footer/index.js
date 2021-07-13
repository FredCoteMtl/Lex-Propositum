import React from 'react'
import { 
    FaDiscord,
    FaTelegramPlane,
    FaGithub
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWraper,
    FooterLinksContainer,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ContractCode
} from "./FooterElements"
import { browserName, browserVersion } from 'react-device-detect';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWraper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="https://t.me/joinchat/h7lMawPKhn4xMTRh" target="_blank">Telegram</FooterLink>
                            <FooterLink href="https://discord.gg/TXKKRWZe" target="_blank">Discord</FooterLink>
                            <FooterLink href="https://github.com/Nakamoth" target="_blank">Git</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Sources</FooterLinkTitle>
                            <FooterLink href="https://undraw.co/illustrations" target="_blank">unDraw</FooterLink>
                            <FooterLink href="https://www.flaticon.com/" target="_blank">Icons</FooterLink>
                            <FooterLink href="https://unsplash.com" target="_blank">unsplash</FooterLink>
                            <FooterLink href="https://cryptologos.cc" target="_blank">crypto logos</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWraper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            MOTH LAB
                        </SocialLogo>
                        <WebsiteRights>
                            moth lab © {new Date().getFullYear()} All rights reserved. <br />
                            <ContractCode>{'Browser: '+browserName+' '+browserVersion}</ContractCode>
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://t.me/joinchat/h7lMawPKhn4xMTRh" target="_blank" aria-label="Telegram">
                                <FaTelegramPlane />
                            </SocialIconLink>
                            <SocialIconLink href="https://discord.gg/TXKKRWZe" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/FredCoteMtl" target="_blank" aria-label="Discord">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
