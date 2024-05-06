import { useState } from 'react';
import styles from './Card.module.css';
import Button from './button.jsx';

function Card({ img, title, description, repository, site }) {
    const [info, setInfo] = useState(false);
    const [imageClass, setImageClass] = useState(styles.image);

    function infoOn() {
        setInfo(true);
        setImageClass(styles.smallImage);
    }

    function infoOff() {
        setInfo(false);
        setImageClass(styles.image);
    }

    return (
        <div onMouseLeave={infoOff} className={styles.card}>
            <div>
                <a onMouseEnter={infoOn} href={site}>
                    <img src={img} alt='ERROR' className={imageClass} />
                </a>
                <h3>{title}</h3>
            </div>

            {info && (
                <section className={styles.details}>
                    <p>{description}</p>
                    <Button text='clique aqui' link={repository} />
                </section>
            )}
        </div>
    );
}

export default Card;
