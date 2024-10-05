import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerStopped, setTimerStopped] = useState(false);

    function handleStart() {
        setTimerStarted(true)
        timer.current = setTimeout(() => {
            setTimerStopped(true)
        }, targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            {timerStopped && <p>You lost!</p>}
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}