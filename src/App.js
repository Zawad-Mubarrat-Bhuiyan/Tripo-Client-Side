import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddOffer from './component/AddOffer/AddOffer';
import AllOrder from './component/AllOrder/AllOrder';
import Details from './component/Details/Details';
import Error from './component/Error/Error';
import Footer from './component/Home/Footer/Footer';
import Header from './component/Home/Header/Header';
import AllSection from './component/Home/Home/AllSection/AllSection';
import Login from './component/Login/Login';
import MyBooking from './component/MyBooking/MyBooking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header>
          </Header>
          <Switch>
            <Route exact path="/">
              <AllSection></AllSection>
            </Route>
            <Route path="/home">
              <AllSection></AllSection>
            </Route>
            <PrivateRoute path="/myBookings">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/allOrder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:offerId">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
