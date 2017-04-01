import React, { PropTypes } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children, title, showHeader }) => (
  <div style={{ padding: 20 }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {showHeader &&
      <header>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link prefetch href="/hero"><a>Hero</a></Link>
        </nav>
      </header>
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
  title: 'Hackaton',
  showHeader: true,
}

export default Layout

