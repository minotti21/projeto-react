import styles from './Container.module.css'

function Container({ children, customClass }) {
    return (
        <div className={`${styles["container"]} ${styles[customClass]}`}>
            {children}
        </div>
    )
}

export default Container
