import { getWeather } from "../../../Services/data";

export default function Sydney() {
    return (
      <div>
        <h3>Sydney</h3>
        <button className='flags' id='SydneyBtn' onClick={() => getWeather('Sydney')}>
          
        </button>
      </div>
    );
  }