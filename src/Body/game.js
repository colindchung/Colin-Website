import React from 'react';
import './general.css';

export class Game extends React.Component {
    render() {
        return (
            <div className="main" >
                <div className="border othello">
                    <h3 className="subtitle">Interactive Othello Game</h3>
                    <p><a href="https://github.com/colindchung/Othello" target="_blank">Visit project repository</a></p>
                    <p>Date Created: June 12, 2018</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>Java</li>
                        <li>JavaFX Library</li>
                        <li>Graphical User Interface</li>
                        <li>Threading</li>
                        <li>Lambda Expressions</li>
                    </ul>
                    <img src="https://drive.google.com/uc?id=1d72pKrQlHSlBwXuU_W_bf9x2SiHvMW6T"/>
                    <p className="description">For a Grade 12 final project, I recreated the game of Othello (Also known as Reversi). It started with the algorithms to simulate the game in the console output using simple key commands. Afterwards, I integrated JavaFX for user-friendly controls and then I added computer bots to play single player using mulitple difficulty levels.</p>
                    <img src="https://drive.google.com/uc?id=1OFXCmP23A6ElrnrPiDjt1UU_rfy48YnL"/>
                    <p className="description">The board is represented as an 8x8 2D array, showed above left. A black piece is denoted by a 'B', a white piece by 'W', and an empty tile by '*'. The game is initialized by creating an empty board and overwriting the middle 4 tiles with alternating colours. The algorithms are carried out user helper functions which do the following:</p>
                    <ul className="description">
                        <li>Check if the game is over</li>
                        <li>Verify if a move is valid</li>
                        <li>Count how many tiles are flipped by a proposed move</li>
                        <li>Perform a move</li>
                        <li>Decide which move the computer makes</li>
                    </ul>
                    <img src="https://drive.google.com/uc?id=1s-gCF2rWFaRBuuGz4YC-_Sc7tH0bS6vv"/>
                    <p className="description">I integrated a UI using the JavaFX library. Each tile is a button which calls the algorithm helper functions to perform a move, if legal. At the bottom of the screen is a self-updating scoreboard display which shows how many tiles each player has on the board and a red dot indicating which player's turn it is.</p>
                </div>
                <br/>
                <br/>
                <div className="border fileart">
                    <h3 className="subtitle">File Generated Art</h3>
                    <p><a href="https://github.com/colindchung/File_Generated_Art" target="_blank">Visit project repository</a></p>
                    <p>Date Created: March 11, 2019</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>Java</li>
                        <li>JavaFX Library</li>
                        <li>Graphical User Interface</li>
                        <li>File Reading</li>
                    </ul>
                    <p className="description">This project takes input from files and generates a correspoding image on the JavaFX user interface. The size of the pixels is determined by the number of pixels given in the file. Non-square images are allowed, but they will be scaled to fit in the window. The colour of each pixel is determined by the value of each character in the given file. The colour keys are as follows:</p>
                    <ul className="description">
                        <li>0: Black</li>
                        <li>1: Red</li>
                        <li>2: Blue</li>
                        <li>3: Green</li>
                        <li>4: Yellow</li>
                        <li>5: Orange</li>
                        <li>6: Purple</li>
                        <li>Any other key: White</li>
                    </ul>
                    <p className="description">Here are some demo files and their images:</p>
                    <img src="https://drive.google.com/uc?id=1iSGVKoWmkWlGxH-fmpq08F-pqGBn4hYG"/>
                    <img src="https://drive.google.com/uc?id=1Cx5ArHSjdj28fUIYHanksrSDet2hXiHm" />
                </div>
            </div>
        )
    }
}