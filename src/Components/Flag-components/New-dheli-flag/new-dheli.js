import { getWeather } from "../../../Services/data";

export default function NewDelhi() {
    return (
        <div>
        <h3>New Delhi</h3>
            <button className='flags' id='NewDelhiBtn' onClick={() => getWeather('New Delhi')}>
                
            </button>
        </div>
    );
}
