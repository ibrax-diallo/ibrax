import React, {Component} from 'react'
import '../App.css';
import "../../node_modules/material-design-lite/material.min.css"
import "../../node_modules/material-design-lite/material.min.js"


class NotFound extends Component {
    render() {
        return (
            <div className="master-vd">
                <div className="card-vd mdl-card mdl-shadow--2dp">
                    <div className="header-vd mdl-card__title">
                        <h2 className="mdl-card__title-text">
                            Esus
                        </h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <div className='errorNotFound'>
                            <h5>404</h5>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;
