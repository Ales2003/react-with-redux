import React, {Component} from 'react'
import ReactDOM from 'react-dom'



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