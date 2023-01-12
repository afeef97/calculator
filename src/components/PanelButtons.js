export default function PanelButtons() {
    return (
        <div id="panel-buttons" className="panel-buttons">
            <div id="left-buttons" className="left-buttons">            
                <button id="seven" className="button-pads">7</button>
                <button id="eight" className="button-pads">8</button>
                <button id="nine" className="button-pads">9</button>    
                <button id="four" className="button-pads">4</button>
                <button id="five" className="button-pads">5</button>
                <button id="six" className="button-pads">6</button>
                <button id="one" className="button-pads">1</button>
                <button id="two" className="button-pads">2</button>
                <button id="three" className="button-pads">3</button>               
                <button id="zero" className="button-pads">0</button>
                <button id="decimal" className="button-pads">.</button>
                <button id="equals" className="button-pads">=</button>
            </div>
            <div id="right-buttons" className="right-buttons">
                <button id="subtract" className="button-pads">-</button>
                <button id="clear" className="button-pads">AC</button>
                <button id="divide" className="button-pads">÷</button>
                <button id="multiply" className="button-pads">×</button>   
                <button id="add" className="button-pads">+</button>
            </div>
        </div>
    );
}