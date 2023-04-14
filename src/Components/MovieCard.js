import React from "react";
import { addFavourite } from "../actions";
import { removeFavourite } from "../actions";
class MovieCard extends React.Component {
    render() {
        const {movie,isFavourite}=this.props;
        
        const handleFavourite=(movie)=>{
            const {store}=this.props;
           store.dispatch(addFavourite(movie));
        }
        const handleUnFavourite=(movie)=>{
            const {store}=this.props;
            store.dispatch(removeFavourite(movie));
           
        }
        return (
            <div className="movie-card">
               <div className="left">
                <img alt="movie-poster" src={movie.Poster} />
               </div>
               <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {isFavourite?(
                        <button className="unfavourite-btn" onClick={()=>handleUnFavourite(movie)}>UnFavourite</button>
                    ):(
                        <button className="favourite-btn" onClick={()=>handleFavourite(movie)}>Favourite</button>
                    )
                    }
                    
                </div>
               </div>
            </div>
        );
    }

}

export default MovieCard;

