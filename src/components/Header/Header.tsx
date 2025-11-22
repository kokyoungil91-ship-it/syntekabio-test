"use client";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.leftMenu}>
          <a href="/" className={styles.logo}>
            LOGO
          </a>

          <nav aria-label="주요 메뉴">
            <a href="#">Menu1</a>
            <a href="#">Menu2</a>
            <a href="#">Menu3</a>
            <a href="#">Menu4</a>
          </nav>
        </div>

        <div className={styles.rightMenu}>
          <label htmlFor="lang" className="visually-hidden">
            언어 선택
          </label>
          <select id="lang">
            <option>한국어</option>
            <option>English</option>
            <option>日本語</option>
            <option>Español</option>
          </select>

          <a href="#" className={styles.loginBtn}>
            로그인
          </a>
        </div>
      </header>
    </div>
  );
}
