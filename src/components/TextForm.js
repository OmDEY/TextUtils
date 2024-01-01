import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed", "success")
    }
    
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Text has been converted to UpperCase", "success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Text has been converted to LowerCase", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <>
        <div className='mt-3' style={{color: props.mode == 'dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode == 'dark'?'#13466e':'white', color: props.mode == 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container mt-3" style={{color: props.mode == 'dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>It will take {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
