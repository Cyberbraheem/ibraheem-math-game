// import React from 'react'
// class MathGame extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             result: "Correct!",
//             timer: 60,
//             score: 0,
//             num1: null,
//             num2: null,
//             product: null,
//             possibilities: []
//         }
//         this.answer = this.answer.bind(this);
//         this.startGame = this.startGame.bind(this)
//     }

//     componentDidMount() {
//         this.answer();
//     }

//     startGame() {
//         let time = 60;
//         setInterval(() => {
//             time--;
//             this.setState({
//                 timer: time
//             })
//         }, 1000)
//     }

//     answer() {
//         const num1 = Math.floor(Math.random() * (10 - 1)) + 1
//         const num2 = Math.floor(Math.random() * (10 - 1)) + 1
//         const p1 = Math.floor(Math.random() * (81 - 1)) + 1
//         const p2 = Math.floor(Math.random() * (81 - 1)) + 1
//         const p3 = Math.floor(Math.random() * (81 - 1)) + 1
//         const product = num1 * num2
//         this.setState({
//             num1: num1,
//             num2: num2,
//             product: num1 * num2,
//             possibilities: [product, p1, p2, p3]
//         })
//         console.log(this.state.possibilities[0])
//     }

//     render() {
//         const rightanswer1 = this.state.possibilities[Math.floor(Math.random() * 3)]
//         const rightanswer2 = this.state.possibilities[Math.floor(Math.random() * 3)]
//         const rightanswer3 = this.state.possibilities[Math.floor(Math.random() * 3)]
//         const rightanswer4 = this.state.possibilities[Math.floor(Math.random() * 3)];


//         return (
//             <div id="container">
//                 <div id="score">{this.state.score}</div>
//                 <div id="result">{this.state.result}</div>
//                 <div id="question">{this.state.num1}x{this.state.num2}</div>
//                 <div id="note">Please select the correct answer</div>
//                 <div id="q1" onClick={this.answer}>{rightanswer1}</div>
//                 <div id="q2" onClick={this.answer}>{rightanswer2}</div>
//                 <div id="q3" onClick={this.answer}>{rightanswer3}</div>
//                 <div id="q4" onClick={this.answer}>{rightanswer4}</div>
//                 <div id="reset" onClick={this.startGame}>Start</div>
//                 <div id="time">Time: {this.state.timer}s</div>
//             </div>
//         )
//     }
// }
// export default MathGame
// =================================================
/*
Name: Ibraheem Dawod
Age: 13 years old
Date Finished: Sunday, March 15, 2020


Variable Dictionary:
    result: Shows whether you got the question right or wrong
    timer: the variable which holds the tome value
    timers: the variable which controls decreasing the time by one every time
    num1: holds the first number of the question
    num2: holds the second number of the question
    score: the questions you got right and wrong
    product: holds the product of num1 and num2
    possibilites: the array which holds the order that the possible answers come in


Program: 
    This game outputs a random single digit multiplication question and the 4 answers. 
    Only 1 is correct and the one correct is moved around so that is's not always in the same box. 
    There is 60 seconds before the time runs out and it's game over. 
    Every question correct, you gain a point and evey question wrong, you lose a point unless the score is 0. 
    Then you don't lose any points so as not to go into negative numbers.
    There is a reset button which allows you to go back to the start page. 
    When the timer runs out, there is a game over screen and a play again button.

*/
import React, { useState, useEffect } from 'react'
function MathGame() {
    const [result, setResult] = useState(false)
    const [timer, setTimer] = useState(60)
    const [num1, setNum1] = useState(null)
    const [score, setScore] = useState(0)
    const [num2, setNum2] = useState(null)
    const [product, setProduct] = useState(null)
    const [possibilities, setPossibilities] = useState([null, null, null])
    const [timers, setTimers] = useState(null)
    // let highscore = [];
    // const [highscores, sethighscores] = useState(highscore)
    // let scores = highscores;
    // const [best, setBest] = useState("didn't get")

    // when square brackets is empty, it acts as component did mount in that it only runs once
    //it calls answer so that a question pops up and calls once so to change the div from the homepage to game page
    useEffect(
        () => {
            answer();
            once();
        }, []
    )

    // sets score to 0 while changing the div that shows up
    function once(time, timers) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('big-container').style.display = 'block';
        document.getElementById('gameOver').style.display = 'none';
        setScore(0)
    }

    // reset goes back to start page and ends timer
    function reset() {
        // highscore.push(score)
        // sethighscores(highscore)
        clearInterval(timers)
        document.getElementById('container').style.display = 'none';
        document.getElementById('big-container').style.display = 'block';
        document.getElementById('gameOver').style.display = 'none';
    }

    // is called whenever the game should be started
    function startGame() {
        //clears all previous timers and creates the new timer
        clearInterval(timers)
        let time = 60;
        setTimers(setInterval(() => {
            time--;
            setTimer(time);
            // passes time to checkTimer so that it can end the game when time == 0
            checkTimer(time);
        }, 1000))
        setScore(0);
        document.getElementById('container').style.display = 'block';
        document.getElementById('big-container').style.display = 'none';
        document.getElementById('gameOver').style.display = 'none';
    }

    function checkTimer(time) {
        // when the time becomes 0, go to game over screen and end all timers
        if (time === 0) {
            // const isBelowThreshold = (currentValue) => score > currentValue;
            // if (highscores.every(isBelowThreshold) === true) {
            //     console.log('done')
            //     setBest('got')
            // } else {
            //     console.log('not done')
            //     setBest("didn't get")
            // }
            // highscore.push(score)
            // sethighscores(highscore)
            clearInterval(timers)
            document.getElementById('result').style.visibilty = 'hidden'
            document.getElementById('container').style.display = 'none';
            document.getElementById('big-container').style.display = 'none';
            document.getElementById('gameOver').style.display = 'block';
        }
    }

    // otherOptions is the random numbers and answer is the answer
    function shuffle(otherOptions, answer) {
        // randomeIndex creates a random number between 0 and 3
        const randomIndex = Math.floor(Math.random() * (otherOptions.length + 1));
        // splice is only adding elements and not removing since the second argument is 0
        //it is adding the answer to a random index in the array
        otherOptions.splice(randomIndex, 0, answer);
        return otherOptions;
    }

    // when an answer is clicked
    function answer(userInput) {
        let userNum = userInput;
        let num10 = Math.floor(Math.random() * (12 - 1)) + 1
        let num20 = Math.floor(Math.random() * (12 - 1)) + 1
        let p1 = Math.floor(Math.random() * (144 - 1)) + 1
        let p2 = Math.floor(Math.random() * (144 - 1)) + 1
        let p3 = Math.floor(Math.random() * (144 - 1)) + 1
        let product1 = num10 * num20
        setNum1(num10)
        setNum2(num20)
        setProduct(num10 * num20)
        // shuffles the possibilites array so that the answer isn't always in the same box
        // since function shuffle returns otherOptions, it simply showing other options
        setPossibilities(() => shuffle([p1, p2, p3], product1))
        // if the answer the user gave is correct
        if (userNum == product) {
            // add 1 to the score and print correct
            setScore(score + 1)
            //set result to correct
            setResult('Correct!')
        } else {
            //otherwise print wrong
            setResult('Wrong!')
            if (score > 0) {
                //and if the score is greater than 0, let the score go down by 1(so the score doesnt go into negative numbers)
                setScore(score - 1)
            }
        }
    }
    return (
        <div>
            <div id='gameOver'>
                <h1 style={{ backgroundColor: 'transparent' }}> Game Over </h1>
                <h3 style={{ backgroundColor: 'transparent' }}>You scored {score} points!</h3>
                {/* <h3 style={{ backgroundColor: 'transparent' }}>You {best} a highscore</h3> */}
                <div id="play-again" onClick={() => startGame()}>Play Again</div>
            </div>
            <div id="big-container"><div id="start" onClick={() => startGame()}>Start</div></div>
            <div id="container">
                <div id="score">{score}</div>
                <div id="result">{result}</div>
                <div id="question">{num1}x{num2}</div>
                <div id="note">Please select the correct answer</div>
                {/* output each element in possibiblities array with it's own div using .map */}
                {possibilities.map((change, k) => (
                    <div id="q1" key={k} onClick={() => answer(change)}>{change}</div>
                ))}
                {/* <div id="q1" onClick={() => answer()}>{rightanswer1}</div>
                <div id="q2" onClick={() => answer()}>{rightanswer2}</div>
                <div id="q3" onClick={() => answer()}>{rightanswer3}</div>
                <div id="q4" onClick={() => answer()}>{rightanswer4}</div> */}
                <div id="reset" onClick={() => reset()}>Reset</div>
                <div id="time">Time: {timer}s</div>
            </div>
            {/* <div id="highScore">
                Scores: <br />{scores.map((k, change) => (
                    <h3 id='scores' key={k}>{scores[change]}</h3>
                ))}
            </div> */}
        </div>

    )
}
export default MathGame