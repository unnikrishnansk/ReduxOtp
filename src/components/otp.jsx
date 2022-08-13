import React from 'react';
import { useState  , useRef} from 'react';
import  PropTypes  from 'prop-types';

const Pin = ({length,Changeotphandler}) => {
    const inputRef = useRef([]);
    const [inputBoxLength] = useState(new Array(length).fill(1));
    const [inputboxvalue, setinputboxvalue] = useState(new Array(length).fill(""));

    const handlechange = (e,index) => {
        inputboxvalue[index] = e.target.value;
        setinputboxvalue(inputboxvalue);
        if(index<length-1)
        {
            inputRef.current[index+1].focus();
        }
        Changeotphandler(inputboxvalue.join(""));
        console.log(inputboxvalue); 
    }

    const handlekeyup = (e,index) => {
        if(e.KeyCode === 8)
        {
                inputRef.current[index-1].focus(); 
        }
    }

    
    
  return (
    <div>
        {inputBoxLength.map((item,index)=>{
            return (
            <input 
            ref={(element)=>{
                console.log(element);
                inputRef.current[index] = element;
            }}
            onKeyUp={handlekeyup}
             key={index} maxLength={1}
             onChange={(e)=>handlechange(e,index)}
              />
            );
        })}
    </div>
  )
}

Pin.propTypes = {
    length : PropTypes.number,
    onChange : PropTypes.func
};

export default Pin;