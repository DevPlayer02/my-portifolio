import Card from '../../element/Card';
import styles from './Projects.module.css'
import previsaoAPI from './../../../assets/previsaoAPI.png'
import portifolio from './../../../assets/portifolio.png'
import bootcamp from './../../../assets/bootcamp.png'
import spotify from './../../../assets/spotify.png'

function Projects() {
    return (
        <div className={styles.projects}>
            <h1> Projects </h1>
            <div className={styles.cards}>
                <Card
                img={previsaoAPI}
                title='PROJETO DE CONSUMO DE API'
                description='Esse projeto consome as APIs de cep e de tempo
                            de acordo com os dados recebidos do formulário,
                            as tecnologias usadas foram HTML5, CSS3 e JavaScript'
                repository='https://github.com/DevPlayer02/tela_funcional_api_-previsao-do-tempo-'
                site='https://tela-funcional-api-previsao-do-tempo.vercel.app/' />
                <Card
                img={portifolio}
                title='PROJETO PORTIFOLIO UTILIZANDO HOOKS'
                description='Esse projeto foi meu antigo portifolio criado em
                            react utilizando useState e useEffect'
                repository='https://github.com/DevPlayer02/portifolio/tree/master/src'
                site='https://portifolio-theta-pink.vercel.app/'/>
                <Card
                img={bootcamp}
                title='PROJETO BOOTCAMP RESPONSIVO'
                description='Esse é meu projeto bootcamp que recebe dados no formulário
                            e envia para uma planilha com responsivo de 600px'
                repository='https://github.com/DevPlayer02/Bootcamp-DNC?tab=readme-ov-file'
                site='https://bootcamp-dnc-devplayer02.netlify.app/'/>
                <Card
                img={spotify}
                title='PROJETO FRONT-END CLONE SPOTIFY'
                description='Esse é um dos meus primeiros projetos, é um clone front-end
                            da plataforma de música do spotify, que toca a música e altera a
                            foto do player'
                repository='https://github.com/DevPlayer02/Spotify'
                site='https://fluffy-yeot-699675.netlify.app/'/>
            </div>
        </div>
    )
    
}

export default Projects;
