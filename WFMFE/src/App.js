import { BrowserRouter,Switch,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Bikedetails from './components/Bikedetails';
import Cardetails from './components/Cardetails';
import Mlogin from './components/Mlogin';
import Mdeshbord from './components/Mdeshbord';
import Register from './components/Register';
import Resetpwd from './components/Resetpwd'
import Updatebike from './components/Updatebike';
import Updatecar from './components/Updatecar';
function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Mlogin/>
        </Route>
        
        <Route  path="/register">
          <Register/>
        </Route>
       
        <Route  path="/resetpwd">
          <Resetpwd/>
          
        </Route>
        <Route path="/Mdashboard:data">
        <Mdeshbord/>
        </Route>

        <Route path="/updatebike:id">
          <Updatebike></Updatebike>
        </Route>
        <Route path="/updatecar:id">
          <Updatecar></Updatecar>
        </Route>

        <Route path="/bikedetails:id">
          <Bikedetails></Bikedetails>
        </Route>

        <Route path="/cardetails:id">
          <Cardetails></Cardetails>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
