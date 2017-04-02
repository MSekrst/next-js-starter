import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import '../src/globalStyles'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style
        className="ssr-styles globals"
        dangerouslySetInnerHTML={{
          __html: styleSheet
            .rules()
            .map(rule => rule.cssText)
            .join('\n'),
        }}
      />)
    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Tigrovi</title>
          <link rel="shortcut icon" type="image/png" href="static/img/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
