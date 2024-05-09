'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Components/timer.module.scss'

export function Timer() {

    let [second, setSecond] = useState(0)
    let [minits, setMinits] = useState(0)
    let [hour, setHour] = useState(0)
    const [timerFlg, setTimerFlg] = useState(false)


    function Up() {
        setSecond(second += 1)
        if (second === 60) {
            setMinits(minits += 1)
            setSecond(second = 0)
        }
        else if (minits === 60) {
            setHour(hour += 1)
            setMinits(minits = 0)
        }
    }

    useEffect(() => {
        if (timerFlg) {
            const secondtimer = setInterval(Up, 1000)
            return () => clearInterval(secondtimer)
        }
    }, [timerFlg])


    return (
        <>
            <div className={style.timerWrap}>
                <p className={style.timeText}>{hour}時間{minits}分{second}秒</p>
                <div className={style.btnBox}>
                    <button
                        className={style.btn}
                        onClick={() => setTimerFlg(true)}
                    >START</button>
                    <button
                        className={style.btn}
                        onClick={() => setTimerFlg(false)}
                    >STOP</button>
                    <button
                        className={style.btn}
                        onClick={() => {
                            setHour(0)
                            setMinits(0)
                            setSecond(0)
                            setTimerFlg(false)
                        }}
                    >RESET</button>
                </div>
            </div>
        </>
    )
}