'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Components/modal.module.scss'

type Props = {
    children: React.ReactNode
}

export function Modal(props: Props) {

    return (
        <>
            <div className={style.modalWrap}>
                <div className={style.modalBox}>
                    {props.children}
                </div>
            </div>
        </>
    )
}