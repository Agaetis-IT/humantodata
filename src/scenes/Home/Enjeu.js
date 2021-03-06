import React from 'react'
import { withStyles, Typography, Grid, Hidden } from 'material-ui'
import transformingFactoriesImg from '../../images/transformingFactories.png'
import redArrowImg from '../../images/redArrow.png'
import Content from '../../components/Content'

const styles = theme => ({
  container: {
    marginTop: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: 700,
    color: theme.palette.secondary[200],
  },
  blocTitle: {
    fontSize: 24,
  },
  blocSubtitle: {
    fontSize: 24,
    fontWeight: 700,
  },
  transformingFactoriesImg: {
    marginTop: 45,
    display: 'block',
    margin: 'auto',
  },
  arrow: {
    paddingRight: 30,
  },
  block: {
    backgroundColor: theme.palette.secondary[200],
    padding: 15,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '& li > *': {
      margin: '10px 0',
    },
    '& li > *::before': {
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

const Enjeu = ({ classes }) => (
  <div id="enjeu" className={classes.container}>
    <Content>
      <h1 className={classes.header}>
        <Typography className={classes.title}>
          Votre enjeu des 5 prochaines années :
        </Typography>
        <Typography className={classes.subtitle}>
          réussir la digitalisation de votre industrie
        </Typography>
      </h1>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography>
            Big Data, Usine du futur, Factory 4.0, IA… quels que soient les
            concepts à la mode, la digitalisation de votre système de production
            est un passage à la fois obligé et stimulant pour votre entreprise.
            Sa capacité à innover et à se différencier en dépendent.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Encore faut-il que ce passage s’effectue de façon pragmatique, en
            partant de votre patrimoine data disponible, en vérifiant rapidement
            l’efficacité des solutions proposées, en favorisant leur adoption
            par l’ensemble de l’organisation, de l’opérateur jusqu’au dirigeant.
          </Typography>
        </Grid>
      </Grid>
    </Content>

    <img
      className={classes.transformingFactoriesImg}
      src={transformingFactoriesImg}
      alt="Transforming factories..."
    />

    <div className={classes.block}>
      <Typography component="h2" className={classes.blocTitle} gutterBottom>
        Vos défis concrets :
      </Typography>
      <Typography component="h3" className={classes.blocSubtitle}>
        Accroître la performance industrielle :
      </Typography>
      <div className={classes.list}>
        <Hidden only="xs" implementation="css">
          <img src={redArrowImg} className={classes.arrow} alt="Arrow" />
        </Hidden>
        <ul>
          <li>
            <Typography>
              limiter les temps d’arrêt de production, les contrôles inutiles
            </Typography>
          </li>
          <li>
            <Typography>
              atteindre l’efficience, c’est à dire concevoir “au juste
              nécessaire” et l’obtenir “du premier coup”
            </Typography>
          </li>
          <li>
            <Typography>améliorer le “Time to market”…</Typography>
          </li>
          <li>
            <Typography>
              anticiper les problèmes de la production (maintenance prédictive)
              et limiter les non-conformités
            </Typography>
          </li>
          <li>
            <Typography>
              réduire les contraintes pour permettre aux opérateurs de se
              concentrer sur la production et remporter leur adhésion
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(Enjeu)
