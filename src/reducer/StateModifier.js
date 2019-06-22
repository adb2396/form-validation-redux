import * as ActionTypes from '../actionType/actionTypes';

const reducer = (state = [], action) => {
    //console.log( 'action', action );
    switch(action.type) {
        case ActionTypes.ADD_USER: 
            if( EmailVaidator(state, action.user) ) {
                return [ ...state, action.user];
            }
            else {
                alert("Duplicate Email..!!");
                return state;
            }
        case ActionTypes.DELETE_USER: 
            //console.log( DeleteUsers( state, action.delUsers ) );
            return DeleteUsers( state, action.delUsers );
        default: 
            return state;
    }
}

const EmailVaidator = (state, user) => {
    //console.log( state, user );
    if( state.length === 0 )
        return true;
    else {
        let p = 0;
        state.forEach( u => {
            if( u.email === user.email ){
                p = 1;
            }
        });
    
        if( p === 1) 
            return false;
        else return true;
    }
}

const DeleteUsers = (state, delUsers) => {

    let newArr = [...state];
    //console.log( delUsers );

    for (let i = 0; i < delUsers.length; i++) {
        let mail = delUsers[i];
       // console.log(mail);
        for( let j=0; j< newArr.length; j++ ) {
            if( mail === newArr[j].email ) {
                newArr.splice(j, 1);
            }
        }
    }
    //console.log(newArr);

    return newArr;
}

export default reducer;