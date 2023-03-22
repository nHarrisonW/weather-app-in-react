
import { getWeather } from "../../../Services/data";


export default function London() {
  return (
    <div>
        <h3>London</h3>
      <button className='flags' id='LondonBtn' onClick={() => getWeather('London')}>
        
      </button>
    </div>
  );
}

