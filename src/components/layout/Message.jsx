import { useEffect, useState } from 'react'
import styles from './Message.module.css'

export default function Message({ type, message }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!message) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 1500)

        return () => clearTimeout(timer)

    }, [message])

    return (
        <>
            {visible && (
                <div className={`${styles.msg} ${styles[type]}`}>
                    <p>{message}</p>
                </div>
            )}
        </>
    )
}
