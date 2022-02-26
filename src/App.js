
import './App.css';
import gyvor_ambassador from './assets/gyvor_ambassador.png';
import google_play_badge from './assets/google-play-badge.png';

function App() {
  return (
    <div className="App">
      <div className=" Nav-bar">
        <div>GYVOR</div>
      </div>
      <div className=" Cover">
        <div>
          <h2>VEHICLES RENTAL SERVICE</h2>
          <p>
            Listed with all types of vehicles accross India
          </p>
          <p>
            Platform for meetups & exciting dream tours
          </p>
          <p>
            Rent agreement with safety, insurance and security
          </p>
        </div>
        <div>
          <img src={gyvor_ambassador} className="amb" alt="gyvor_ambassador"></img>
        </div>

      </div>
      <div className=" Download"><br />
        <img src={google_play_badge} className="gpb" alt="gyvor_ambassador"></img>
        <p>
          Product will lunch on March 2022
        </p>
      </div>
      <div className=" Footer">Copyrights 2022 | All Rights Reserved
      </div>
    </div>
  );
}

export default App;
