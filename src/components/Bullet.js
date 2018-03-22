import React from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui'

const styles = theme => ({
  separator: {
    width: 25,
    height: 25,
    color: theme.palette.white,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: theme.palette.secondary[200],
    borderRadius: '50%',
  },
})

const Bullet = ({ classes, className, style, children }) => (
  <div className={classnames(classes.separator, className)} style={style}>
    {children}
  </div>
)

export default withStyles(styles)(Bullet)
