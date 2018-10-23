import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../redux/actions/todos';


class SingIn extends Component {
    render(){
        return(
            <div>
                <h2>
                sing In
                </h2>
                

                <div>
                    <button onClick={() => this.props.history.push('/todo')}>entrar</button>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    app: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);