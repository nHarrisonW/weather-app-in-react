

import { getWeather } from "../London-Flag/london";

  
  export default function Moscow() {
    return (
      <>
        <button className='flags' id='MoscowBtn' onClick={() => getWeather('Moscow')}>
          Moscow
        </button>
      </>
    );
  }