import React, { Suspense } from 'react';
import './main.min.css';
const CardsContainer = React.lazy(() => import('./components/CardsContainer'));

const App = () => {
    return (
      <div className="App">
        <Suspense fallback={<h1>Loading Data...</h1>}>
          <CardsContainer/>
        </Suspense>
      </div>
    );
}

export default App;
