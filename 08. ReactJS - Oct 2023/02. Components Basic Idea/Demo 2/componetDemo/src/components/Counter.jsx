import { useState } from "react";

export default function Counter(props) {

    const [click, setClicks] = useState(0);

    const onIncrementClick = () => {
        setClicks(click + 1);
    };

    const onDecrementClick = () => {
        setClicks(click -1);
    };

    return (
        <div>
            <p>{click}</p>
            <button onClick={onIncrementClick}>+</button>
            <button onClick={onDecrementClick}>-</button>
            {/* <button onClick={()=>setClicks(click-1)}>-</button> */}
        </div>
    )
};