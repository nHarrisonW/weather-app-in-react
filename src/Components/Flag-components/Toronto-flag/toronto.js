import { getWeather } from "../../../Services/data";

export default function Toronto() {
  return (
    <>
      <button className='flags' id='TorontoBtn' onClick={() => getWeather('Toronto')}>
        
      </button>
    </>
  );
}