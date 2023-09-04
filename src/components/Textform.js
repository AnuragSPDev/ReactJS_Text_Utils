import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleCleanText = () => {
        setText('');
    }

    // Declare a new state variable
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h4>Enter Text Below - {props.heading}</h4>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Text</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lower Text</button>
                <button className="btn btn-primary" onClick={handleCleanText}>Clean Text</button>
            </div>
            <div className="container my-3">
                <h4>Here's the text summary</h4>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                {/* Slowest time to read 125 words is 1 minutes that means 0.008 minutes to read 1 word */}
                <p>{Math.round(0.008 * text.split(' ').length)} minutes read</p>
            </div>
        </>
    )
}
