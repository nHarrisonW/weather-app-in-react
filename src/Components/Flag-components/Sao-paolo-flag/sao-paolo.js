import { getWeather } from "../../../Services/data";

export default function SaoPaolo() {
    return (
      <div>
        <h3>Sao Paulo</h3>
        <button className='flags' id='SaoPaoloBtn' onClick={() => getWeather('Sao Paulo')}>
          
        </button>
      </div>
    );
  }
  