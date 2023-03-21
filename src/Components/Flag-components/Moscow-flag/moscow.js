
import { getWeather } from "../../../Services/data";
  
  export default function Moscow() {
    return (
      <>
        <button className='flags' id='MoscowBtn' onClick={() => getWeather('Moscow')}>
          
        </button>
      </>
    );
  }