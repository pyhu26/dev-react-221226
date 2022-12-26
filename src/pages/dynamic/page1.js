import React from 'react';

export default function Page1() {

    const [useInput, setInput] = React.useState("");
    const HandleInput = (e)=>{
        console.log("HandleInput", e.target.value);
        setInput(e.value)
    };

    return (
        <React.Fragment>
            <h2 className={'content-block'}>Page1</h2>
            <input type="text" value={useInput} onChange={HandleInput}></input>
        </React.Fragment>
    )
}

