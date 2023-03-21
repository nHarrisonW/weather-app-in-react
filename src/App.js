


import './style.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row
} from 'react-bootstrap';
// My components
import Head from './Components/Head-component/head';
import London from './Components/Flag-components/London-Flag/london';
import Paris from './Components/Flag-components/Paris-flag/paris';
import Cairo from './Components/Flag-components/Cairo-flag/cairo';
import Moscow from './Components/Flag-components/Moscow-flag/moscow';
import Istanbul from './Components/Flag-components/Istanbul-flag/istanbul';
import NewDelhi from './Components/Flag-components/New-dheli-flag/new-dheli';
import Karachi from './Components/Flag-components/Karachi-flag/karachi';
import Dhaka from './Components/Flag-components/Dhaka-flag/dhaka';
import Jakarta from './Components/Flag-components/Jakarta-flag/jakarta';
import Shanghai from './Components/Flag-components/Shanghai-flag/shanghai';




export default function App() {
  return (
    <div className='App-bg'>
      <Container>
        < Head />  
        <Row>
          <div className='dummy'>
            < London />
            < Paris />
            < Cairo />
            < Moscow />
            < Istanbul />
          </div>
        </Row>
        <Row>
          <div className='dummy'>
            < NewDelhi />
            < Karachi />
            < Dhaka />
            < Jakarta />
            < Shanghai />
          </div>
        </Row>
        <Row>
          <div className='dummy'>
            < NewDelhi />
            < Karachi />
            < Dhaka />
            < Jakarta />
            < Shanghai />
          </div>
        </Row>
      </Container>
    </div>
  )
}

