import { useState } from "react";
import PanelButtons from "./PanelButtons";
import PanelScreen from "./PanelScreen";

export default function Panel() {
    const [inputArray, setInputArray] = useState([]);
    const [inputStr, setInputStr] = useState("0");

    function handleClickNum(event) {
        if(/^[0+×÷-]/.test(inputStr) && inputStr.length === 1){
            setInputStr("");
        }
        setInputStr(prevStr => prevStr + event.target.innerText);
    }

    function handleClickClear() {
        setInputStr("0");
        setInputArray([]);
    }

    function handleClickDecimal(event) {
        if(!inputStr.includes(".")) {
            setInputStr(inputStr => inputStr.concat(event.target.innerText));
        }
    }

    function handleClickOperator(event) {
        if(!/^[0+×÷-]/.test(inputStr)) {
            setInputArray(prevArray => [...prevArray, inputStr, event.target.innerText]);
            setInputStr(event.target.innerText);
        }
    }

    return (
        <div id="panel" className="panel">
            <div id="panel-content" className="panel-content">
                <PanelScreen inputDisplay={inputStr} outputDisplay={inputArray.join(" ")}/>
                <PanelButtons 
                    onClickNum={handleClickNum} 
                    onClickClear={handleClickClear}
                    onClickDecimal={handleClickDecimal} 
                    onClickOperator={handleClickOperator}
                />
            </div>
        </div>
    );
}