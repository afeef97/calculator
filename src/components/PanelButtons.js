import "../styles/PanelButtons.scss"

export default function PanelButtons() {
    return (
        <div id="panel-buttons">
            <div id="left-buttons">
                <button id="one" class="button-pads">1</button>
                <button id="two" class="button-pads">2</button>
                <button id="three" class="button-pads">3</button>
                <button id="four" class="button-pads">4</button>
                <button id="five" class="button-pads">5</button>
                <button id="six" class="button-pads">6</button>
                <button id="seven" class="button-pads">7</button>
                <button id="eight" class="button-pads">8</button>
                <button id="nine" class="button-pads">9</button>
                <button id="zero" class="button-pads">0</button>
                <button id="decimal" class="button-pads">.</button>
                <button id="equals" class="button-pads">=</button>
            </div>
            <div id="right-buttons">
                <button id="subtract" class="button-pads">-</button>
                <button id="clear" class="button-pads">AC</button>
                <button id="divide" class="button-pads">÷</button>
                <button id="multiply" class="button-pads">×</button>   
                <button id="add" class="button-pads">+</button>
            </div>
        </div>
    );
}