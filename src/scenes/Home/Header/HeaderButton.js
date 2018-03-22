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
    const { children, id, items, href } = this.props

    return (
      <Fragment>
        <Button
          aria-owns={anchorEl ? id : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          href={href}
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
              <MenuItem
                key={i}
                component="a"
                onClick={this.handleClose}
                href={item.href}
              >
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
