import React, { PureComponent } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.white,
    },
  },
  container: {
    maxWidth: 960,
    margin: 'auto',
  },
})

class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.container}>
          <CssBaseline />
          <Routes />
        </div>
      </Router>
    )
  }
}

const AppWithStyles = withStyles(styles)(App)

export default hot(module)(AppWithStyles)
