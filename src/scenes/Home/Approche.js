import React from 'react'
import { withStyles, Typography, Grid, Hidden } from 'material-ui'
import startsWithPeopleImg from '../../images/startsWithPeople.png'
import yellowArrowImg from '../../images/yellowArrow.png'
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
  primary: {
    color: theme.palette.primary.main,
  },
  blocTitle: {
    fontSize: 24,
  },
  blocSubtitle: {
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
    backgroundColor: theme.palette.secondary[400],
    padding: 15,
    '& *': {
      color: theme.palette.white,
    },
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
      backgroundColor: theme.palette.secondary[200],
      borderRadius: '50%',
    },
  },
})

const Enjeu = ({ classes }) => (
  <div id="approche" className={classes.container}>
    <Content>
      <div className={classes.header}>
        <Typography component="h2" className={classes.title}>
          Notre approche : vous accompagner de façon{' '}
          <span className={classes.primary}>innovante</span> et{' '}
          <span className={classes.primary}>globale</span>
        </Typography>
      </div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography>
            En supprimant les frontières traditionnelles de l’entreprise, la
            digitalisation ouvre de nouveaux chemins et favorise l’innovation.
            HumanToData est née de la volonté de 4 entreprises innovantes :
            Agaetis, Deltamu, Effi'cairn et Phimeca Engineering.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Impliquées depuis plusieurs années dans l’optimisation des procédés
            de fabrication, celles-ci ont décidé elles-mêmes d’innover en
            dépassant leurs “frontières” – leurs expertises et leurs expériences
            spécifiques – pour les mettre en commun.
          </Typography>
        </Grid>
      </Grid>
    </Content>

    <img
      className={classes.transformingFactoriesImg}
      src={startsWithPeopleImg}
      alt="...starts with people."
    />
    <div className={classes.block}>
      <Typography component="h2" className={classes.blocTitle} gutterBottom>
        Notre intervention à vos côtés :
      </Typography>
      <Typography component="h3" className={classes.blocSubtitle}>
        Une démarche globale qui s’appuie sur les 4 fondamentaux d’une
        digitalisation réussie : Accroître la performance industrielle :
      </Typography>
      <div className={classes.list}>
        <Hidden only="xs" implementation="css">
          <img src={yellowArrowImg} className={classes.arrow} alt="Arrow" />
        </Hidden>
        <ul>
          <li>
            <Typography>
              <b>
                le pilotage de la performance et la prise en compte du facteur
                humain
              </b>, parce que plus le système s’automatise, plus l’adhésion et
              l’engagement de ceux qui le pilotent est une condition de la
              réussite Cette conviction se retrouve dans notre nom
            </Typography>
          </li>
          <li>
            <Typography>
              <b>la modélisation des phénomènes et la DataScience</b>, parce
              qu’il est nécessaire de combiner l’ensemble des sources
              d’informations disponibles dans un cadre cohérent pour l’aide à la
              décision
            </Typography>
          </li>
          <li>
            <Typography>
              <b>la véracité des données</b> parce que l’assurance de la
              fiabilité des valeurs mesurées est un impératif pour maîtriser le
              risque d’une décision basée sur un résultat de mesure
            </Typography>
          </li>
          <li>
            <Typography>
              <b>
                la définition et mise en oeuvre de la stratégie et des outils IT
              </b>{' '}
              adaptés pour centraliser toutes les données opérationnelles et
              permettre leur exploitation optimale par les hommes et les femmes
              qui les utilisent.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(Enjeu)
