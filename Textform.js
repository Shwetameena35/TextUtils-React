import React, { useState } from 'react'

export default function Textform(props) {
    const [text , setText] = useState("");
       const convUp = () =>{
        console.log("Button click")
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Convert to upper case", "success");
       }
       const eventHandle = (event) =>{
        console.log("Change");
         setText(event.target.value);
       }
       const convlow = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case", "success");
       }
       const cleartex = () =>{
        let newText = '';
        setText(newText);
       }
       const convoice = () =>{

        let utterance = new SpeechSynthesisUtterance();
      
        utterance.text = text;
        utterance.voice = window.speechSynthesis.getVoices()[0];
      
        window.speechSynthesis.speak(utterance);
       }
       const handleCopy = () =>{
              let text = document.getElementById("mybox");
              text.select();
              navigator.clipboard.writeText(text.value);
              props.showAlert("Copyto clipboard", "success");

       }
      
  return (
    <>  
    <div className='container my-3' style={{color : (props.mode==='dark')?'#042743':'white'}}>
    <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={eventHandle} value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary" onClick = {convUp}>Convert into Uppercase</button>
  <button className="btn btn-primary mx-2" onClick = {convlow}>Convert into Lower Case</button>
  <button className="btn btn-primary mx-2" onClick = {convlow}>Convert into Lower Case</button>
  <button className="btn btn-primary mx-2" onClick = {convoice}>For Voice</button>
  <button className="btn btn-primary mx-2" onClick = {cleartex}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick = {handleCopy}>Copy to clipboard</button>
 
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'#042743':'white'}}>
      <h1>
        Your text Summary
      </h1>
      <p>
        {text.trim()=="" ? 0 : text.match(/\S+/g).length} Words and {text.replace(/\s+/g, "").length} Characters
      </p>
      <p>
        {0.008 * text.split(" ").length} Minutes Read
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>

    </div>
    </>
  )
}
