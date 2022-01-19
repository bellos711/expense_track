//Reducer is a function that takes in the OLD state, and an action and returns a NEW State


const contextReducer = (state, action) => {


    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            //filter out the array where show everything except the item with id specified
            transactions = state.filter((transaction) => transaction.id !== action.payload); //since dispatch on context.js the payload is the id

            return transactions;
            //break; unreachable
        case 'ADD_TRANSACTION':
            //create new array. our action.payload for ADD_TRANSACTION is the whole tansaction and we can ...spread it to the other transactions
            transactions = [action.payload, ...state]
            return transactions
            //break; unreachable
    
        default:
            return state;
    }
}

export default contextReducer;