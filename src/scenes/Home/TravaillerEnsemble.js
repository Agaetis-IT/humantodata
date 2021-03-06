import React from 'react'
import { withStyles, Typography } from 'material-ui'
import Separator from '../../components/Separator'
import Content from '../../components/Content'

const styles = theme => ({
  container: {
    marginTop: 30,
  },
  header: {
    color: theme.palette.secondary[200],
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
})

const TravaillerEnsemble = ({ classes }) => (
  <Content id="travailler-ensemble" className={classes.container}>
    <Typography component="h2" className={classes.header} align="center" gutterBottom>
      Pourquoi travailler ensemble ?
    </Typography>
    <Typography align="center" gutterBottom>
      Parce que vous pourrez valider rapidement l’efficacité et la pertinence de
      votre transformation digitale par “petits pas” concrets.
    </Typography>
    <Separator className={classes.separator} />
    <Typography variant="body2" align="center" gutterBottom>
      Avec pour objectif immédiat d’obtenir à très court terme des résultats
      probants : réduction des rebuts ou des arrêts de la chaîne de production,
      amélioration de la maîtrise de la qualité des produits... Et
      progressivement, être en capacité de{' '}
      <span className={classes.primary}>co-construire</span> un éco-système de
      production plus performant, plus efficient, plus stratégique.
    </Typography>
  </Content>
)

export default withStyles(styles)(TravaillerEnsemble)
