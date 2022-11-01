import './assets/css/card.css'


type CardProps = {
    perfil: string;
    tempo: string;
    texto: string;
    urlImagem?:string;
}


function Card(props: CardProps){
    return(
        <div className= "card-div">
            <section className="foto">
                <img className="perfil-img" src={props.urlImagem}></img>
            </section>

            <section className="conteudo">
                <section className="topo">
                    <section className="topo-content">
                        <h3> {props.perfil}</h3>
                        <i className='bx bxs-circle'></i>
                        <span className='tempo'> {props.tempo}</span>
                    </section>
                    

                    <i className='bx bx-dots-horizontal-rounded'></i>
                </section>

                <section className="texto">
                    <p> {props.texto}</p>
                </section>

                <section className="botoes">
                    <i className='bx bx-comment' ></i>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-share-alt' ></i>
                </section>
            </section>
        </div>
    )
}

export default Card