import { getWeather } from "../../../Services/data";

  
  export default function Cairo() {
    return (
      <>
        <button className='flags' id='CairoBtn' onClick={() => getWeather('Cairo')}>
          
        </button>
      </>
    );
  }