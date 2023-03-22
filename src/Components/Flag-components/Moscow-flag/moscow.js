
import { getWeather } from "../../../Services/data";
  
  export default function Moscow() {
    return (
      <div>
        <h3>Moscow</h3>
        <button className='flags' id='MoscowBtn' onClick={() => getWeather('Moscow')}>
          
        </button>
      </div>
      
    );
  }