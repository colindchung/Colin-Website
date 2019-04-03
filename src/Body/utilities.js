import React from 'react';
import './general.css';

export class Utilities extends React.Component {
    render() {
        return (
            <div class="main">
                <div class="border othello">
                    <h3 class="subtitle">Custom Math Library</h3>
                    <p><a href="https://github.com/colindchung/Math_Library" target="_blank">Visit project repository</a></p>
                    <p>Date Created: February 16, 2019</p>
                    <p>Programming Languages and Techniques Used:</p>
                    <ul>
                        <li>C#</li>
                        <li>.NET 2.1</li>
                        <li>Generics</li>
                        <li>Inheritance</li>
                    </ul>
                    <img src="https://drive.google.com/uc?id=1JARgLEBv8tWJ1XGHQg7h_WVnNG_XwhS-"/>
                    <p class="description">I made a custom library, primarily for data science functions. Most of the functions i made are not available in the standard math library, or that are not available in the format that I like to use. I import my library class in other C# projects with data analysis for smooth programming. Some interesting methods I made are:</p>
                    <ul class="description">
                        <li>Convert each entry in a list to integer, double</li>
                        <li>Mean, median, mode averages</li>
                        <li>Standard deviation</li>
                        <li>Permutations, factorials</li>
                        <li>Matrix algebra</li>
                        <li>Vector algebra</li>
                        <li>Area, volume</li>
                    </ul>
                </div>
            </div>
        )
    }
}