import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//createStore - ф-я redux для Создания хранилища
//bindActionCreators - ф-я для привязки определенной функции к dispatch (не передаем диспач, а только название функции)
import { createStore , bindActionCreators } from 'redux'
//connect - ф-я для подключения компонента к стор
//Provider - ф-я для подключения компонента к стор
import { connect, Provider } from 'react-redux'

//1. create initial store
const initialState = {
    firstName: 'initialName',
    lastName: 'initialLastName',
}

//просто константы
const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

//actionCreaters describe actions
const changeFirstNameF = (newFirstName) => {
    return {
        type: CHANGE_FIRST_NAME,
        payload: newFirstName 
    }
}

const changeLastNameF = (newLastName) => {
    return {
        type: CHANGE_LAST_NAME,
        payload: newLastName, 
    }
}

//2. define reducer function
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FIRST_NAME : 
            return {... state, firstName: action.payload}    
        case CHANGE_LAST_NAME : 
            return {... state, lastName: action.payload}    
        default : return state;    
    } 
}

//3.
const store = createStore(rootReducer)
//у сторе есть метод диспач

console.group()
console.log(store.getState())
console.groupEnd()

class MainC extends Component {

    render (){
        //эти пропс переданы из WrappedMainC
        const { firstName, lastName, changeFirstName, changeLastName } = this.props;

        return( 
            <div>
               <div> 
                   <input 
                    type = "text" 
                    value ={firstName} 
                    placeholder = "firstName"
                    onChange = {(event)=>{
                        // без импорта bindActionCreators 
                        // 1. пришлось бы писать так:
                        // dispatch(changeFirstName(event.target.value))
                        // 2. создавать враппер без второго параметра:
                        // const WrappedMainC = connect(putStateToProps)(MainC)
                        changeFirstName(event.target.value);
                    }}/>
                </div>
                <div> 
                   <input 
                    type = "text" 
                    value ={lastName} 
                    placeholder = "lastName" 
                    onChange = {(event)=>{
                        changeLastName(event.target.value);
                    }}/>
                </div>
                <div>
                    {`${firstName} ${lastName}`}
                </div>
            </div>
        );
    }
}

//5. подключаем наш компонент к стор
//5.1 function  to pass in connect
const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
    }
}

//привязываем диспач к actionCreaters 
const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstNameF, dispatch), 
        changeLastName:bindActionCreators(changeLastNameF, dispatch), 
    }
}

//5.2. pass to connect 
// -maper state - props
// - binder actions to props
// and invoke next function amd pass original component 
const WrappedMainC = connect(putStateToProps, putActionsToProps)(MainC)

//5. оборачиваем наш компонент и передаем стор в props (с методом диспач)
ReactDOM.render(<Provider store = {store}><WrappedMainC /> </Provider> , document.getElementById('root'));

serviceWorker.unregister();
