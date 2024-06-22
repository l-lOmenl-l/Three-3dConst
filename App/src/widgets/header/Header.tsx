import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from "react-router-dom";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
    <div className={styles.blockMenu}>
      <NavLink to='/construct'>Конструктор</NavLink>
      <NavLink to='/cart'>Корзина</NavLink>
      <p className={styles.textMenu}>Панель кассира</p>
      <p className={styles.textMenu}>Выход</p>
    </div>
    </header>
  )
}

export default Header