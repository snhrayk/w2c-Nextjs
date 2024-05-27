"use client";

import Link from "next/link";
import style from "@/styles/page.module.scss";

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <h1>2年生 Next.js課題</h1>
      </header>
      <p className={style.modal}>
        <a href="#">Modal</a>
      </p>
      <p className={style.timer}>
        <a href="">Timer</a>
      </p>
    </>
  );
}
