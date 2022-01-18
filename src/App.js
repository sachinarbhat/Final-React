import './App.css';
import Nav from './Navbar/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from './components/First';
import Secnd from './components/Secnd';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import { useEffect, useState } from 'react';
import Http from './axiosconfig';
import axios from 'axios'

function App() {
  const [resumedata, setresumedata] = useState([])

  let fetchdata = async () => {
    try {
      const response = await axios.post("http://localhost:3006/ResumeDetails", resumedata);
      console.log(response.data);
      if (response.data.error) {
        const errMessage = response.data.message;
      }
      else {
        const fetchedProducts = response.data.allDataCopy;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Effect");
    fetchdata();
  },)

  let dataPush = (reciveddata) => {
    let dataCopy = [...resumedata];
    dataCopy.push(reciveddata);
    setresumedata(dataCopy)
  }
  console.log("Local", resumedata);

  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/">
            <First dataPush={dataPush} />
          </Route>
          <Route exact path="/Secoundstep">
            <Secnd dataPush={dataPush} />
          </Route>
          <Route exact path="/Thirdstep">
            <Third dataPush={dataPush} />
          </Route>
          <Route exact path="/Fourthstep">
            <Fourth dataPush={dataPush} />
          </Route>
          <Route exact path="/Fifthstep">
            <Fifth dataPush={dataPush} Data={resumedata} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
