import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../redux/actions/todos';
import Counter from '../components/Counter';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodoText: ''
        }
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({
            newTodoText: ''
        })
    }

    removeTodo = (e) => {
        this.props.removeTodo(e.target.value);
    }

    render(){
        return(
            <div>
                <Counter />
                <ul>
                    {this.props.todos.map(todo => {
                        return (
                            <div  key={todo.id}>
                                <li>{todo.text}</li>
                                <button value={todo.id} onClick={this.removeTodo}>x</button>
                            </div>                            
                        )
                    })}
                    
                </ul>

                <input 
                    value={this.state.newTodoText}
                    type="text"
                    onChange={(e) => this.setState({ newTodoText: e.target.value})}
                />

                <button onClick={this.addNewTodo}>Novo todo</button>
                <div>
                    <button onClick={() => this.props.history.push('/')}>Entrar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);