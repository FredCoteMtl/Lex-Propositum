import styled from 'styled-components'

export const InfoContainer = styled.div`
    padding-top: 200px;
    padding-bottom: 200px;
    color: #fff;
    background: #010606;

    @media screen and (max-width: 768px) {
        padding: 100px 0 350px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 200px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    display: flex;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #d66430;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`;

export const ImgWrap = styled.div`
    max-width: 100px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin-left: 20px;
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 70px;
    padding-right: 70px;
`;

export const ProjectName = styled.p`
    color: #d66430;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const ProjectDescription = styled.p`
    padding-bottom: 10px;
`;

export const ProjectCard = styled.div`
    max-width: 600px;
    border: 3px solid #d66430;
    padding: 50px;
    border-radius: 20px;
    background: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
`;

export const ProjectWebsite = styled.a`
    margin-bottom: 10px;
    color: #d66430;
`;

export const ProjectStatus = styled.p`
    padding-bottom: 10px;
`;

export const CardWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 660px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-column: minmax(auto, 1fr);
    aling-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;
    