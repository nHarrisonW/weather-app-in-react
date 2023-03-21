import { getWeather } from "../../../Services/data";

export default function MexicoCity() {
  return (
    <>
      <button className='flags' id='MexicoCityBtn' onClick={() => getWeather('Mexico City')}>
        
      </button>
    </>
  );
}
