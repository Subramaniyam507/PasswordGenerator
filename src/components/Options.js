import React from "react";

export default function Options(props){
    const { alphabet, digits, special,length, setAlphabet, setDigits, setSpecial,setLength } = props;



    const handleLengthChange = (event) => {
        setLength(event.target.value);
    }

    const handleAlphabetChange = (event) => {
        setAlphabet(event.target.checked);
    }

    const handleDigitsChange = (event) => {
        setDigits(event.target.checked);
    }

    const handleSpecialChange = (event) => {
        setSpecial(event.target.checked);
    }


    return (
        <div className="select">
            <label >
                Length   <span>0</span> <input type="range" min="0" max="100" value={length} className="slider" onChange={handleLengthChange}/><span>100</span>
            </label>
            <label className="selectedlength" >{length}</label>
            <label>
                <input type="checkbox" checked={alphabet} onChange={handleAlphabetChange} />
                Alphabets
            </label>
            <label>
                <input type="checkbox" checked={digits} onChange={handleDigitsChange} />
                Digits
            </label>
            <label>
                <input type="checkbox" checked={special} onChange={handleSpecialChange} />
                Special characters
            </label>
        </div>
    );
}
