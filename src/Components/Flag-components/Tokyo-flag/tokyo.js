import { getWeather } from "../../../Services/data";

export default function Tokyo() {
  return (
    <div>
        <h3>Tokyo</h3>
      <button className='flags' id='TokyoBtn' onClick={() => getWeather('Tokyo')}>
        
      </button>
    </div>
  );
}
