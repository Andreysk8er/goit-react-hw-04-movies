import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavHead.module.css';
import rout from '../../Services/rout';

const mainNavigation = [styles.mainNavigation];
const ulMenu = [styles.menu];
const liMenu = [styles.liMenu];
const linkMenu = [styles.linkMenu];

const NavHead = () => (
  <header>
    <nav className={mainNavigation}>
      <ul className={ulMenu}>
        <li className={liMenu}>
          <Link to={rout.HOME} className={linkMenu}>
            Home
          </Link>
        </li>
        <li className={liMenu}>
          <Link to={rout.MOVIES} className={linkMenu}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavHead;
