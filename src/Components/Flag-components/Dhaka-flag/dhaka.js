import { getWeather } from "../London-Flag/london";

export default function Dhaka() {
  return (
    <>
      <button className='flags' id='DhakaBtn' onClick={() => getWeather('Dhaka')}>
        Dhaka
      </button>
    </>
  );
}
