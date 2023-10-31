import { useState } from "react";

export default function Timer(props) {

    const [time, setTime] = useState(0);//ползваме array destructuring assignment и задаваме начлана стойност от 0

    // console.log(time);
    
    //useEffect instead of setTime
    setTimeout(() => {
        setTime(time + 1);
    }, 3000);

    return (
        <div>
            <h3>Timer</h3>

            <p>{time}</p>
        </div>
    )
};