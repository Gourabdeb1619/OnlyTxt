import React,{useState} from 'react'

export default function (props) {
    const [text, setText] = useState('');
    
    const convertUpCase=()=>{
        console.log("Uppercase was clicked")
        let newtext= text.toUpperCase();
        setText(newtext)
        props.popalert(" Converted to Upper Case", "success")

    }

    const convertLoCase=()=>{
        console.log("LowerCase was clicked")
        let newtext=text.toLowerCase();
        setText(newtext)
        props.popalert(" Converted to Lower Case", "success")
    }

    // const spellcheck=()=>{
    //   console.log("Spell Check Clicked")
    //   let newtext=text.spellcheck();
    //   setText(newtext)
    // }

    const undotext=()=>{
      console.log("undo is clicked")
      setText("")
      props.popalert(" Text Cleared", "success")
    }

    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)

    }
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgoundColor:props.mode ==='dark' ? 'dark':'white'}}></textarea>
</div>

<button className="btn btn-primary" onClick={convertUpCase} >Convert to UpperCase</button>
<button  className="btn btn-primary " onClick={convertLoCase}>Convert to LowerCase</button>
<button  className="btn btn-primary" onClick={undotext}>Clear Text</button>
{/* <button className="btn btn-primary" onClick={spellcheck}>Spell Check</button> */}

    </div>
    <div className="container" style={{color:props.mode ==='dark' ? 'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} min Reading Time</p>
      <h2>Text Preveiw</h2>
      <p>{text.length>0?text:"Enter text in textbox to preveiw"}</p>
    </div>
    </>
    
    
    
  )
}
