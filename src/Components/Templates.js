import React, {Component} from 'react'
import '../App.css'
import ModelPoster from "./ModelPoster";
import {models} from '../Constants'
import AddModel from "./AddModel";
import "../../node_modules/material-design-lite/material.min.css"
import "../../node_modules/material-design-lite/material.min.js"
import {Redirect} from 'react-router-dom';

class Templates extends Component {
    state = {
        models,
        modelTitle: '',
        email: '',
        message: '',
        subject: '',
        sendTo: false
    }
    add = (key) => {
        this.setState({
            modelTitle: key
        })
        console.log(key)
    }
    addModel = model => {
        let data = {'title': model.title}
        models.push(data)
        this.setState({});
        console.log(this.state.models)
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleClick = event => {
        this.setState({
            modelTitle: ''
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            sendTo: true
        })
        let data = {"destinataire": this.state.email, "subject": this.state.subject, "message": this.state.message};
        window.localStorage.setItem('data', JSON.stringify(data));
        // window.location.replace('/mailbox');
    }
    remove = index => {
        let models = this.state.models
        delete models[index];
        this.setState({});
    }

    render() {
        if (this.state.sendTo) {
            return <Redirect push to={`/mailbox`}/>
        }
        const storiesList = Object.keys(this.state.models)
            .map(key => <ModelPoster
                index={key}
                title={this.state.models[key].title}
                add={this.add}
                remove={this.remove}
            />)
        if (this.state.modelTitle !== '') {
            return (
                <div className="master-vd">
                    <div className="card-vd mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__supporting-text">
                            <h1>{this.state.modelTitle}</h1>
                            <form id='join-form-vd' onSubmit={this.handleSubmit}>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="email" value={this.state.email}
                                           name="email"
                                           onChange={this.handleChange} required/>
                                    <label className="mdl-textfield__label" htmlFor="firstName">
                                        {this.state.email === '' ? 'Destinataire' : ''}</label>
                                </div>
                                <br/>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" value={this.state.subject}
                                           name="subject"
                                           onChange={this.handleChange} required/>
                                    <label className="mdl-textfield__label" htmlFor="firstName">
                                        {this.state.subject === '' ? 'Subject' : ''}</label>
                                </div>
                                <br/>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <textarea className="mdl-textfield__input" value={this.state.message}
                                              name="message"
                                              onChange={this.handleChange} required/>
                                    <label className="mdl-textfield__label" htmlFor="message">
                                        {this.state.subject === '' ? 'Messages' : ''}</label>
                                </div>
                                <div className="button-vd mdl-card__actions mdl-card--border">
                                    <button
                                        className="next-vd mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                        onClick={this.handleClick}
                                        type='button'>Annuler
                                    </button>
                                    <button
                                        className="next-vd mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                        type='submit'>Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="master-vd">
                <div className="card-vd mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__supporting-text">

                        <AddModel
                            addModel={this.addModel}
                        />
                        <div className="hello">
                            <span>
                             {storiesList}
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default Templates
