import React from 'react';
import './general.css';

export class Web extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="border spurs">
                    <h3 className="subtitle">San Antonio Spurs Website</h3>
                    <p><a href="https://github.com/colindchung/San_Antonio_Spurs" target="_blank" rel="noopener noreferrer">Visit project repository</a></p>
                    <p>Date Created: February 2, 2019</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <img src="https://drive.google.com/uc?id=1qjOXLwvTDMS563uvKRUcs24LwxRGDN9E" alt="Spurs website image 1"/>
                    <p className="description">I created a website about the history of my favourite sports team, the San Antonio
                        Spurs. This project helped me learn fundamental HTML and CSS structure and styling basics. I have a &lt;div&gt;
                        sectioned off for each signiicant era in Spurs history. The CSS integration is primarily class and id
                        styling, formatting the website to be more visually appealing.</p>
                    <img src="https://drive.google.com/uc?id=1qXjiSUkHqU88SRcRm7lnGHbiQiz7zG_O" alt="Spurs website image 2"/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}