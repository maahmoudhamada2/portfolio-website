import { StyleSheet, css } from "aphrodite/no-important"
import { useEffect, useState } from "react"
import BackTopIcon from "./BackTopIcon"

const buttonStyle = StyleSheet.create({
    btnContainer: {
        width: '50px',
        height: '50px',
        opacity: '0',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        border: '0',
        zIndex: '1000',
        transition: '0.5s opacity',
        borderRadius: '20px',
        cursor: 'pointer'
    },
    showBtn: {
        opacity: '1'
    }
})

export default function ScrollTop() {
    const [visible, setVisible] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    const scrollTop = () => {
        window.scroll({
            top: 0
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <button onClick={scrollTop} className={css(buttonStyle.btnContainer, visible && buttonStyle.showBtn)}>
            <BackTopIcon />
        </button>
    )
}