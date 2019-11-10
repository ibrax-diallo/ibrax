import React, {Component} from 'react'
import '../App.css'

class AddModel extends Component {
    state = {
        title: ''
    }
    createModel = () => {
        const {addModel} = this.props

        const title = {
            title: this.state.title
        }

        addModel(title)

        // Reset
        this.setState({title: ''})
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.createModel()
    }
    handleKeyUp = event => {
        if (event.key === 'Enter') {
            if (this.state.title !== '') {
                this.createModel()
            }

        }
    }

    render() {
        return (
            <div className="mdl-card__supporting-text">
                <form id='join-form-vd' onSubmit={this.handleSubmit}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp}
                            placeholder={this.state.title === '' ? 'Title' : ''}
                            required
                        />
                    </div>
                    <div className="button-vd mdl-card__actions mdl-card--border">
                        <button
                            className="next-vd mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                            type='submit'>Ajouter
                        </button>
                    </div>
                </form>

            </div>
        )
    }

}

export default AddModel;
