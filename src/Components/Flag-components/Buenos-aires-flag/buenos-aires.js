
import { getWeather } from "../../../Services/data";

export default function BuenosAires() {
    return (
      <>
        <button className='flags' id='BuenosAiresBtn' onClick={() => getWeather('Buenos Aires')}>
          
        </button>
      </>
    );
  }
  