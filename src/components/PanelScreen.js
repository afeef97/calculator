export default function PanelScreen(props) {
    return (
        <div id="display" className="display">
            <div className="output-display">{props.outputDisplay}</div>
            <div className="user-input-display">{props.inputDisplay}</div>
        </div>
    );
}