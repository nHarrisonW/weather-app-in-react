import { getWeather } from "../../../Services/data";

export default function Paris() {
    return (
        <div>
        <h3>Paris</h3>
            <button className='flags' id='ParisBtn' onClick={() => getWeather('Paris')}>
                
            </button>
        </div>
    );
}
