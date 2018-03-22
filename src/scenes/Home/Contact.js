import React from 'react'
import { withStyles, Typography } from 'material-ui'
import Separator from '../../components/Separator'
import Content from '../../components/Content'

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
    margin: '15px auto',
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
  <Content id="contact" className={classes.container}>
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
    <Typography align="center" variant="body2" gutterBottom>
      Centre d’Affaires du Zénith - 48 rue de Sarliève - 63800 Cournon
      d’Auvergne - France{' '}
      <a href="mailto:contact@humantodata.com">contact@humantodata.com</a> -{' '}
      <a href="www.humantodata.com">www.humantodata.com</a>
    </Typography>
  </Content>
)

export default withStyles(styles)(Contact)
