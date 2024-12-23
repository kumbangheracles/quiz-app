import React from 'react';

export default function SubmittButton({submitHandler}){
    return <button onClick={submitHandler} type='submit' className='submit-button'>Submit</button>
}