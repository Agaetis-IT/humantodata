import React from 'react'
import logoImg from '../../../images/logo.png'
import { withStyles } from 'material-ui'
import HeaderButton from './HeaderButton'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    <div className={classes.actions}>
      <HeaderButton
        items={[
          { label: 'Vos enjeux', href: '#enjeu' },
          { label: 'Notre approche', href: '#approche' },
          { label: 'Pourquoi travailler ensemble ?', href: '#travailler' },
          { label: 'Comment nous pouvons intervenir ?', href: '#intervenir' },
        ]}
      >
        Solutions
      </HeaderButton>
      <HeaderButton href="#presentation">Qui sommes nous ?</HeaderButton>
      <HeaderButton href="#contact">Nous contacter</HeaderButton>
    </div>
  </div>
)

export default withStyles(styles)(Header)
