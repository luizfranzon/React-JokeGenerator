import React, { useState, useEffect } from 'react';
import './style.css'

function Home() {
    const [jokeText, setJokeText] = useState("Click to generate a joke!")

    function fetchJoke() {
        let URL = "https://icanhazdadjoke.com/";

        fetch(URL, {
            method: 'GET',
            headers: {
                accept: 'application/json'}})
        .then(response => response.json())
        .then(data => {
            const joke = data.joke
            setJokeText(joke)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='container'>
            <h1 className='title'>Joke Generator &#x1F923;</h1>
            <div>
                <button className='generateButton' onClick={fetchJoke}>Get Joke</button>
                <div className='jokeBox'>
                    <span className='jokeResult'>{jokeText}</span>
                </div>
            </div>
        </div>
    )
}

export default Home