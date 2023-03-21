import { getWeather } from "../London-Flag/london";
  
  export default function Cairo() {
    return (
      <>
        <button className='flags' id='CairoBtn' onClick={() => getWeather('Cairo')}>
          Cairo
        </button>
      </>
    );
  }