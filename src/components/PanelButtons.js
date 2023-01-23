export default function PanelButton(props) {
    return (
        <div id="panel-buttons" className="panel-buttons">
            <div id="left-buttons" className="left-buttons">            
                <button id="seven" className="button-pads" onClick={props.onClickNum}>7</button>
                <button id="eight" className="button-pads" onClick={props.onClickNum}>8</button>
                <button id="nine" className="button-pads" onClick={props.onClickNum}>9</button>    
                <button id="four" className="button-pads" onClick={props.onClickNum}>4</button>
                <button id="five" className="button-pads" onClick={props.onClickNum}>5</button>
                <button id="six" className="button-pads" onClick={props.onClickNum}>6</button>
                <button id="one" className="button-pads" onClick={props.onClickNum}>1</button>
                <button id="two" className="button-pads" onClick={props.onClickNum}>2</button>
                <button id="three" className="button-pads" onClick={props.onClickNum}>3</button>               
                <button id="zero" className="button-pads" onClick={props.onClickNum}>0</button>
                <button id="decimal" className="button-pads" onClick={props.onClickDecimal}>.</button>
                <button id="equals" className="button-pads" onClick={props.onClick}>=</button>
            </div>
            <div id="right-buttons" className="right-buttons">
                <button id="subtract" className="button-pads" onClick={props.onClickOperator}>-</button>
                <button id="clear" className="button-pads" onClick={props.onClickClear}>AC</button>
                <button id="divide" className="button-pads" onClick={props.onClickOperator}>÷</button>
                <button id="multiply" className="button-pads" onClick={props.onClickOperator}>×</button>   
                <button id="add" className="button-pads" onClick={props.onClickOperator}>+</button>
            </div>
        </div>
    );
}