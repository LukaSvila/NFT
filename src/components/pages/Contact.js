import React from 'react';
import '../../App.css';
import '../Cards.css';

export default function Contact(){
    return (
    <>
        <h1 className='contacts'>Contact</h1>
        <div className='cards'>
            <h1>Talk to us!</h1>
            <div className="cards__container">
            <form>
                <label>
                 Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    </>
    )
}