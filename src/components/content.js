import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Helmet from 'react-helmet';

import Index from '../pages/index';
import Obsazeni from '../pages/obsazeni';
import { Akce } from '../pages/akce';
import { Aktuality } from '../pages/aktuality';
import { Fotogalerie } from '../pages/fotogalerie';
import { Kontakty } from '../pages/kontakty';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/pages/index">
                    <Helmet><title>Loštická Veselka</title></Helmet>
                    <Index />
                </Route>
                <Route path="/pages/obsazeni">
                    <Helmet><title>Obsazení</title></Helmet>
                    <Obsazeni />
                </Route>
                <Route path="/pages/akce">
                    <Helmet><title>Akce</title></Helmet>
                    <Akce />
                </Route>
                <Route path="/pages/aktuality">
                    <Helmet><title>Aktuality</title></Helmet>
                    <Aktuality />
                </Route>
                <Route path="/pages/fotogalerie">
                    <Helmet><title>Fotogalerie</title></Helmet>
                    <Fotogalerie />
                </Route>
                <Route path="/pages/kontakty">
                    <Helmet><title>Kontakty</title></Helmet>
                    <Kontakty />
                </Route>
                <Redirect to="/pages/index"/>
            </Switch>
        )
    }
}

export default Content;