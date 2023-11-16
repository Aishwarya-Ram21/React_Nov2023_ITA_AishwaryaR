import {useState} from "react";
function Id()
{
    const[num,setNum]=useState(0);
    const changeNum =() => {
        let v=num;
        setNum(++v);
    }
    const changeNo = () => {
        let v=num;
        setNum(--v);
    }
    return(
        <div>
            <h1>INCREASE & DECREASE</h1>
            <hr></hr>
            <h2>Number : {num}</h2>
            <button onClick={changeNum}>INCREASE</button>
            <button onClick={changeNo}>DECREASE</button>

        </div>
    );
}
export default Id;