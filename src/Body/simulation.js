import React from 'react';
import './general.css';

export class Simulation extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="border jugs">
                    <h3 className="subtitle">Python Jugs Puzzle</h3>
                    <p><a href="https://github.com/colindchung/Jugs-Puzzle" target="_blank">Visit project repository</a></p>
                    <p>Date Created: October 25, 2017</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>Python</li>
                        <li>Object Oriented Programming</li>
                    </ul>
                    <p className="description">I found myself stumped one day over a simple puzzle: If I have a 3L, 5L and an 8L jug, how can I measure 4L of water in the least possible pours. I ponderd over this and decided to simulate this game in Python. I denoted the jugs as 0, 1, 2 and made a program to take user input and display the jug volumes after each pour.</p>
                    <img src="https://drive.google.com/uc?id=1D0zRYUeh5rzBlvKJdAQ9QJNnr61WwYtJ"/>
                    <p className="description">The console displays which move the user is on followed by each jug capacity. Each move asks the user to input which jug to spill from and which jug to spill into. The loop is broken when one of the jugs has a capacity of 4L.</p>                
                </div>
                <br/>
                <br/>
                <div className="border num-gen">
                    <h3 className="subtitle">Random Number Generator</h3>
                    <p><a href="https://github.com/colindchung/Num_Generator" target="_blank">Visit project repository</a></p>
                    <p>Date Created: February 6, 2019</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Input handling</li>
                    </ul>
                    <img src="https://drive.google.com/uc?id=1l6_vtLGW4xw1vLev3w7z6TxVeV9u3hSa"/>
                    <p className="description">To first learn about integrating JavaScript into web applications, I created a simple program. The UI is very simple, including 2 forms, a submit button and a display. It is linked to a Vanilla JavaScript file which is called on click of the button. It returns a random number less than the set maximum and with the specified number of decimal points. This incorporates function calls from a UI and form handling in a simple utility.</p>
                    <img src="https://drive.google.com/uc?id=1lxm1-5AWtLj6CriL2--HQeLav1aPDVsV"/>
                </div>
            </div>
        )
    }
}