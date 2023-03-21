import { getWeather } from "../../../Services/data";

export default function Karachi() {
    return (
        <>
            <button className='flags' id='KarachiBtn' onClick={() => getWeather('Karachi')}>
                
            </button>
        </>
    );
}
