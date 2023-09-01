import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);    
    }
    
    const handleOnClick = () => {
        setText(text.toUpperCase());
    }

    const handleCleanClick = () => {
        setText('');
    }

    // Declare a new state variable
    const [text, setText] = useState('Enter text here');

    return (
        <div className='container'>
            <div className="mb-3">
                <h4>Enter Text Below - {props.heading}</h4>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert To Upper Text</button>&nbsp;
            <button className="btn btn-primary" onClick={handleCleanClick}>Clean Text</button>
        </div>
    )
}
