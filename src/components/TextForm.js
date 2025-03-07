import React, {useState} from 'react'

export default function TextForm(props) {
    const convertToUpperCase = ()=>{
        console.log("Convert to uppercase button is clicked ");
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to UpperCase","success         ");
    }

    const convertToLowerCase = ()=>{
        console.log("Convert to uppercase button is clicked ");
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to LowerCase","success         ");
    }

    const clearText = ()=>{
        settext('')
        props.showAlert("Text Cleared","success         ");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        settext(event.target.value)
    }

    // const [text, settext] = useState('Enter text here');
    const [text, settext] = useState('');

    return (
        <>
        <div className='container' style={{color: (props.mode === "light"?'#063a6e':'white')}} >
            <div className="mb-3">
                <h1>{props.heading}</h1>
                {/* <label htmlFor="textBox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" id="textBox" value={text} onChange={handleOnChange} rows="10" 
                style={{color: (props.mode === "light"?'#063a6e':'white'), backgroundColor: (props.mode === "light"?'white':'grey')}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={convertToUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={convertToLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
        </div>
        
        <div className="container my-3" style={{color: (props.mode === 'light'?'#063a6e':'white')}} >  
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview Text</h2>
            <p>{text.length>0?text:"Enter text in textbox above to preview it here"}</p>
        </div>
        </>
    )
}
