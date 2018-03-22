import React, { Fragment } from 'react'
import Header from './Header/Header'
import Enjeu from './Enjeu'
import withStyles from 'material-ui/styles/withStyles'
import Approche from './Approche'
import TravaillerEnsemble from './TravaillerEnsemble'
import Intervenir from './Intervenir'
import Presentation from './Presentation'
import Contact from './Contact'
import Carousel from './Carousel/Carousel'

const styles = theme => ({
  content: {
    maxWidth: 740,
    margin: 'auto',
    paddingBottom: 90,
  },
})

const Home = ({ classes }) => (
  <Fragment>
    <Header />
    <Carousel />
    <div className={classes.content}>
      <Enjeu />
      <Approche />
      <TravaillerEnsemble />
      <Intervenir />
      <Presentation />
      <Contact />
    </div>
  </Fragment>
)

export default withStyles(styles)(Home)
