import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.module.css';
import FetchDemo from './FetchDemo';



function App() {

    let numbers = [1, 2, 3, 4, 5, 6]
    const list = numbers.map((number, index) => <li className={styles.listItem} key={index}>{number}</li>)

    const [count, setCount] = useState(0)

    //console.log(list);

    // useEffect(() => {
    //     setTimeout(() => setCount(s => s + 1), 1000)
    // },[count])

    return (
        <div className={styles.list}>
            <FetchDemo/>

            {list}
        </div>
    )
}

export default App
