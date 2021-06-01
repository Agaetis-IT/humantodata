import React from 'react'
import logoImg from '../../../images/logo.png'
import { withStyles, Hidden, IconButton } from 'material-ui'
import HeaderButton from './HeaderButton'
import Drawer from './Drawer'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  container: {
    position: 'relative',
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
  drawerBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})

const Header = class extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <div className={classes.container}>
        <Hidden mdUp implementation="css" className={classes.drawerBtn}>
          <IconButton onClick={this.toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <img className={classes.logo} src={logoImg} alt="Logo" />
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
              {
                label: 'Comment nous pouvons intervenir ?',
                href: '#intervenir',
              },
            ]}
          >
            Solutions
          </HeaderButton>
          <HeaderButton href="#presentation">Qui sommes nous ?</HeaderButton>
          <HeaderButton href="#contact">Nous contacter</HeaderButton>
        </Hidden>
        <Drawer open={open} onClose={this.toggleDrawer} />
      </div>
    )
  }
}

export default withStyles(styles)(Header)
