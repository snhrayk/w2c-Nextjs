'use client'

import Link from 'next/link'
import style from "@/styles/page.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.pageWrap}>
        <header className={style.header}>
          <h1 className={style.title}>2年生 Next.js課題</h1>
        </header>
        <div className={style.pageContents}>
          <Link className={style.link} href={'./Modal'}>Modal</Link>
          <Link className={style.link} href={'./Timer'}>Timer</Link>
        </div>
      </div>
    </>
  );
}
