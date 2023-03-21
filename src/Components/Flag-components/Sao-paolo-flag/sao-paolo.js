import { getWeather } from "../../../Services/data";

export default function SaoPaolo() {
    return (
      <>
        <button className='flags' id='SaoPaoloBtn' onClick={() => getWeather('Sao Paulo')}>
          
        </button>
      </>
    );
  }
  