import React from "react";
import { dataAnswer } from "../../../Data/DataAnswer";

export default function Answer({selectedAnswer, handleSelectAnswer}){

    const answer = dataAnswer
   
    return(
        <div className="answer">
            <ul >
                {answer.map((answers) =>(
                        <li key={answers.id}>
                            <label className="content-label" htmlFor="">
                                <input type="checkbox" 
                                name="checkbox-answer" 
                                className="checkbox "
                                id={`checkbox-${answers.id}`} 
                                checked={selectedAnswer === answers.id}
                                onChange={()=> handleSelectAnswer(answers.id, answers.correct)}  
                                />
                                <span className="alphabet" onClick={()=> handleSelectAnswer(answers.id, answers.correct)} >{answers.aplhabet}</span>
                                <span onClick={()=> handleSelectAnswer(answers.id, answers.correct)}>{answers.result}</span>


                            </label>
                        </li>
                ))}    
            </ul>       
        </div>
    )
}