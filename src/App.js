import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import HospitalScreen from './screens/HospitalScreen'
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
   <Router>
     <Header />
      <main className="py-3">
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/UserScreen' component={UserScreen} />
            <Route path='/HospitalScreen' component={HospitalScreen} />
        </Container>
      </main>
    <Footer />
   </Router>
  );
}

export default App;
