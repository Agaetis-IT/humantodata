import React from 'react'
import { withStyles, Typography, Grid, IconButton } from 'material-ui'
import { Email, Twitter } from 'mdi-material-ui'
import Separator from '../../components/Separator'

const styles = theme => ({
  container: {
    marginTop: 30,
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 24,
  },
  primary: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  separator: {
    width: '60%',
    margin: '10px auto',
  },
  icons: {
    margin: 'auto',
    maxWidth: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
})

const Contact = ({ classes }) => (
  <div id="presentation" className={classes.container}>
    <Typography className={classes.header} align="center" gutterBottom>
      Contactez-nous
    </Typography>
    <Typography align="center" gutterBottom>
      Vous souhaitez en savoir plus sur nos solutions pour fiabiliser, stocker
      et faire parler vos données ? Nous sommes à votre disposition pour mettre
      en œuvre rapidement un POC (Proof of Concept) pour vous permettre de
      tester la pertinence de la démarche.
    </Typography>
    <Separator className={classes.separator} />
    <div className={classes.icons}>
      <IconButton href="#">
        <Email className={classes.icon} />
      </IconButton>
      <IconButton href="#">
        <Twitter className={classes.icon} />
      </IconButton>
    </div>
  </div>
)

export default withStyles(styles)(Contact)
