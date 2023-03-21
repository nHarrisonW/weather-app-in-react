import { getWeather } from "../London-Flag/london";

export default function Karachi() {
    return (
        <>
            <button className='flags' id='KarachiBtn' onClick={() => getWeather('Karachi')}>
                Karachi
            </button>
        </>
    );
}
