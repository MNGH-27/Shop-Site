import React , {useReducer , createContext} from 'react';

const initialState = {
    selectedItem:[],
    numberItem:0,
    itemCounter:0,
    total:0,
    checkout:false
}

const sumItem = item => {
    const itemCounter = item.reduce((total , product) => total + product.quantity ,0);
    const total = item.reduce((total , product)=> total + (product.quantity * product.price),0).toFixed(2);
    return {itemCounter , total};
}

const cartReducer = (state , action) => {
    switch(action.type) {
        case "NEW_ITEM" : 
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return{
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem),
                checkout:false
            }
        case "DELETE_ITEM" : 
            const tempSelectedList = state.selectedItem.filter(item=>item.id !== action.payload.id);
            return{
                ...state,
                selectedItem : [...tempSelectedList],
                ...sumItem(tempSelectedList)
            }
        case "INCREASE_ITEM" : 
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return{
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem)
            }
        case "DECREASE_ITEM" : 
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;
            return{
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem)
            }
        case "CHECKOUT" : 
            return{
                selectedItem:[],
                numberItem:0,
                total:0,
                checkout:true
            }
        case "RESET" : 
            return {
                selectedItem:[],
                numberItem:0,
                total:0,
                itemCounter:0,
                checkout:false
            }
            
    }
}

export const CartContext = createContext();

const CartContextProvider = (props) => {
    
    const [state , dispatch] = useReducer(cartReducer , initialState);
    
    return (
        <CartContext.Provider value={{ state , dispatch }}>
            {
                props.children
            }
        </CartContext.Provider>
    );
};

export default CartContextProvider;