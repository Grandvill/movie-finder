import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './starRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={10} color="green" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Reusable component */}
    {/* <StarRating maxRating={5} />
    <StarRating size={20} color="blue" messages={['terible', 'bad', 'okay', 'good', 'excellent']} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
