import React, {Component} from 'react'
import '../App.css'
import NotFound from "./NotFound";
import {NavLink} from 'react-router-dom';
class MailBox extends Component{

    render() {
        let data = JSON.parse(window.localStorage.getItem('data'));
        window.localStorage.clear();
        if(data !== null){
            return(
                <div className="master-vd">
                    <div className="card-vd mdl-card mdl-shadow--2dp">
                        <div className="header-vd mdl-card__title">
                            <h2 className="mdl-card__title-text">
                                Hello {data.destinataire}
                            </h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            <div className='errorNotFound'>
                                <h5>{data.subject}</h5>
                                <span>{data.message}</span>
                            </div>
                        </div>
                        <div className="button-vd mdl-card__actions mdl-card--border">
                            <NavLink
                                className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                exact
                                to={"/"}>
                                Retour
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <NotFound/>
            )
        }

    }

}
export default MailBox;