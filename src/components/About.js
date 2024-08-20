// import React, { useState } from 'react'

export default function About(props) {

    // const toggleStyling = () => {
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setmyText('Enable Light Mode');
    //     }else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setmyText('Enable Dark Mode');

    //     }
    // }

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [myText, setmyText] = useState('Enable Dark Mode');

    return (
        <div className='container my-3'>
            <h2>About Us</h2>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor: props.mode === 'blue'?'gray':'white'}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                        aria-expanded="true" aria-controls="collapseOne" style={{
                                backgroundColor: props.mode === 'blue'?'#434040':'white',
                                color: props.mode === 'blue'?'white':'black'
                            }}>
                            Upper/Lower Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This utility can be used to convert the text to upper/lower form.</strong> Try to get new experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode === 'blue'?'gray':'white'}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                        aria-expanded="false" aria-controls="collapseTwo" style={{
                            backgroundColor: props.mode === 'blue'?'#434040':'white',
                            color: props.mode === 'blue'?'white':'black'
                        }}>
                            Calculating Vowels/Consonents
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This utility can be used to calculate the number of vowels/consonents.</strong> Try to get new experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode === 'blue'?'gray':'white'}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                        aria-expanded="false" aria-controls="collapseThree" style={{
                            backgroundColor: props.mode === 'blue'?'#434040':'white',
                            color: props.mode === 'blue'?'white':'black'
                        }}>
                            Clean Text/Copy Text/Remove Extra Spaces
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This utility can be used to cleaning the entire text/copying the text/removing any extra spaces in between.</strong> Try to get new experience.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary" onClick={toggleStyling}>{myText}</button> */}
        </div>
    )
}
