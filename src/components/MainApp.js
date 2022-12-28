import React from "react";
import Options from "./Options";
import {generate} from "../passworgenerate";


export default  function MainApp(){
    const[options,setNeedoptions] = React.useState("+")
    const [password ,setPassword] = React.useState('')
    const [alphabet, setAlphabet] = React.useState(false);
    const [digits, setDigits] = React.useState(false);
    const [special, setSpecial] = React.useState(false);
    const[length,setLength]= React.useState(0)
    let showOptions = false
    function needOptions(){

      if (options === "+"){
          setNeedoptions("-")
          showOptions = true
      }
      if(options === "-"){
          setNeedoptions("+")
          showOptions = false
      }
    }
    function handleGnerateClick(){
        setPassword(generate(alphabet,digits,special,length))

    }
    function handlecopy(){
        var copyText = document.getElementById("text-to-copy");

        // Select the text field
        copyText.select();

        // Copy the text inside the text field
        document.execCommand("copy");

        // Alert the user that the text has been copied
        alert("Copied the text: " + copyText.value);
    }


    return(

        <div className="main">
            <input type="text" value = {password} id="text-to-copy" className="inp"/>

            <div className="pwdbuttons"> <button onClick={handleGnerateClick}>Generate</button>
                <button onClick={handlecopy}>Copy</button></div>
            <div className="options">
            <p>Options</p><button onClick={needOptions}>{options}</button>
            </div>
            {options === "-" &&  <Options alphabet={alphabet}
                                          digits={digits}
                                          special={special}
                                          length={length}
                                          setAlphabet={setAlphabet}
                                          setDigits={setDigits}
                                          setSpecial={setSpecial}
                                          setLength={setLength}/>}

        </div>


    )
}