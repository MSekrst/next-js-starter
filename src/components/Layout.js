import React, { PropTypes } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Header = styled.header`
  margin: -20px;
  padding: 10px;
  background-color: rgba(146, 57, 255, 0.75);
`

const Layout = ({ children, title, showHeader }) => (
  <div style={{ padding: 20 }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {showHeader &&
      <Header>
        <Link prefetch href="/"><a href="/"><img src="/static/img/logo.png" alt="Tigrovi" width={'50px'} height={'50px'} /></a></Link>
      </Header>
    }

    {children}

  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  showHeader: PropTypes.bool,
}

Layout.defaultProps = {
  title: 'Tigrovi',
  showHeader: true,
}

export default Layout

