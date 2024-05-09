'use client'

import style from '@/styles/Timer/page.module.scss'
import { Timer } from '@/Components/Timer'

export default function MpdalPage() {
    return (
        <>
            <div className={style.timerPageWrap}>
                <Timer />
            </div>
        </>
    )
}