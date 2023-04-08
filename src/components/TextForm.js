import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        console.log(" ");
        let newText = " ";
        setText(newText)
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(' '); 
    return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox1" rows="8" placeholder='Enter your text here.'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-2">
        <h2>
            Your test summary
        </h2>
            <p>Your text has {text.split(" ").length} word(s) and {text.length} charecters</p>

            <p>Takes {0.008 * (text.split(" ").length)} minutes to read</p>

            <h2>Preview</h2>
            <p>{text}</p>

    </div>
    </>
  )
}
