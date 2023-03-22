import { getWeather } from "../../../Services/data";

  
  export default function Cairo() {
    return (
      <div>
        <h3>Cairo</h3>
        <button className='flags' id='CairoBtn' onClick={() => getWeather('Cairo')}>
          
        </button>
      </div>
    );
  }