import React, {Component} from 'react'
//0 ф-я для создание стор
import { createStore } from 'redux'
//0 ф-я для подключения компонента к стор
import { connect, Provider } from 'react-redux'

//1. create initial store
const initialState = {
    firstName: '',
    lastName: '',
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

class ReduxExampleOne extends Component {
    render (){
        return( 
            <div>
               <div> 
                   <input type = "text" placeholder = "firstName" />
                </div>
                <div> 
                   <input type = "text" placeholder = "lastName" />
                </div>
            </div>
        );
    }
}


export default  ReduxExampleOne;