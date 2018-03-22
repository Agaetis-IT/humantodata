import React from 'react'
import logoImg from '../../../images/logo.png'
import { withStyles, Hidden } from 'material-ui'
import HeaderButton from './HeaderButton'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '10px 15px',
  },
  logo: {
    height: 80,
  },
  actions: {
    alignSelf: 'flex-end',
  },
})

const Header = ({ classes }) => (
  <div className={classes.container}>
    <img className={classes.logo} src={logoImg} alt="logo" />
    <Hidden
      className={classes.actions}
      only={['xs', 'sm']}
      implementation="css"
    >
      <HeaderButton
        items={[
          { label: 'Vos enjeux', href: '#enjeu' },
          { label: 'Notre approche', href: '#approche' },
          {
            label: 'Pourquoi travailler ensemble ?',
            href: '#travailler-ensemble',
          },
          { label: 'Comment nous pouvons intervenir ?', href: '#intervenir' },
        ]}
      >
        Solutions
      </HeaderButton>
      <HeaderButton href="#presentation">Qui sommes nous ?</HeaderButton>
      <HeaderButton href="#contact">Nous contacter</HeaderButton>
    </Hidden>
  </div>
)

export default withStyles(styles)(Header)
