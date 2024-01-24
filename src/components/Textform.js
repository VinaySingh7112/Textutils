import React,{useState} from 'react'

export default function Textform(props) {
    
    const [text, setText] = useState('');

    const handleOnChange =(event)=>{
        setText(event.target.value);
        
    
    }
    const handleUpClick =()=>{
        let newText =text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to uppercase!","success")
   
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText)
        props.showAlert("Clear all data!","success")
   
    }
    const handleCopy =()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copy all data!","success")
   
    }
    const handleExtraSpaces =()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces gone!","success")
   
    }
    const handleLoClick =()=>{
        let newText =text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
   
    return (
        <div div className=' pt-4'>
         <div style={{color:props.mode==='dark'?'white':'#042743'}}>
         <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" id='myBox' onChange={handleOnChange} value={text}  rows="6" style={{backgroundColor:props.mode==='dark'?'#13466e':'white' ,color:props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length===0} className='btn btn-outline-info mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button  disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button  disabled={text.length===0} className='btn btn-outline-info mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-1 my-1 ' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

          </div>
          <div className="container my-3">
             <h1>Your text summary</h1>
             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
             <h2>Preview</h2>
             <p className='pb-5'>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    
          </div>
         </div >
             
        </div>
    )
}
