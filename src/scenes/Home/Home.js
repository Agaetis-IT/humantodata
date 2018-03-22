import React, { Fragment } from 'react'
import Header from './Header/Header'
import Enjeu from './Enjeu'
import withStyles from 'material-ui/styles/withStyles'
import Approche from './Approche'

const styles = theme => ({
  content: {
    maxWidth: 700,
    margin: 'auto',
  },
})

const Home = ({ classes }) => (
  <Fragment>
    <Header />
    <div className={classes.content}>
      <Enjeu />
      <Approche />
    </div>
  </Fragment>
)

export default withStyles(styles)(Home)
