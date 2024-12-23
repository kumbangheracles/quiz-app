import React, {useState} from "react";
import Question from "./Question";
import Answer from "./Answer";
import Footer from "./Footer"
import { use } from "react";

export default function Layout(){
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSelectAnswer = (id, correct) => {
        setSelectedAnswer(id); // Set ID jawaban yang dipilih
        setIsCorrect(correct); // Set status benar/salah
    };

    const resetSelection = () => {
        setSelectedAnswer(null); // Reset jawaban yang dipilih
        setIsCorrect(null); // Reset status benar/salah
        setIsSubmitted(null )
    };  

    const submitHandler = () => {
        if (selectedAnswer !== null) {
            if (isCorrect) {
                alert("Jawaban benar! ✅");
            } else {
                alert("Jawaban salah! ❌");
            }
            setIsSubmitted(true);
        }else{
            alert('Masukkan jawaban terlebih dahulu!!!')
        }
    };
    return(
        <div className="layout-container">
            <Question isCorrect={isCorrect} isSubmitted={isSubmitted}/>
            <Answer selectedAnswer={selectedAnswer} handleSelectAnswer={handleSelectAnswer}/>
            <Footer resetSelection={resetSelection} submitHandler={submitHandler}/>
        </div>
    )
}