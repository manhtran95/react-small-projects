export default function UserInput({ userInput, onInputChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(e) => onInputChange("initialInvestment", e.target.value)}
                        required
                        min={0}
                        oninput="validity.valid||(value='');"
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(e) => onInputChange("annualInvestment", e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={(e) => onInputChange("expectedReturn", e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        onChange={(e) => onInputChange("duration", e.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    );
}
