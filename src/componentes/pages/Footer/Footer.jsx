import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.contacts}>
                <div className={styles.row1}>
                    <h2> Meu contato: </h2>
                    <h2> Email: </h2>
                </div>
                <div className={styles.row2}>
                    <h2> 43 984851466 </h2>
                    <h2> contato.giovanicf@gmail.com </h2>
                </div>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li><a href="https://github.com/DevPlayer02"> <FaGithub size={75}/> </a></li>
                    <li><a href="https://www.linkedin.com/in/giovani-fortunato-86b23b251/"> <FaLinkedin size={75}/> </a></li>
                    <li><a href="https://www.instagram.com/xoxo_cvz/"> <FaInstagram size={75}/> </a></li>
                </ul>
            </div>
        </div>
    )
    
}

export default Footer;