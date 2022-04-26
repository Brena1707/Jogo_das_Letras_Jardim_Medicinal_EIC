import React, { Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Game from './game/Game'
import Inicial from './Inicial'
import Instrucoes from './Instrucoes';
import Creditos from './Creditos';
import Final from './Final';

import TemplateLilas from './TemplateLilas';
//import Nivel from './Nivel';

export default class Routes extends Component {
    render() {
        const mobile = this.props.mobile
        return (
            //<Route exact path="/nivel" render={(props) => <Nivel {...props} mobile={mobile}/>} />
            <BrowserRouter>
                <Switch>
                    
                    <Route exact path="/instrucoes" render={(props) => <Instrucoes {...props} mobile={mobile} />} />
                    <Route exact path="/creditos" render={(props) => <Creditos {...props} mobile={mobile}/>}  />
                    <Route exact path="/game" render={(props) => <Game {...props} mobile={mobile} />} />
                    <Route exact path="/inicial" render={(props) => <Inicial {...props} mobile={mobile} />} />
                    <Route exact path="/final" render={(props) => <Final {...props} mobile={mobile} />}  />
                    <Redirect to="/inicial"/>
                </Switch>                           
                <TemplateLilas mobile={this.props.mobile} />
            </BrowserRouter> 
        )
    }
 }