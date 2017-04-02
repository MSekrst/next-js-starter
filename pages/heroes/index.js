import styled, { keyframes } from 'styled-components'

import Layout from '../../src/components/Layout'
import Hero from '../../src/components/Hero'

const show = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0.01;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeroesWrapper = styled.div`
  margin: 0 5% 0 5%;
  animation: ${show} 0.5s ease-in-out;
`

const Title = styled.h1`
  padding: 20px 50px 20px 50px;
  margin-bottom: 0;
  font-weight: 900;
`

const Divider = styled.hr`
  width: 90%;
  background-color: rgba(0,0,0,.2);
`

const data = [
  {
    name: 'Bruna Anđelić',
    picture: '/static/img/bruna.jpeg',
    role: 'Team leader',
    specialities: 'Dizajn + Frontend',
    description: 'Lorem ipsum dolor sit amet...',
    contact: {
      fb: 'https://www.facebook.com/bruna.andjelic',
      github: 'https://github.com/bAndelic',
      mail: 'bruna.andelic@fer.hr',
    },
  }, {
    name: 'Frane Polić',
    picture: '/static/img/frane.jpeg',
    role: 'Developer',
    specialities: 'Frontend + Backend',
    description: 'Lorem ipsum dolor sit amet...',
    contact: {
      fb: 'https://www.facebook.com/frane.polic.1',
      github: 'https://github.com/fPolic',
      mail: 'frane.polic@fer.hr',
    },
  }, {
    name: 'Mihael Marović',
    picture: '/static/img/mihael.jpeg',
    role: 'Developer',
    specialities: 'Backend + Algorithms',
    description: 'Lorem ipsum dolor sit amet...',
    contact: {
      fb: 'https://www.facebook.com/mihael.marovic',
      in: 'https://www.linkedin.com/in/mihael-marovi%C4%87-27021a125/',
      github: 'https://github.com/mihaelM',
      mail: 'mihael.marovic@fer.hr',
    },
  }, {
    name: 'Matija Šekrst',
    picture: '/static/img/matija.jpeg',
    role: 'Developer',
    specialities: 'Backend + Frontend',
    description: `Currently tackling fourth year of Software Engineering at FER Zagreb. 
    Passionate about web development. Enjoys writing fast and scalable Node APIs with 
    a bit of React twist. Currently working as software intern in SofaScore.
    Check his recent projects at GitHub.`,
    contact: {
      fb: 'https://www.facebook.com/matija.sekrst',
      in: 'https://www.linkedin.com/in/matija-sekrst/',
      github: 'https://github.com/MSekrst',
      mail: 'matija.sekrst@fer.hr',
    },
  }]

const renderHeroes = () => {
  const ret = []
  let cnt = 0
  data.forEach((h, i) => {
    ret.push(
      <Hero
        key={cnt++}
        name={h.name}
        picture={h.picture}
        role={h.role}
        specialities={h.specialities}
        description={h.description}
        contact={h.contact}
        right={i % 2 !== 0}
      />,
      <Divider key={cnt++} />
    )
  })
  ret.pop()
  return ret
}

export default () => (
  <Layout title="Heroes">
    <Title>Heroes</Title>
    <HeroesWrapper>
      {renderHeroes()}
    </HeroesWrapper>
  </Layout>
)
