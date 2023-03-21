import { getWeather } from "../../../Services/data";

export default function Paris() {
    return (
        <>
            <button className='flags' id='ParisBtn' onClick={() => getWeather('Paris')}>
                
            </button>
        </>
    );
}
