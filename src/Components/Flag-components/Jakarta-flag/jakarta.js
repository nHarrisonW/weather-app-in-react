import { getWeather } from "../London-Flag/london";

export default function Jakarta() {
  return (
    <>
      <button className='flags' id='JakartaBtn' onClick={() => getWeather('Jakarta')}>
        Jakarta
      </button>
    </>
  );
}
