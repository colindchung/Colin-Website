import React from 'react';
import './general.css';

export class Wood extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="border stand">
                    <h3 className="subtitle">Adjustable Phone Stand</h3>
                    <p>Date Created: January 2018</p>
                    <img src="https://drive.google.com/uc?id=1uOp9wYKtfQ6oq2WqigV_eOVMkwRN5VfC" alt="Phone stand images"/>
                    <p className="description">I made an adjustable phone stand out of wooden planks and
                        dowels. It was made to fit a Samsung S5/S6 phone either vertically or horizontally.
                        It also has 3 different angles which it can adjust to.</p>
                    <video controls>
                        <source src="https://drive.google.com/uc?id=1nHZJeVn1rfU-qHcLHKaybztaProlcDDR"/>
                    </video>
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
                <div className="border puzzle1">
                    <h3 className="subtitle">Stack Wood Puzzle</h3>
                    <p>Date Created: August 2018</p>
                    <img src="https://drive.google.com/uc?id=1kHzBUWrJ78CJxP0wXgE5PVUKFMpZNqRl" alt="Puzzle pieces"/>
                    <p className="description">This project combines my interest in woodworking and my skill
                        with puzzles, specifically ones in 3D. The materials for the project were extremely
                        simple: Wood, a saw and glue. I created a stack tower puzzle which only fits together
                        one way. Above are the individual pieces which each consist of 9 blocked fragments
                        that stack into each other. The final project, fully assembled is shown below.</p>
                    <img src="https://drive.google.com/uc?id=1JaPzwbcl3D5vzB9qXblz1RBVa7zSLt8a" alt="Assembled puzzle"/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}