import { useState } from "react";

export default function Player({ iname, symbol, isActive, onNameChange }) {
    const [name, setName] = useState(iname);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleClick() {
        setIsEditing((editing) => !editing);
        if (isEditing == true)
            onNameChange(symbol, name)
    }

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = (
            <input type="text" required onChange={handleChange} value={name} />
        );
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
