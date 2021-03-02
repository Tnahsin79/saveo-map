//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Loader, LoaderOptions } from 'google-maps';

function App() {
  //const [i, setI] = useState(0);
  const [loc, setLoc] = useState([]);
  const [place, setPlace] = useState("");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [la, setLa] = useState(12.972442);
  const [lo, setLo] = useState(77.580643);
  const numbers = [1, 2, 3, 4, 5];

  /*useEffect(() => {
    setLoc(localStorage.getItem("location"));
  });*/

  const submit = () => {
    let temp = loc;
    temp.push({ "place": place, "lat": lat, "lon": lon });
    console.log(place, lat, lon);
    setLa(lat);
    setLo(lon);
    setPlace("");
    setLat();
    setLoc();
    setLoc(temp);
    console.log(loc);
    localStorage.setItem("location", loc);

    const options = {/* todo */ };
    const loader = new Loader('my-api-key', options);
    loader.load().then(function (google) {
    google.maps.Map(document.getElementById('map'), {
        center: { lat: la, lng: lo },
        zoom: 7,
      });
    });
  }

  const changePlace = (e) => {
    setPlace(e.target.value);
  }

  const changeLat = (e) => {
    setLat(e.target.value);
  }

  const changeLon = (e) => {
    setLon(e.target.value);
  }

  const options = {/* todo */ };
  const loader = new Loader('my-api-key', options);
  loader.load().then(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: la, lng: lo },
      zoom: 7,
    });
  });

  return (
    <div className="App">
      <button className="btn-home">HOME</button>

      <div className="container window1">
        <div class="row g-3">
          <div class="col-sm-2">
            <div>
              <label for="form10Example1">Location Name</label>
              <input type="text" id="form10Example1" class="form-control form" onChange={changePlace} />
            </div>
          </div>
          <div class="col-sm-2">
            <div>
              <label for="form10Example2">Enter Latitude</label>
              <input type="text" id="form10Example2" class="form-control form" onChange={changeLat} />
            </div>
          </div>
          <div class="col-sm-2">
            <div>
              <label for="form10Example3">Enter Longitude</label>
              <input type="text" id="form10Example3" class="form-control form" onChange={changeLon} />
            </div>
          </div>
          <div class="col-sm-3"></div>
          <div class="col-sm-3">
            <div class="form-outline">
              {
                loc.length > 0 ?
                  <button type="submit" onClick={submit} className="submit">ADD</button>
                  :
                  <button type="submit" onClick={submit} className="submit">SUBMIT</button>
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5 window2">
            <h6 className="all-coordinates">All Co-ordinates:</h6>
            <div className="row">
              <div className="col-sm-6">My Co-ordinates</div>
              <div className="col-sm-3">Default</div>
              <div className="col-sm-3">Default</div>
            </div>
            {
              numbers.map((t, index) =>
                loc[index] !== undefined ?
                  <div className="row">
                    <div className="col-sm-6">{t} {loc[index]["place"]}</div>
                    <div className="col-sm-3">{loc[index]["lat"]}</div>
                    <div className="col-sm-3">{loc[index]["lon"]}</div>
                  </div>
                  :
                  <div className="row">
                    <div className="col-sm-6">{t}.....</div>
                    <div className="col-sm-3">.....</div>
                    <div className="col-sm-3">.....</div>
                  </div>
              )
            }
            <button className="show-route">Show Route</button>
          </div>
          <div className="col-sm-7 window3"><div id="map"></div></div>
        </div>

      </div>
    </div>
  );
}

export default App;