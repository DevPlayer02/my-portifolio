import React, { useState, useEffect } from 'react';
import Button from '../../element/button';
import styles from './Presentation.module.css';

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Giovani Chaves', 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    };

    return (
        <div className={styles.presentation} id="presentation">
            <h1>Bem-vindo! Meu nome é {text}</h1>
            <p> Sempre me dei bem quando o assunto era tecnologia e isso não mudou até hoje, me dedicando dia após dia sigo estudando e
                aprimorando minhas habilidades. Consequentemente busco trazer soluções inovadoras para problemas 
                complexos. Estou em busca de oportunidades que me tragam novos desafios para poder me tornar um excelente profissional
                no mercado de tecnologia. </p>
            <Button text='Saber mais'/>
        </div>
    );
}

export default Presentation;
