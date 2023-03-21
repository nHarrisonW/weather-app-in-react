import { getWeather } from "../London-Flag/london";

export default function Shanghai() {
  return (
    <>
      <button className='flags' id='ShanghaiBtn' onClick={() => getWeather('Shanghai')}>
        Shanghai
      </button>
    </>
  );
}
