import React, {Component} from 'react'
import '../App.css'



class ModelPoster extends Component {

    state = {
        isClick: false,
        isFocus: true
    };

    handleClick = () => {
        this.setState(
            {
                isClick: !this.state.isClick
            }
        )
    };
handleFocus= event =>{

}
    render() {
        const {title, index, add, remove} = this.props
        return (

            <div >
                <table>
                    <tr>
                        <td><h1
                            onClick={() =>  add(title)}
                        >{title}</h1></td>
                        <td>  <button onClick={() => remove(index)}>Supprimer</button></td>
                    </tr>
                </table>
            </div>
        );
    }
};
export default ModelPoster;