import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="https://www.linkedin.com/in/viniciusminotti/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li className={styles.item}><a href="https://github.com/minotti21" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                <li className={styles.item}><a href="https://www.instagram.com/_minotti2/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li className={styles.item}><a href="https://www.instagram.com/_minotti2/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
            </ul>
            <p className={styles.copyright}><span>Costs</span> &copy; 2021</p>
        </footer>
    )
}
