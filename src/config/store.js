import {createStore,combineReducers} from 'redux'
import cartReducer from '../features/cart/reducer'

const rootReducer = combineReducers({
    cart:cartReducer

})


const store = createStore(

    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& Window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store