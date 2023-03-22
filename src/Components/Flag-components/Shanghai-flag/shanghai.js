import { getWeather } from "../../../Services/data";

export default function Shanghai() {
  return (
    <div>
        <h3>Shanghai</h3>
      <button className='flags' id='ShanghaiBtn' onClick={() => getWeather('Shanghai')}></button>
    </div>
  );
}
