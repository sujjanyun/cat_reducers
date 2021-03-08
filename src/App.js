import { Provider } from 'react-redux';
import { store } from './redux/store';
import Activity from './components/Activity';
import Eat from './components/Eat';
import Nap from './components/Nap';
import Play from './components/Play';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>The Cat Reducer!!</h2>
        <Activity/>
        <Eat/>
        <Nap/>
        <Play/>
      </div>
    </Provider>
  );
}

export default App;
