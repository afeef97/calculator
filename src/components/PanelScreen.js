export default function PanelScreen(props) {
    return (
        <div id="display" className="display">
            <div className="output-display"></div>
            <div className="user-input-display">{props.inputDisplay}</div>
        </div>
    );
}