import { useEffect, useRef, useState } from "react";

export function Otp() {

    const ref = useRef(Array(6).fill(0));
    
    useEffect(() =>{
        ref.current[0].focus();
    }, []);


    return (
      <div className="flex justify-center ">
        {
            Array(6).fill(0).map((_, index) => <SubOtpBox refrence={(e) => ref.current[index] = e} key = {index}  onDone={() => {
                if(index + 1 >= Number){
                    ref.current.blur();
                }    
                ref.current[index + 1].focus();
            }} goBack= {() => {
                if (index == 0) {
                  return;
                }
                ref.current[index - 1].value = "";
                ref.current[index - 1].focus();
            }} />)
        }
        <br/>
      </div>
    );
}

function SubOtpBox({
    refrence, onDone, goBack, 
}) {
    
    const [inputBoxValue, setInputBoxValue] = useState("");
    
    return (
      <div>
        <input value={inputBoxValue} ref = {refrence} onKeyUp={(e) => {

            if(e.key == "Backspace" ){
                goBack()
            }
        }} onChange={(e) => {
            const val = e.target.value;
             if (val >="1" && val <="9") {
               setInputBoxValue(val);
               onDone();
             } else {
             }
        }}
          type="text"
          maxLength={1}
          className="bg-blue-300 text-xl text-white w-10 h-14 m-1 text-center rounded-md outline-none"
        ></input>
      </div>
    );
}
