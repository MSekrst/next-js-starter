// @flow

import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import styled, { keyframes } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import Switch from 'rc-switch'

import { store as initStore } from '../../src/store'
import { getHeroes } from '../../src/modules/Heroes/actions'
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

const TitleWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > *{
    width: 50%;
  }
  @media (max-width:  980px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 20px;
    & > *{
      width: 100%;
    }
  }
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
  padding-top: 5px;
  float: left;
  display: flex;
  border-right: 5px solid black;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width:  980px) {
    border-right: none;
  }
`

const FilterItem = styled.div`
  margin-bottom: 10px;
  & label{
    font-family: 'Source Code Pro', monospace;
  }
`

const Label = styled.label`
  width: 110px;
  display: inline-block;
  font-weight: 300;
  text-align: right;
`

const Divider = styled.hr`
  width: 95%;
  border-color: rgba(0,0,0,.12);
`
const Message = styled.h1`
  padding: 35px;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  color: #9239ff;
`

const filterData = (filter, data) => {
  let filtered = [...data]

  data.forEach((item) => {
    let del = true

    filter.forEach((fil) => {
      if (item.specialities.includes(fil)) {
        del = false
      }
    })

    if (del) {
      filtered = filtered.filter(i => i !== item)
    }
  })

  return filtered
}

class Heroes extends PureComponent {

  static getInitialProps({ isServer }) {
    return { isServer }
  }

  state = {
    filter: ['Design', 'Frontend', 'Backend', 'Algorithms'],
  }

  componentDidMount() {
    this.props.getHeroes()
  }

  filterChange(value, field) {
    let filter = [...this.state.filter]

    if (value) {
      filter.push(field)
    } else {
      filter = filter.filter(i => i !== field)
    }

    this.setState({ ...this.state, filter })
  }

  renderHeroes() {
    const ret = []
    let cnt = 0

    const filtered = filterData(this.state.filter, this.props.data)

    if (!filtered.length && !(this.props.data && this.props.data.length)) {
      return <Message> Loading ... </Message>
    }

    if (!filtered.length && this.props.data && this.props.data.length) {
      return <Message>No Heroes selected :(</Message>
    }

    filtered.forEach((h, i) => {
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
        <Divider key={cnt++} />,
      )
    })
    ret.pop()
    return ret
  }

  render() {
    return (
      <Layout title="Heroes">
        <HeroesWrapper>
          <TitleWrapper>
            <Title>Oure Heroes</Title>
            <FilterWrapper>
              <FilterItem>
                <Label>Design:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Design') }} />
              </FilterItem>
              <FilterItem>
                <Label>Frontend:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Frontend') }} />
              </FilterItem>
              <FilterItem>
                <Label>Backend:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Backend') }} />
              </FilterItem>
              <FilterItem>
                <Label>Algorithms: </Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Algorithms') }} />
              </FilterItem>
            </FilterWrapper>
          </TitleWrapper>
          {this.renderHeroes()}
        </HeroesWrapper>
      </Layout>
    )
  }
}

export default withRedux(
  () => initStore,
  state => ({
    data: state.heroes
  }),
  dispatch => ({
    getHeroes: bindActionCreators(getHeroes, dispatch)
  })
)(Heroes)
