import { data } from '../data';
import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies } from '../actions';
import { setShowFavourites } from '../actions';
class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;
   
    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie);
    if(index !== -1)
    {
      return true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val));

  }

  render() {
    const {movies}=this.props.store.getState();
    const {list,favourites,showFavourites}=movies;
    console.log(this.props.store.getState());
    const displayMovies=showFavourites?favourites:list;
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={showFavourites?'':'active-tabs'} onClick={()=>this.onChangeTab(false)}>MOVIES</div>
            <div className={showFavourites?'active-tabs':''}  onClick={()=>this.onChangeTab(true)}>FAVOURITES</div>
          </div>
          <div className='list'>
            {displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={index} 
              isFavourite={this.isMovieFavourite(movie)}
              store={this.props.store} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
