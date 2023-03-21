import { getWeather } from "../../../Services/data";

export default function Shanghai() {
  return (
    <>
      <button className='flags' id='ShanghaiBtn' onClick={() => getWeather('Shanghai')}>
        
      </button>
    </>
  );
}
