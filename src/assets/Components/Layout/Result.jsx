import React from 'react';

export default function Result({ isCorrect }) {
    if(isCorrect === null) return null;
    return (
        <span className={isCorrect ? "correct" : "incorrect"}>
            {isCorrect ? "✅" : "❌" }
        </span>
    );
}
