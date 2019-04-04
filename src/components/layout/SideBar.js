import React from 'react';
import { slide as Menu } from 'react-burger-menu';

// CONSTANTS
import NAV_ITEMS from 'constants.js';

// ROUTING
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen }) => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: 'white'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
    <Menu pageWrapId={'page-wrap'} isOpen={isOpen} styles={styles}>
      <a className="menu-item">Home</a>
    </Menu>
  )
}

export default SideBar;