import { useState } from "react"

const InpuTshortener = ({setInputValue}) => {

const handleClick = () =>{
    setInputValue(value);
    setValue("");
}

    const [value, setValue] = useState("");

    return(
        <div className="inputContainer">
            <h1>Encurtador De Link</h1>
            <span className="descriptions">Sua solução para links longos</span>
            <div>
                <input type="text" placeholder="Paste a Link" value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={handleClick}>shorten</button>
            </div>
        </div>
    )
}

export default InpuTshortener