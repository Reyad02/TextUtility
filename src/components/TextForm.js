import React,{useState} from 'react'
///useStae Hook

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase convert Successfully","success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase convert Successfully","success");

    } 

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Textarea has been cleared successfully","success");

    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        setText(text);
        props.showAlert("Text Copied","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState('');
///text contains "Enter text here"
///when you update text that will be set in setText

  return (
    <>
        <div className='container my-5' style={{color: props.mode==='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#5F6368',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'success'} mx-2`} onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'success'} mx-2`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'success'} mx-2`} onClick={handleCopyClick}>Copy to Clipboard</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'danger'} mx-2`} onClick={handleClearClick}>Clear</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{text.length>0?"Text Summary":""}</h1>
            {text.length>0 && <p> Words: {text.split(/\s+/).filter((element) =>{
                return element.length!==0  /// "/\s+/" this is a regular expression it will split by space and newline
            }).length} Length: {text.length}</p>}
            {/* <p>Words: {text.split(" ").length-1} Length: {text.length}</p> */}
            {/* text.split("") return an array */}
            {text.length>0 && <p> Time to read: {Math.ceil(0.008*text.split(" ").length)} min</p>}
            {/* <p>Time to read: {Math.ceil(0.008*text.split(" ").length)} min</p> */}
            {/* consider that,
            to read 125 words you need to 1 min
            to read 1 words you need to 1/125 min
                                        = 0.008 min */}
            <h3>{text.length>0?"Preview":""}</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
