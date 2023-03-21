import { getWeather } from "../London-Flag/london";

export default function NewDelhi() {
    return (
        <>
            <button className='flags' id='NewDelhiBtn' onClick={() => getWeather('New Delhi')}>
                New Delhi
            </button>
        </>
    );
}
