import React, { useState } from "react";

export default function TextForm(props) {
  const [text, newText] = useState("");
  
  const handleClickUp = () => {
    let upper = text.toUpperCase();
    newText(upper);
  };
  const handleChange = (e) => {
    newText(e.target.value);
  };
  const handleClicklow = () => {
    let lower = text.toLowerCase();
    newText(lower);
  };
  const reset = () => {
    newText("");
  };
  const [status,newStatus] = useState("primary")
  const copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
    newStatus("success")
    setTimeout(()=>{
      newStatus("primary");
    },3000);
  }
  
  return (
    <>
      <div className="container">
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" >
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            placeholder="Your text here"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleClickUp}
        >
          Convert to UPPERCASE
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleClicklow}
        >
          Convert to lowercase
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className={`btn btn-${status} btn-sm mx-2 my-2` }
          onClick={copyToClipboard}
        >
          Copy to Clipboard
        </button>
        <button
        disabled={text.length===0}
          type="button"
          className="btn btn-danger btn-sm mx-2"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.length} Characters and{" "}
          {text.length === 0 ? 0 : text.split(" ").length} Words
        </p>
      </div>
    </>
  );
}
