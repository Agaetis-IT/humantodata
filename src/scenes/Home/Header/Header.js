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
          { label: 'Vos enjeux' },
          { label: 'Notre approche' },
          { label: 'Pourquoi travailler ensemble ?' },
          { label: 'Comment nous pouvons intervenir ?' },
        ]}
      >
        Solutions
      </HeaderButton>
      <HeaderButton>Qui sommes nous ?</HeaderButton>
      <HeaderButton>Nous contacter</HeaderButton>
    </div>
  </div>
)

export default withStyles(styles)(Header)
