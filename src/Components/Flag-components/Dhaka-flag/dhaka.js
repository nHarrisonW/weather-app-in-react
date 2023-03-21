import { getWeather } from "../../../Services/data";


export default function Dhaka() {
  return (
    <>
      <button className='flags' id='DhakaBtn' onClick={() => getWeather('Dhaka')}>
        
      </button>
    </>
  );
}
