import PanelButtons from "./PanelButtons";
import PanelScreen from "./PanelScreen";

export default function Panel() {
    return (
        <div id="panel" className="panel">
            <div id="panel-content" className="panel-content">
                <PanelScreen />
                <PanelButtons />
            </div>
        </div>
    );
}