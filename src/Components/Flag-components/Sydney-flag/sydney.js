import { getWeather } from "../../../Services/data";

export default function Sydney() {
    return (
      <>
        <button className='flags' id='SydneyBtn' onClick={() => getWeather('Sydney')}>
          
        </button>
      </>
    );
  }