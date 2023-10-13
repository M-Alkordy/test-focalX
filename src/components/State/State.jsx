import { useEffect, useState } from "react";
import Button from "../Button/Button";

const State = () => {
    const [num, setnum] = useState(0);
    const [data, setdata] = useState(0);
    useEffect(()=>{},[]);
  return (
    <div>
        <p>{num}</p>
        <Button num={setnum}/>
    </div>
  )
}

export default State