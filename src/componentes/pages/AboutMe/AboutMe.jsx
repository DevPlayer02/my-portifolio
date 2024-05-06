import React, { useState } from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
    const [openYear, setOpenYear] = useState(null);

    const toggleContentVisibility = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    return (
        <div className={styles.aboutMe}>
            <h1> About Me</h1>
            <main className={styles.row}>
                <section className={styles.col}>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2021')}>
                            <h3 className={openYear === '2021' ? styles.active : ''}> 2021 </h3>
                        </div>
                        {openYear === '2021' && (
                            <div className={styles.box}>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2022')}>
                            <h3 className={openYear === '2022' ? styles.active : ''}> 2022 </h3>
                        </div>
                        {openYear === '2022' && (
                            <div className={styles.box}>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2023')}>
                            <h3 className={openYear === '2023' ? styles.active : ''}> 2023 </h3>
                        </div>
                        {openYear === '2023' && (
                            <div className={styles.box}>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2024')}>
                            <h3 className={openYear === '2024' ? styles.active : ''}> 2024 </h3>
                        </div>
                        {openYear === '2024' && (
                            <div className={styles.box}>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutMe;
