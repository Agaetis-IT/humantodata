import React from 'react'
import { Drawer, List, ListItem, ListItemText, withStyles } from 'material-ui'

const styles = {
  list: {
    width: 250,
  },
}

const CustomDrawer = ({ classes, open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
      className={classes.list}
    >
      <List>
        <ListItem button component="a" href="#enjeu">
          <ListItemText primary="Vos enjeux" />
        </ListItem>
        <ListItem button component="a" href="#approche">
          <ListItemText primary="Notre approche" />
        </ListItem>
        <ListItem button component="a" href="#travailler-ensemble">
          <ListItemText primary="Pourquoi travailler ensemble ?" />
        </ListItem>
        <ListItem button component="a" href="#intervenir">
          <ListItemText primary="Comment nous pouvons intervenir ?" />
        </ListItem>
        <ListItem button component="a" href="#presentation">
          <ListItemText primary="Qui sommes nous ?" />
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ListItemText primary="Nous contacter" />
        </ListItem>
      </List>
    </div>
  </Drawer>
)

export default withStyles(styles)(CustomDrawer)
