import React from 'react';
import './general.css';
import './home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="overview">
                <div className="intro-paragraph">
                    <p>Hey! My name is Colin and this is an overview of all my personal projects. My
                        projects range from web development to IoT circuits to hand-crafted wooden
                        puzzles. I was first introduced to programming when I was in the 7th grade when
                        I joined a First Robotics team. Since then, code has intrigued me and I have
                        taken many computer science courses and worked several types of tasks for tech
                        companies. Through my experience, I have developed several projects in many
                        different programming languages. I also picked up Arduino and woodworking in
                        middle school which continue to spark my interest. I created this website to
                        showcase my learning over the years and my passion for designing and writing
                        interesting products.</p>
                </div>
                <div className="intro-image-1">
                    <img src="https://drive.google.com/uc?id=1gAPVDqsSTPl7ZYyondIqhuHzRJN6yJ6e" alt="FLL Logo"/>
                </div>
            </div>
        )
    }
}