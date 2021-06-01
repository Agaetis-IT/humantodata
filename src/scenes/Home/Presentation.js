import React from 'react'
import { withStyles, Typography } from 'material-ui'
import Separator from '../../components/Separator'
import teamImg from '../../images/team.png'
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
  team: {
    display: 'block',
    margin: 'auto',
    marginBottom: 30,
  },
  bullet: {
    '&::before': {
      content: "''",
      display: 'inline-block',
      width: 10,
      height: 10,
      marginRight: 8,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
    },
  },
})

const Presentation = ({ classes }) => (
  <Content id="presentation" className={classes.container}>
    <Typography component="h2" className={classes.header} align="center" gutterBottom>
      Qui sommes nous ?
    </Typography>
    <Typography align="center" gutterBottom>
      HumanToData est une marque du consortium{' '}
      <a href="https://www.agaetis.fr/">Agaetis</a>,{' '}
      <a href="https://www.deltamu.com/">Deltamu</a>,{' '}
      <a href="https://fr.linkedin.com/company/effi-cairn/">
        Effi'cairn
      </a>{' '}
      et{' '}
      <a href="https://www.phimeca.com/">
        PHIMECA Engineering
      </a>{' '}
      qui ont signé un contrat de partenariat pour la mise en place d’une offre
      commune au service de la{' '}
      <b>digitalisation effective et efficiente des industries.</b>
    </Typography>
    <Separator className={classes.separator} />
    <img className={classes.team} src={teamImg} alt="Our team" />
    <Typography variant="body2" gutterBottom>
      Ensemble, nous vous proposons de co-construire une solution collaborative
      à forte valeur ajoutée reposant sur la combinaison des 4 savoir-faire
      éprouvés :
    </Typography>
    <Typography variant="body2" className={classes.bullet} gutterBottom>
      Pilotage de la performance industrielle ;
    </Typography>
    <Typography variant="body2" className={classes.bullet} gutterBottom>
      Modélisation des phénomènes ;
    </Typography>
    <Typography variant="body2" className={classes.bullet} gutterBottom>
      Véracité des valeurs mesurées ;
    </Typography>
    <Typography variant="body2" className={classes.bullet} gutterBottom>
      Stratégie de traitement pour l’exploitation des données.
    </Typography>
  </Content>
)

export default withStyles(styles)(Presentation)
