import { data } from '../data';

import MovieCard from './MovieCard';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
       <Navbar />
       <div className='main'>
        <div className='tabs'>
          <div className='tab'>MOVIES</div>
          <div className='tab'>FAVOURITES</div>
        </div>
        {data.map((movie)=>(
         <MovieCard movie={movie} />
        ))}
       </div>
    </div>
  );
}

export default App;
