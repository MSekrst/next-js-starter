import styled from 'styled-components'

export const Button = styled.a`
  background: black;
  color: white;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 20px;
  text-transform: uppercase;
  font-family: 'Source Code Pro', monospace;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.5);
`
export const HeroWrapper = styled.div`
  padding: 60px 30px;
  transition: 0.5s all;
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  justify-content: space-around;
  @media (max-width:  980px) {
    flex-direction: column;
    padding: 0;
  }
`

export const ContactsWrapper = styled.div`
  width: 80px;
  height: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width:  980px) {
    width: auto;
    height: auto;
    display: block;
  }
`

export const Contact = styled.img`
  height: 20px;
  margin: 10px;
  cursor: pointer;
`

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  transform: rotate(-45deg);
  transition: 0.3s all;
`
export const PictureWrapper = styled.div`
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

export const InfoWrapper = styled.div`
  max-width: 600px;
  float: ${props => !props.right ? 'right' : 'left'};
  text-align: ${props => props.right ? 'left' : 'right'};
  font-family: 'Source Code Pro', monospace;
  & p{
    text-align: justify;
  }
  @media (max-width:  980px) {
    max-width: 100%;
    float: none;
  }
`

export const Name = styled.h1`
  margin: 0;
  padding: 10px 0 5px;
  font-size: 70px;
  font-family: 'Open-sans', sans-serif;
  font-weight: 700;
  @media (max-width:  980px) {
    font-size: 2.5em;
  }
`

export const Specialities = styled.h3`
  margin: 0;
  margin-top: -10px;
  padding: 5px 0 5px 0;
  font-weight: 200;
`

export const Role = styled.h3`
  margin: 0;
  padding: 5px 0 5px 0;
  color: rgba(146, 57, 255, 0.75);
`

export const Imgs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  @media (max-width:  980px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`
