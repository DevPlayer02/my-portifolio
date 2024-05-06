import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
                <h1> About Me</h1>
            <main className={styles.row}>
                <section className={styles.col}>
                    <div className={styles.contents}>
                        <div>
                            <h3> 2021 </h3>
                        </div>
                        <div className={styles.box}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className={styles.contents}>
                        <div>
                        <   h3> 2022 </h3>
                        </div>
                        <div className={styles.box}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className={styles.contents}>
                        <div>
                            <h3> 2023 </h3>
                        </div>
                        <div className={styles.box}>
                            
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className={styles.contents}>
                        <div>
                            <h3> 2024 </h3>
                        </div>
                        <div className={styles.box}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
    
}

export default AboutMe;