import { useState } from "react";
import PanelButtons from "./PanelButtons";
import PanelScreen from "./PanelScreen";

export default function Panel() {
    // const [inputArray, setInputArray] = useState([]);
    const [inputStr, setInputStr] = useState("0");

    function handleClickNum(event) {
        if(inputStr === "0"){
            setInputStr("");
        }
        setInputStr(inputStr => inputStr.concat(event.target.innerText));
    }

    function handleClear() {
        setInputStr("0");
    }

    function handleDecimal(event) {
        if(!inputStr.includes(".")) {
            setInputStr(inputStr => inputStr.concat(event.target.innerText));
        }
    }

    return (
        <div id="panel" className="panel">
            <div id="panel-content" className="panel-content">
                <PanelScreen inputDisplay={inputStr}/>
                <PanelButtons onClickNum={handleClickNum} onClear={handleClear} onClickDecimal={handleDecimal}/>
            </div>
        </div>
    );
}