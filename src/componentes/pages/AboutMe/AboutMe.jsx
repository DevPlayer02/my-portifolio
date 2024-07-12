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
                        <div onClick={() => toggleContentVisibility('2022')}>
                            <h3 className={openYear === '2022' ? styles.active : ''}> 2022 </h3>
                        </div>
                        {openYear === '2022' && (
                            <div className={styles.box}>
                                <p> 
                                    No final de 2022 pensando em qual área eu me dedicaria a vida inteira eu já tinha meus 
                                    primeiros contatos com programação, estava estudando para o vestibular para futuramente começar
                                    em um curso de TI e já codando algumas linhas utilizando Portugol.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2023')}>
                            <h3 className={openYear === '2023' ? styles.active : ''}> 2023 </h3>
                        </div>
                        {openYear === '2023' && (
                            <div className={styles.box}>
                                <p> 
                                    Já em 2023 montei meu PC e escolhi qual curso era o ideal para mim no momento,
                                    comecei com a Escola DNC também com o intuito de entrar mais rápido no mercado de trabalho
                                    aprendendo o essencial que um Dev FullStack precisa saber...
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contents}>
                        <div onClick={() => toggleContentVisibility('2024')}>
                            <h3 className={openYear === '2024' ? styles.active : ''}> 2024 </h3>
                        </div>
                        {openYear === '2024' && (
                            <div className={styles.box}>
                                <p> 
                                    Em 2024 sempre em busca de conhecimento e terminando meu curso imersivo da DNC busco 
                                    alguma oportunidade de mostrar minhas habilidades, adiquirir experiencia e começar
                                    minha carreira na area de TI.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutMe;
