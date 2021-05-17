import React,{ useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import HospitalScreen from './screens/HospitalScreen'
import Header from './Header';
import Footer from './Footer';
import { FormattedMessage } from 'react-intl'
import { I18nProvider, LOCALES } from './components/i18n'
import index from './components/index'



const App = () => {
  return (
   <I18nProvider>
   <Router>
     <div>
     <Header lang={"lang"}/>
      <main className="py-3">
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/UserScreen' component={UserScreen} />
            <Route path='/HospitalScreen' component={HospitalScreen} />
        </Container>
      </main>
    <Footer />
    </div>
   </Router>
   </I18nProvider>
  );
}

export default App;
