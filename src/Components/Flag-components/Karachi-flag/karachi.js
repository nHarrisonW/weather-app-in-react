import { getWeather } from "../../../Services/data";

export default function Karachi() {
    return (
        <div>
        <h3>Karachi</h3>
            <button className='flags' id='KarachiBtn' onClick={() => getWeather('Karachi')}>
                
            </button>
        </div>
    );
}
