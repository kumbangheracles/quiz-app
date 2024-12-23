import React from 'react';
import ResetButton from './ResetButton';
import SubmittButton from './SubmittButton';
export default function Footer({resetSelection, submitHandler}){
    return(
        <div className="footer">
            <ResetButton resetSelection={resetSelection}/>
            <SubmittButton submitHandler={submitHandler}/>
        </div>
    )
}