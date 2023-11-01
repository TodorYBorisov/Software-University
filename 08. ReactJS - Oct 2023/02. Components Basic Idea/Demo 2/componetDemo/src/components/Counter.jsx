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

    // if (click < 0) {
    //     return (<p> Invalid counter!</p>)

    // }

    // let warning = null;
    // if (click < 0) {
    //     warning = <p>Invalid count!</p>
    // }

    return (
        <div>
            <p>{click}</p>

            {/* {warning} */}

            {click < 0 ? <p>Invalid count</p> : null}

            {/* {click == 0 && <p>Please start incrementig!</p>}  */}



            <button onClick={onIncrementClick}>+</button>
            <button onClick={clear}>Clear</button>
            <button onClick={onDecrementClick}>-</button>
            {/* <button onClick={()=>setClicks(click-1)}>-</button> */}
        </div>
    )
};