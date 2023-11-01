import { useState } from "react";

export default function Counter(props) {

    const [click, setClicks] = useState(0);

    const onIncrementClick = () => {
        setClicks(click => click + 1);
    };

    const onDecrementClick = () => {
        setClicks(click => click - 1);
    };
    const clear = (event) => {
        console.log(event);
        setClicks(0);
    };

    return (
        <div>
            <p>{click}</p>
            <button onClick={onIncrementClick}>+</button>
            <button onClick={clear}>Clear</button>
            <button onClick={onDecrementClick}>-</button>
            {/* <button onClick={()=>setClicks(click-1)}>-</button> */}
        </div>
    )
};