import React from 'react'
import { withStyles } from 'material-ui'
import classnames from 'classnames'

const styles = theme => ({
  container: {
    padding: '0 15px',
  },
})

const Content = ({ id, classes, className, children }) => (
  <div id={id} className={classnames(classes.container, className)}>
    {children}
  </div>
)

export default withStyles(styles)(Content)
