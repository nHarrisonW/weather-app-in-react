import { getWeather } from "../../../Services/data";


export default function Dhaka() {
  return (
    <div>
        <h3>Dhaka</h3>

      <button className='flags' id='DhakaBtn' onClick={() => getWeather('Dhaka')}>
        
      </button>
    </div>
  );
}
