"use client";

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/img/logo-blue.png"
        alt="Praktikblog logo"
        width={120}
        height={120}
        priority
        className={styles.logo}
      />
      <h1 className={styles.title}>Praktikblog</h1>
      <p className={styles.subtitle}>Mia Michelle Mogensen - Frontend praktik</p>
    </header>
  );
}
