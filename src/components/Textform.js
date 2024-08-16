import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted To upper Case', 'success');
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted To lower Case', 'success');

    }

    const handleCleanText = () => {
        setText('');
        document.getElementById('vowels').innerHTML = '';
        document.getElementById('consonents').innerHTML = '';
        props.showAlert('Text cleaned', 'success');

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
        props.showAlert('Vowels counted', 'success');
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
        props.showAlert('Consonents counted', 'success');
    }

    const copyText = () => {
        let targetText = document.getElementById('myBox');
        targetText.focus();
        targetText.select();
        navigator.clipboard.writeText(targetText.value);
        props.showAlert('Copied text', 'success');
    }

    const removeExtraSpaces = () => {
        let targetText = text.split(/[ ]+/);
        setText(targetText.join(' '));
        props.showAlert('Extra spaces removed', 'success');
    }

    // Declare a new state variable
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h4>Enter Text Below - {props.heading}</h4>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'black' : 'white'}`} value={text} onChange={handleOnChange} id="myBox" rows="7"
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#434040' }}></textarea>
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
                <p>
                    {text.split(' ')[0] === ''?'0 ': text.split(' ').length} words and {text.length} characters
                </p>
                {/* Slowest time to read 125 words is 1 minutes that means 0.008 minutes to read 1 word */}
                {/* <p>{Math.round(0.008 * text.split(' ').length)} minutes read</p> */}
                <p>{Math.round(0.008 * text.split(/[ ]+/).length)} minutes read</p>
                <p>Number of Vowels <span id="vowels"></span></p>
                <p>Number of Consonents <span id="consonents"></span></p>
            </div>
        </>
    )
}
