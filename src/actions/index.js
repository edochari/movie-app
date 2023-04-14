// {
//     type="ADD_MOVIES",
//     movies=[m1,m2,m3],
// }

export const ADD_MOVIES='ADD_MOVIES';

export function addMovies (movies) {
    return {
        type:'ADD_MOVIES',
        movies,
      }
}

export const ADD_FAVOURITES='ADD_FAVOURITES';

export function addFavourite (movie) {
    return {
        type:ADD_FAVOURITES,
        movie,
      }
}


export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';

export function removeFavourite (movie) {
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie,
      }
}


export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

export function setShowFavourites (val) {
    return {
        type:SET_SHOW_FAVOURITES,
        val,
      }
}