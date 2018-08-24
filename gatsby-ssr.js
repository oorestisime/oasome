// Guide: https://material-ui.com/guides/server-rendering/
// NOTE
// - use require, imports do not work properly
//   (see https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-402591618)
const React = require('react')
const { renderToString } = require('react-dom/server')
const { JssProvider } = require('react-jss')
const { getPageContext } = require('./src/getPageContext')

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        pageContext
      })}
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: pageContext.sheetsRegistry.toString()
      }}
    />
  ])
}
