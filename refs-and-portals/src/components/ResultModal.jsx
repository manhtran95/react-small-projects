import { forwardRef, useRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ResultModal({ timeRemaining, targetTimeInSec, onReset }, ref) {
    const dialog = useRef()

    const youLost = timeRemaining <= 0
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2)
    const score = Math.round((1 - timeRemaining / (targetTimeInSec * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {youLost ? 'lost' : 'won'}!</h2>
            {!youLost && <h2>Your score: {score}</h2>}
            <p>
                The target time was <strong>{targetTimeInSec} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModal;