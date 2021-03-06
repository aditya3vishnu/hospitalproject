import React,{useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useGeolocation from './useGeolocation'
import HospitalScreenOne from './HospitalScreenOne'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { I18nProvider, LOCALES } from '../components/i18n';
import { FormattedMessage } from 'react-intl';
import translate from '../components/i18n/messages/translate'


const HospitalScreen = () => {
    const [ locale, setLocale ] = useState(LOCALES.ENGLISH)

    const [ hospitalName, setHospitalName ] = useState('');
    const [ doctorName, setDoctorName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');
    const [ response, setResponse ] = useState('');

    const [ data, setData ] = useState([]);
    const location = useGeolocation('');


        const submitHandler = (e) => {
            e.preventDefault()
        
        let lat = location.coordinates.lat
        let lon = location.coordinates.lon
        setData(location.loaded ? JSON.stringify(location) : "location data is not available.")
        

        let one = true;

        if(one) {

            axios.post('/api/addHospital', {
                hospitalName: hospitalName,
                doctorName: doctorName,
                address: address,
                phone: phone,
                data: data,
                lat: lat,
                lon: lon,
                latitude: latitude,
                longitude: longitude,
              })
              .then(function (response) {
                console.log(response, "this is the response")
                setResponse(JSON.stringify(response))
                if (response.status == 200){
                    Swal.fire('Success', 'Hospital datails are added succesfully','success')

                } else {
                    Swal.fire('Error', 'something went wrong', 'error' )
                }
              })
              .catch(function (error) {
                console.log(error);
              });

        }

        }
        

    return(
        <I18nProvider  locale={locale}>
        <Container>
            <Row >
                <Col className='text-center'>
                    
                    <Form onSubmit = {submitHandler}>
                    <Button  onClick={() => setLocale(LOCALES.ENGLISH)}>{translate("English")}</Button>
                     
                    <Button onClick={() => setLocale(LOCALES.ARABIC)}>{translate("Arabic")}</Button>

                                <br/>
                                <br/>
                                <br/>

            <Form.Group controlId = 'hospitalName'>
                    <Form.Label>{translate("Hospital Name")}</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder ="Enter hospital's name" 
                    value={hospitalName} 
                    onChange={(e) => setHospitalName(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = 'doctorName'>
                    <Form.Label>{translate("Doctor Name")}</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder ='Enter Doctors name' 
                    value={doctorName} 
                    onChange={(e) => setDoctorName(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = 'address'>
                    <Form.Label>{translate("Address")}</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder ="Enter hospital's address"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} >
                    </Form.Control>
                </Form.Group>    

                <Form.Group controlId = 'phone'>
                    <Form.Label>{translate("Phone Number")}</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder ='Enter phone number' 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} >
                </Form.Control>
                </Form.Group>

                <Form.Group controlId = 'latitude'>
                    <Form.Label>sample latitude</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder ='Enter sample latitude' 
                    value={latitude} 
                    onChange={(e) => setLatitude(e.target.value)} >
                </Form.Control>
                </Form.Group>

                <Form.Group controlId = 'longitude'>
                    <Form.Label>sample longitude</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder ='Enter sample longitude' 
                    value={longitude} 
                    onChange={(e) => setLongitude(e.target.value)} >
                </Form.Control>
                </Form.Group>
                    

                    <Button type='submit' variant='primary'>
                        Register
                    </Button>
                    <br/>
                    {data}
                    {response}
                    {/* <HospitalScreenOne  lat2={lat} lon2={lon}/> */}

            </Form>




                </Col>
            </Row>
        </Container>
        </I18nProvider>
    )

}

export default HospitalScreen