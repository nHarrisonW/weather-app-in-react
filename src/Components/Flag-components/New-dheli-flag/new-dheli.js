import { getWeather } from "../../../Services/data";

export default function NewDelhi() {
    return (
        <>
            <button className='flags' id='NewDelhiBtn' onClick={() => getWeather('New Delhi')}>
                
            </button>
        </>
    );
}
