import React, { Fragment } from 'react'
import Header from './Header/Header'
import Enjeu from './Enjeu'
import withStyles from 'material-ui/styles/withStyles'
import Approche from './Approche'
import TravaillerEnsemble from './TravaillerEnsemble'
import Intervenir from './Intervenir'

const styles = theme => ({
  content: {
    maxWidth: 740,
    margin: 'auto',
  },
})

const Home = ({ classes }) => (
  <Fragment>
    <Header />
    <div className={classes.content}>
      <Enjeu />
      <Approche />
      <TravaillerEnsemble />
      <Intervenir />
    </div>
  </Fragment>
)

export default withStyles(styles)(Home)
