import React from 'react';
// import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TopLine,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoElements';

const InfoSection2 = ({
  lightBg,
  lightTopLine,
  topLine,
  imgStart,
  lightTextDesc,
  wideTextDesc,
  description,
  headline,
  lightText,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc, wideTextDesc}>{description}</Subtitle>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>

        </Container>
      </InfoSec>


    </>
  )
}


export default InfoSection2;
