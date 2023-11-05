import { useState } from 'react';

export default function Counter() {

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


    let message = null;

    switch (click) {
        case 1:
            message = 'Test 1';
            break;

        case 2:
            message = 'Test 2';
            break;
        case 3:
            message = 'Test 3';
            break;
    }

    return (
        <div>
            <p>{click}</p>

            {/* {warning} */}

            {click < 0 ? <p>Invalid count</p> : null}

            {/* {click == 0 && <p>Please start incrementig!</p>}  */}
            <h4>{message}</h4>

            <button onClick={onIncrementClick}>+</button>
            <button onClick={clear}>Clear</button>
            <button onClick={onDecrementClick}>-</button>
            {/* <button onClick={()=>setClicks(click-1)}>-</button> */}
        </div>
    );
}