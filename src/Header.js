import React, {useState} from "react"
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Button, NavDropdown, Row, Col } from "react-bootstrap"
import { I18nProvider, LOCALES } from './components/i18n'
import { FormattedMessage } from 'react-intl'
import translate from './components/i18n/messages/translate'


const Header = ({  }) => {

  const [ locale, setLocale ] = useState(LOCALES.ENGLISH)
  
    const logoutHandler = () => {
      
    }


  return (
    <I18nProvider locale={locale}> 
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand> {translate("Hospital")} </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <LinkContainer to='/login'>
                <Nav.Link ><i className="fas fa-user" onClick={logoutHandler}></i></Nav.Link>
              </LinkContainer> 

              <LinkContainer to='/login'>
                <Nav.Link > {translate("Welcome")}  </Nav.Link>
              </LinkContainer>            
 
              <button  onClick={() => setLocale(LOCALES.ENGLISH)}>{translate("English")}</button>       
              <button onClick={() => setLocale(LOCALES.ARABIC)}>{translate("Arabic")}</button>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
     </I18nProvider>
    
  );
};

export default Header;
