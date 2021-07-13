import React from 'react'
import { 
    InfoContainer,
    TextWrapper,
    TopLine,
    Subtitle,
    InfoWrapper,
    ImgWrap,
    Img,
    ProjectsWrapper,
    ProjectName,
    ProjectDescription,
    ProjectCard,
    ProjectWebsite,
    ProjectStatus
} from './ProjectsElements'
import { default as Test } from '../../images/icons/exam.png'

const ProjectsSection = () => {
    return (
        <InfoContainer id={'projects'}>
            <InfoWrapper>
                <TextWrapper>
                    <TopLine>OUR ONGOIN PROJECTS AND EXPERIMENTS</TopLine>
                    <Subtitle>Here you can see all the projects the team is currently working on.</Subtitle>
                </TextWrapper>
                <ImgWrap>
                    <Img src={Test} alt={"claim"} type={'img/png'}/> 
                </ImgWrap>
            </InfoWrapper>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectName>
                        MOTH COIN
                    </ProjectName>
                    <ProjectDescription>
                        The moth coin is an easy-to-use BEP-20 cryptocurrency. It was made to experiment with competitive redistribution systems.
                    </ProjectDescription>
                    <ProjectWebsite href={'mothmaster.com'} target={'_blank'}>
                        mothmaster.com
                    </ProjectWebsite>
                    <ProjectStatus>
                        Status: Launching Soon
                    </ProjectStatus>
                </ProjectCard>

                <ProjectCard>
                    <ProjectName>
                        CRYPTO CHUNK
                    </ProjectName>
                    <ProjectDescription>
                        The goal of this project was to test some ways to store a bunch of information directly on the blockchain instead of using a p2p storage.
                    </ProjectDescription>
                    <ProjectWebsite href={'https://cryptochunk.netlify.app/'} target={'_blank'}>
                        cryptochunk.netlify.app
                    </ProjectWebsite>
                    <ProjectStatus>
                        Status: Testing
                    </ProjectStatus>
                </ProjectCard>
            </ProjectsWrapper>
        </InfoContainer>
    )
}

export default ProjectsSection
