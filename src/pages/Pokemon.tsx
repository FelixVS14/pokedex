import {useNavigate,useParams} from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer"
import BulbasaurImg from "../assets/bulbasaur.gif"
import styles from "./pokemon.module.css"

const Pokemon = () => {
    const {name} = useParams();
    const navigate = useNavigate();

    return <>
    <button className={styles.pokeballButton} onClick={()=> navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Go Back
    </button>
    <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
        <div>Nr.001</div>
        <div>  
             <img className={styles.pokemonInfoImg} src={BulbasaurImg} alt="Bulbasaur" />
        </div>
        <div>HP: 000</div>
        <div>Attack: 20</div>
        <div>Defense: 40</div>
        </main>
    </div>
    <Footer/>


    </>;
};

export default Pokemon;