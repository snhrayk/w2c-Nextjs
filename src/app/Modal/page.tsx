'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Modal/page.module.scss'
import { Modal } from '@/Components/Modal'
import { FaTimes } from "react-icons/fa"

export default function TimerPage() {

    const [flg, setFlg] = useState(false)

    return (
        <>
            <div className={style.modalPageWrap}>
                <button
                    className={style.btn}
                    onClick={() => setFlg(true)}
                >Modal表示</button>

                {flg &&
                    <Modal>
                        <div className={style.modalContents}>
                            <div className={style.modalBar}>
                                <FaTimes
                                    className={style.icon}
                                    onClick={() => setFlg(false)}
                                />
                            </div>
                            <div className={style.modalItem}>
                                <p className={style.text}>
                                    Modal表示完了です！！！！
                                </p>
                            </div>
                        </div>
                    </Modal>
                }
            </div >
        </>
    )
}