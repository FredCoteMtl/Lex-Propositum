import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: left;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: 
        linear-gradient(
            180deg,
            rgba( 0, 0, 0, 0.2) 0%,
            rgba( 0, 0, 0, 0.6) 100%
        ),
        linear-gradient(
            180deg,
            rgba( 0, 0, 0, 0.2) 0%,
            transparent 100%
        );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fix: cover;
    object-fit: cover;
    background: #232a34;
`;

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fix: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    margin-top: 7%;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 15%;
    }

    @media screen and (max-witdh: 480px) {
        margin-top: 25%;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 100px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-witdh: 480px) {
        font-size: 32px
    }
`;

export const HeroP = styled.p`
    margin-top: 25px;
    color: #fff;
    font-size: 40px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const SocialIcons = styled.div`
    margin-top: 40%;
    margin-left: 80%;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 50px;
`;