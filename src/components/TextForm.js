import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = ()=>{
        //console.log("Lowecase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = ()=>{
        //console.log("Lowecase was clicked" + text);
        let newText = ''
        setText(newText)
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
       </div>
       <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert to Lowecase</button>
       <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-dark mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
