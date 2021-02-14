import React from 'react';
// import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoElements';

const InfoSection3 = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  wideTextDesc,
  description,
  headline,
  lightText,
  topLine,
  start,
  img,
  alt,
  description2,
  headline2,
  topLine2,
  start2,
  img2,
  description3,
  headline3,
  topLine3,
  start3,
  img3,
  description4,
  headline4,
  topLine4,
  start4,
  img4,
  description5,
  headline5,
  topLine5,
  start5,
  img5,
  description6,
  headline6,
  topLine6,
  start6,
  img6,
  description7,
  headline7,
  topLine7,
  start7,
  img7,
  description8,
  headline8,
  topLine8,
  start8,
  img8,
  description9,
  headline9,
  topLine9,
  start9,
  img9,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline2}</Heading>
                <ImgWrapper start2={start2}>
                  <Img src={img2} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine2}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description2}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline3}</Heading>
                <ImgWrapper start3={start3}>
                  <Img src={img3} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine3}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description3}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline4}</Heading>
                <ImgWrapper start4={start4}>
                  <Img src={img4} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine4}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description4}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline5}</Heading>
                <ImgWrapper start5={start5}>
                  <Img src={img5} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine5}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description5}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline6}</Heading>
                <ImgWrapper start6={start6}>
                  <Img src={img6} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine6}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description6}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline7}</Heading>
                <ImgWrapper start7={start7}>
                  <Img src={img7} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine7}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description7}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline8}</Heading>
                <ImgWrapper start8={start8}>
                  <Img src={img8} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine8}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description8}</Subtitle>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline9}</Heading>
                <ImgWrapper start9={start9}>
                  <Img src={img9} alt={alt} />
                </ImgWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine9}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description9}</Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>

        </Container>
      </InfoSec>

    </>
  )
}

export default InfoSection3;
