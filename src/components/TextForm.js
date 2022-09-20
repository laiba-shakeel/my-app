import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
    //    console.log("uppercase was clicked" + Text);
       let newText = Text.toUpperCase();
       setText(newText);

    }
    const handleLoClick = () => {
        //    console.log("uppercase was clicked" + Text);
           let newText = Text.toLowerCase();
           setText(newText);
    
        }
        const handleClearClick = () => {
            //    console.log("uppercase was clicked" + Text);
               let newText = " ";
               setText(newText);
        
            }
            const handleCopyClick = ()=>{
                var Text = document.getElementById("myBox");
                Text.select();
                navigator.clipboard.writeText(Text.value);
            }
            
    
    const handleonchnage = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    const [Text, setText] = useState(" ");
    return (

    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleonchnage} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-2 me-3" onClick={handleUpClick}> Convert to UpperCase</button>
                <button className="btn btn-primary my-2 me-3" onClick={handleLoClick}> Convert to LowerCase</button>
                <button className="btn btn-primary my-2 me-3" onClick={handleClearClick}> Clear Text</button>
                <button className="btn btn-primary my-2 me-3" onClick={handleCopyClick}> Copy Text</button>
               
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{Text.split (" ").length} words and {Text.length} char</p>
            <p> {0.008 * Text.split (" ").length }Minutes read</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
        </>
    )
}
