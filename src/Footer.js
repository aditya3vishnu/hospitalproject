import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import translate from './components/i18n/messages/translate'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>   Copyright &copy; Hospital </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
