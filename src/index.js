import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
//0 ф-я для подключения компонента к стор
import { connect, Provider } from 'react-redux'

//1. create initial store
const initialState = {
    firstName: 'initialName',
    lastName: 'initialLastName',
}


const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

//4. describe actions
const actionChangeFirstName = {
    type: CHANGE_FIRST_NAME,
    payload: ''
}

const actionChangeLastName = {
    type: CHANGE_LAST_NAME,
    payload: ''
}

//2. define reducer function
const rootReducer = (state = initialState, action) => {
    return state;

}

//3.
const store = createStore(rootReducer)

console.group()
console.log(store.getState())
console.groupEnd()

class MainC extends Component {
    render (){
        return( 
            <div>
               <div> 
                   <input 
                    type = "text" 
                    value ={this.props.firstName} 
                    placeholder = "firstName" />
                </div>
                <div> 
                   <input 
                    type = "text" 
                    value ={this.props.lastName} 
                    placeholder = "lastName" />
                </div>
            </div>
        );
    }
}

//5. подключаем наш компонент к сторе
//5.1 function  to pass in connect
const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
    }
}
//5.2. pass to connect maper and invoke next function amd pass component 
const WrappedMainC = connect(mapStateToProps)(MainC)

//5. оборачиваем наш компонент
ReactDOM.render(<Provider store = {store}><WrappedMainC /> </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
