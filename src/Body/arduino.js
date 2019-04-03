import React from 'react';
import './general.css';

export class Arduino extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="border led_distance">
                    <h3 className="subtitle">LED Distance Sensor</h3>
                    <p><a href="https://github.com/colindchung/Arduino_Projects/tree/master/Distance_Sensor" target="_blank">Visit project repository</a></p>
                    <p>Date Created: March 23, 2019</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>C/C++</li>
                        <li>Arduino Uno</li>
                    </ul>
                    <p className="description">This was an intro LED project. I used a sonar ultrasonic distance sensor to control a panel of LED lights. The ultrasonic sensor sends out an echo signal which can be converted into a measure of distance. Using this distance, I was able to control the number of LED's to turn on in sequence. The following components are required for this project:</p>
                    <ul className="description">
                        <li>Arduino Uno Motherboard (x1)</li>
                        <li>ELEGOO HC-SR04 Ultrasonic Sensor (x1)</li>
                        <li>220 Ohm Resistors (x6)</li>
                        <li>1/6W LED Bulbs (x6)</li>
                        <li>Breadboard (x1)</li>
                        <li>Male to Male Wires (x17)</li>
                    </ul>
                    <p className="description">Schematic:</p>
                    <img src="https://drive.google.com/uc?id=1fsJY0Q_IjzVG-ygZovBHXOszxTBXjD3z"/>
                    <br/>
                    <br/>
                    <p className="description">Demo:</p>
                    <br/>
                    <video controls>
                        <source src="https://drive.google.com/uc?id=1YSDdPidGH13EENITCfizYb31f6WbW4MO"/>
                    </video>
                </div>
            </div>
        )
    }
}