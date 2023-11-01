import { useState } from "react";
import { useEffect } from "react"
import styles from './FetchDemo.module.css';

export default function FetchDemo(props) {

    const [characters, setCharacters] = useState([]);

    // console.log(characters);

    const listNames = characters.map((character, index) => <li className={styles.listItem} key={index}>{character.name}</li>)

    useEffect(() => {
        fetch('https://swapi.dev/api//people')
            .then((responce) => responce.json())
            .then((data) => {
                setCharacters(data.results);
            })
            .catch((Error) => console.log(Error));
    }, [])



    return (
        <div>
            <h2>SW Characters</h2>
            <ul>
                {listNames}
            </ul>
        </div>
    )
}