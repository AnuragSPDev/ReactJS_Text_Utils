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
        document.getElementById('vowels').innerHTML = '';
        document.getElementById('consonents').innerHTML = '';
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const countVowels = () => {
        let count = 0;
        for (let i = 0; i <= text.length - 1; i++) {
            let character = text[i].toLowerCase();
            if (vowels.includes(character)) {
                count += 1;
            }
        }
        document.getElementById('vowels').innerHTML = count;
    }

    const countConsonents = () => {
        let count = 0;
        for (let i = 0; i <= text.length - 1; i++) {
            let character = text[i].toLowerCase();
            if (!vowels.includes(character) && character !== ' ' &&
                character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
                count += 1;
            }
        }
        document.getElementById('consonents').innerHTML = count;
    }

    const copyText = () => {
        let targetText = document.getElementById('myBox');
        targetText.focus();
        targetText.select();
        navigator.clipboard.writeText(targetText.value);
    }

    const removeExtraSpaces = () => {
        let targetText = text.split(/[ ]+/);
        setText(targetText.join(' '));
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
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lower Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCleanText}>Clean Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={countVowels}>Count Vowels</button>
                <button className="btn btn-primary mx-1 my-1" onClick={countConsonents}>Count Consonents</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h4>Here's the text summary</h4>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                {/* Slowest time to read 125 words is 1 minutes that means 0.008 minutes to read 1 word */}
                <p>{Math.round(0.008 * text.split(' ').length)} minutes read</p>
                <p>Number of Vowels <span id="vowels"></span></p>
                <p>Number of Consonents <span id="consonents"></span></p>
            </div>
        </>
    )
}
