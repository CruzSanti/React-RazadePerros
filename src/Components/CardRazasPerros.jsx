import {Link} from  'react-router-dom'

function CardRazasPerros(props){
    return (
        <li className="breedCard">
            <Link to='/rhodesian'></Link>d
            <div className="contenedorImagen">
                <img src={props.imagen} alt={props.nombreRaza}/>
            </div>
            <span className="breedTitle">{props.nombreRaza} </span>
            </li>
    );
}

export default CardRazasPerros;
