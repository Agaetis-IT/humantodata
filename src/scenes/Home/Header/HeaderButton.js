import React, { Fragment } from 'react'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import uuid from 'uuid/v4'

class HeaderButton extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    const { items } = this.props
    if (items) {
      this.setState({ anchorEl: event.currentTarget })
    }
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { children, id, items } = this.props

    return (
      <Fragment>
        <Button
          aria-owns={anchorEl ? id : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {children}
        </Button>
        {items && (
          <Menu
            id={id}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {items.map((item, i) => (
              <MenuItem key={i} onClick={this.handleClose}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Fragment>
    )
  }
}

HeaderButton.defaultProps = {
  items: null,
  id: uuid(),
}

export default HeaderButton
