import React from "react";
import Result from "./Result";

export default function Question({isCorrect, isSubmitted}){
    return(
        <div className="question">
            <div className="question-number">
                <h3>1. </h3>
                <p>What is the founder of abbasid caliphate?</p>
                <div className="question-result">
                <Result isCorrect={isSubmitted ? isCorrect : null} />
                </div>  
            </div>
        </div>
    )
}