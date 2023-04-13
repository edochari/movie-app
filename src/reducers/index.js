import { ADD_MOVIES } from "../actions";
import { ADD_FAVOURITES } from "../actions";
const movieInitialState={
    list:[],
    favourites:[]
}
export default function movies(state=movieInitialState,action){
    switch(action.type){
   case ADD_MOVIES:
        return {
            ...state,
            list:action.movies,
        };
    
    case ADD_FAVOURITES:
        return {
            ...state,
            favourites:[action.movie,...state.favourites]
        }
    
}
    return state;
}