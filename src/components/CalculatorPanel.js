import { useState } from "react";
import PanelButtons from "./PanelButtons";
import PanelScreen from "./PanelScreen";

const OPERATORS = {
    '+': '+',
    '-': '-',
    '×': '*',
    '÷': '/'
}

export default function Panel() {
    const [inputArray, setInputArray] = useState([]);
    const [inputStr, setInputStr] = useState("0");
    const [result, setResult] = useState();
    
    function handleClickNum(event) {
        if(result) {
            setResult(0);
        }

        if(/^[0]{1}$/.test(inputStr) || inputStr === "Invalid Expression"){
            setInputStr("");
        }
        else if(/^[+×÷-]{1}$/.test(inputStr)) {
            setInputArray(prevArray => [...prevArray, OPERATORS[inputStr]]);
            setInputStr("");
        }
        setInputStr(prevStr => prevStr + event.target.innerText);
    }

    function handleClickOperator(event) {
        if(result) {
            setInputStr(event.target.innerText);
            setInputArray([...inputArray, result]);
            setResult(0);
        }
        else if(!/^[+×÷-]{1}$/.test(inputStr)) {
            setInputArray(prevArray => [...prevArray, inputStr]);
        }
        setInputStr(event.target.innerText);
    }

    function handleClickInvert() {
        if(!/^[+×÷-]{1}$/.test(inputStr)) {
            setInputStr(Number(inputStr * -1).toString());
        }   
    }

    function handleClickDecimal(event) {
        if(inputStr === "Invalid Expression") setInputStr("0.");
        
        else if(/^[+×÷-]{1}$/.test(inputStr) && !inputStr.includes(".")) {
            setInputArray(prevArray => [...prevArray, OPERATORS[inputStr]]);
            setInputStr("");
            setInputStr(inputStr => inputStr + "0.");
        }
        else if(!inputStr.includes(".")) {
            setInputStr(inputStr => inputStr + ".");
        }
    }

    function handleClickEqual() {
        let finalResult = 0;
        let error = "";

        try {
            // eslint-disable-next-line
            finalResult = eval(/[\d]/.test(inputStr) ? [...inputArray, inputStr].join(" ") : inputArray.join(" "));
        }
        catch(err) {
            error = "Invalid Expression";
            setInputStr(error);
        }
        
        setInputArray([]);
        setInputStr("0");
        setResult(finalResult);
    }

    function handleClickClear() {
        setInputStr("0");
        setInputArray([]);
        setResult(0);
    }
    
    return (
        <div id="panel" className="panel">
            <div id="panel-content" className="panel-content">
                <PanelScreen inputDisplay={inputStr} outputDisplay={inputArray.join(" ")} res={result} />
                <PanelButtons 
                    onClickNum={handleClickNum} 
                    onClickClear={handleClickClear}
                    onClickDecimal={handleClickDecimal} 
                    onClickOperator={handleClickOperator}
                    onClickInvert={handleClickInvert}
                    onClickEqual={handleClickEqual}
                />
            </div>
        </div>
    );
}