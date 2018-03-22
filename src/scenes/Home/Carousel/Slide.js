import React from 'react'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography/Typography'

const styles = theme => ({
  slide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 350,
    width: '100%',
    padding: '50px 0',
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    color: theme.palette.white,
  },
  img: {
    height: 100,
  },
})

const Slide = ({ classes, children, imgSrc, align }) => (
  <div className={classes.slide}>
    {imgSrc && <img className={classes.img} src={imgSrc} alt={children} />}
    <Typography align={align} className={classes.text}>
      {children}
    </Typography>
  </div>
)

Slide.defaultProps = {
  align: 'center',
}

export default withStyles(styles)(Slide)
