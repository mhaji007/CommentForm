
// Custom middleware syntax

// export default function ({dispatch}){
//     return function(next) {
//         return function (action) {

//         }
//     }
// }

// The above AND below are equally valid syntax

// export default ({dispatch}, next, action) => {

//}

// Custom middleware - refactored syntax
export default ({dispatch}) => next => action => {
    // Check to see if the action 
    // has a promise on its 'payload' propertyu
    // if it does, then wait fro it to resolve
    // if it does not, then send the action on
    // to the next middleware

    if(!action.payload || !action.payload.then) {
        return next(action);
        
    }

    // wait for the promise to resolve
    // get its data and then create a new action
    // with the data and dispatch it

    action.payload.then(function(response){
        const newAction = {...action, payload:response};
        dispatch(newAction);
    });

    



};

