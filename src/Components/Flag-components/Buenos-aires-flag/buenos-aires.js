
import { getWeather } from "../../../Services/data";

export default function BuenosAires() {
    return (
      <div>
        <h3>Beunos-Aires</h3>
        <button className='flags' id='BuenosAiresBtn' onClick={() => getWeather('Buenos Aires')}>
          
        </button>
      </div>
    );
  }
  