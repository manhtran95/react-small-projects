import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx'

export default function TimerChallenge({ title, targetTimeInSec }) {
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining, setTimeRemaining] = useState(targetTimeInSec * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTimeInSec * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset() {
        setTimeRemaining(targetTimeInSec * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            // dialog.current.open()
        }, 10)
    }

    function handleStop() {
        clearInterval(timer.current)
        dialog.current.open()
    }

    return (
        <>
            <ResultModal ref={dialog} targetTimeInSec={targetTimeInSec} timeRemaining={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTimeInSec} second{targetTimeInSec > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}