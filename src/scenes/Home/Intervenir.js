import React from 'react'
import { withStyles, Typography } from 'material-ui'
import Separator from '../../components/Separator'
import Bullet from '../../components/Bullet'
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
})

const Intervenir = ({ classes }) => (
  <Content id="intervenir" className={classes.container}>
    <Typography className={classes.header} align="center" gutterBottom>
      Comment nous pouvons intervenir ?
    </Typography>
    <Typography align="center" gutterBottom>
      Un projet d’innovation collaboratif en trois étapes pour une démarche
      pragmatique “QuickWin” :
    </Typography>
    <Separator className={classes.separator} />
    <Typography variant="body2" gutterBottom>
      <Bullet>1</Bullet> Atelier / Diagnostic pour définir le périmètre,
      identifier puis réduire le différentiel entre l’état de l’art et votre
      système de production actuel.
    </Typography>
    <Typography variant="body2" gutterBottom>
      <Bullet>2</Bullet> Mise en œuvre rapide d’un POC (moins de 3 mois) sur vos
      données pour évaluer les solutions IT envisagées et les outils d’analyse
      retenus.
    </Typography>
    <Typography variant="body2" gutterBottom>
      <Bullet>3</Bullet> Déploiement pour industrialiser et étendre la démarche.
      Accompagnement à la conduite du changement.
    </Typography>
  </Content>
)

export default withStyles(styles)(Intervenir)
