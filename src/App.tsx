import { Results } from './features/cities';
import { SortForm } from './features/sort-form';
import { Map } from './features/map'

function App() { 
  return (
    <section className="weather-app">
      <h1 className="visually-hidden">Прогноз погоды</h1>
      <div className="weather-app__content weather-content">
        <SortForm />
        <Results />
      </div>
      <div className="weather-app__map">
        <Map />
      </div>
    </section>
  );
}

export default App;
