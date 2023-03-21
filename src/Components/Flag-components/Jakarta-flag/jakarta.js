import { getWeather } from "../../../Services/data";

export default function Jakarta() {
  return (
    <>
      <button className='flags' id='JakartaBtn' onClick={() => getWeather('Jakarta')}>
        
      </button>
    </>
  );
}
