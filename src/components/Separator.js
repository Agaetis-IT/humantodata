import React from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui'

const styles = theme => ({
  separator: {
    borderBottom: `2px dashed ${theme.palette.primary.main}`,
  },
})

const Separator = ({ classes, className, style }) => (
  <div className={classnames(classes.separator, className)} style={style} />
)

export default withStyles(styles)(Separator)
