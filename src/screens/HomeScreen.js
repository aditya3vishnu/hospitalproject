import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { I18nProvider, LOCALES } from '../components/i18n';
import { FormattedMessage } from 'react-intl';
import translate from '../components/i18n/messages/translate'


const HomeScreen = () => {

    const [ locale, setLocale ] = useState(LOCALES.ENGLISH)

    let history = useHistory()

    const hospitalHandler = () => {
            history.push("/HospitalScreen");
    }

    const userHandler = () => {
            history.push("/UserScreen")
    }


    return (
        
        
            <I18nProvider  locale={locale}>
               
            <button onClick={hospitalHandler}>{translate("Hospital")}</button>

            <hr />

            <button onClick={userHandler}>{translate("User")}</button>

            <hr />

            <button onClick={() => setLocale(LOCALES.ENGLISH)}>ENGLISH</button>
            <button onClick={() => setLocale(LOCALES.ARABIC)}>ARABIC</button>


            </I18nProvider>
       

    )
} 

export default HomeScreen;