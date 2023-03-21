



import { getWeather } from "../London-Flag/london";

export default function Paris() {
    return (
        <>
            <button className='flags' id='ParisBtn' onClick={() => getWeather('Paris')}>
                Paris
            </button>
        </>
    );
}
