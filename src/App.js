import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamConatiner from './components/IceCreamConatiner';
import NewContainer from './components/NewContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamConatiner />
        <NewContainer />
      </div>
    </Provider>
  );
}

export default App;
