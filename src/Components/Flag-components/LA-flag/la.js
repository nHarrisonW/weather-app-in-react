import { getWeather } from "../../../Services/data";

export default function LosAngeles() {
  return (
    <>
      <button className='flags' id='LABtn' onClick={() => getWeather('Los Angeles')}>
        
      </button>
    </>
  );
}
