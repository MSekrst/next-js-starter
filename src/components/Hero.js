import React, { PropTypes } from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  padding: 60px 30px;
  height: 230px;
  transition: 0.5s all;
`

const ContactsWrapper = styled.div`
  width: 80px;
  height: 230px;
  float: ${props => props.right ? 'right' : 'left'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Contact = styled.img`
  height: 20px;
  margin: 10px;
  cursor: pointer;
`

const Picture = styled.img`
  width: 200px;
  height: 200px;
  transform: rotate(-45deg);
  transition: 0.3s all;
`
const PictureWrapper = styled.div`
  float: ${props => props.right ? 'right' : 'left'};
  margin: 20px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: rotate(45deg);
  transition: 0.3s all;
  &:hover{
    transform: rotate(60deg);
    border-radius: 50%;
    & img{
      transform: rotate(-60deg);
    }
  }
`

const InfoWrapper = styled.div`
  float: ${props => props.right ? 'right' : 'left'};
  text-align: ${props => props.right ? 'left' : 'right'};
  width: calc(100% - 330px);
  font-family: 'Source Code Pro', monospace;
`

const Name = styled.h1`
  margin: 0;
  padding: 10px 0 5px;
  font-size: 70px;
  font-family: 'Open-sans', sans-serif;
  font-weight: 700;
`

const Specialities = styled.h3`
  margin: 0;
  padding: 5px 0 5px 0;
  font-weight: 200;
`

const Role = styled.h3`
  margin: 0;
  padding: 5px 0 5px 0;
  color: rgba(146, 57, 255, 0.75);
`

const Hero = ({ name, picture, role, specialities, description, contact, right }) => (
  <HeroWrapper>
    <ContactsWrapper right={right}>
      {contact.fb && <a href={contact.fb}><Contact src="/static/img/fb.png" alt="facebook" /></a>}
      {contact.in && <a href={contact.in}>
        <Contact src="/static/img/linkedin.png" alt="linkedin" /></a>}
      {contact.github && <a href={contact.github}>
        <Contact src="/static/img/github.png" alt="github" /></a>}
      {contact.mail && <a href={`mailto:${contact.mail}`}>
        <Contact src="/static/img/mail.png" alt="mail" /></a>}
    </ContactsWrapper>
    <PictureWrapper right={right}>
      <Picture src={picture} />
    </PictureWrapper>
    <InfoWrapper right={right}>
      <Name>{name}</Name><br />
      <Role>{role}</Role>
      <Specialities>{specialities}</Specialities>
      <p>
        {description}
      </p>
    </InfoWrapper>
  </HeroWrapper>
)

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  role: PropTypes.string,
  specialities: PropTypes.string,
  description: PropTypes.string,
  right: PropTypes.bool,
}

Hero.defaultProps = {
  name: 'Ivo Ivić',
  picture: 'url to the picture',
  role: 'Team leader',
  specialities: 'Backend',
  description: 'Lorem ipsum dolor sit amet...',
  contact: {
    fb: 'facebook url',
    in: 'linked in url',
    github: 'sithub url',
    mail: 'someone@somewhere.com',
  },
  right: false,
}

export default Hero

