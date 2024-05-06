import React from "react";
import styles from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.links}>
                <li><Nav.Link href="#Projects"> Projects </Nav.Link></li>
                <li><Nav.Link href="#Technologies"> Technologies </Nav.Link></li>
                <li><Nav.Link href="#AboutMe"> About me </Nav.Link></li>
            </ul>
            <ul className={styles.icons}>
                <li><a href="https://github.com/DevPlayer02"> <FaGithub size={30}/> </a></li>
                <li><a href="https://www.linkedin.com/in/giovani-fortunato-86b23b251/"> <FaLinkedin size={30}/> </a></li>
            </ul>
        </div>
    );
}

export default Navbar;
