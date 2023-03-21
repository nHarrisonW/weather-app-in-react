
import { getWeather } from "../../../Services/data";


export default function London() {
  return (
    <>
      <button className='flags' id='LondonBtn' onClick={() => getWeather('London')}>
        
      </button>
    </>
  );
}

