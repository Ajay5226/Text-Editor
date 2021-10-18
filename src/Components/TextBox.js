import React,{useState} from 'react'

export default function TextBox(props) {
    const[text,setText]= useState(""); 

        const handleUpClick = ()=>{
            //console.log("UpperCase clicked -btn");
            let newText= text.toUpperCase();
            setText(newText)
            props.showalert("Converted to UpperCase","success");
        }
        const handleDownClick = ()=>{
            //console.log("LowerCase clicked -btn");
            let newText= text.toLowerCase();
            setText(newText);
            props.showalert("Converted to LowerCase","success");
        }
        const handleOnChange = (event)=>{
            //console.log("On Change");
            setText(event.target.value);   
        }
        const handleExtraSpace = ()=>{
            //console.log("Extra Space");
            const removeExtraSpace = (text) => text.trim().split(/ +/).join(' ');
            setText(removeExtraSpace);  
            props.showalert("Removed Extra Space","success");
        }
              
    return (
        <>
        <div>
            <div className="mb-3">
                <label htmlFor="Textarea" className="form-label">{props.title}</label>
                <textarea className="form-control" id="Textarea" value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick} >LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>
        </div>

            <div className="container my-4">
                <h5>Results</h5>
                <p>{text.charAt(0)===""?'0':text.trim().split(/ +/).length } Words and {text.length} Letters</p>
                <p>{((text.trim().split(/ +/).length)-1) *0.008*60} Seconds read</p>
            </div>
        </>
    )
}
