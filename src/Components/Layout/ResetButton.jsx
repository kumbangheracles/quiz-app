import React from "react";

export default function ResetButton({resetSelection}){
    return <button onClick={resetSelection} type="submit" className="reset-button">Reset Answer</button>
} 