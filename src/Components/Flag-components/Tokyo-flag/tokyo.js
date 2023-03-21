import { getWeather } from "../../../Services/data";

export default function Tokyo() {
  return (
    <>
      <button className='flags' id='TokyoBtn' onClick={() => getWeather('Tokyo')}>
        
      </button>
    </>
  );
}
