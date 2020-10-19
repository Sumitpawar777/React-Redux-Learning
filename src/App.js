import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamConatiner from './components/IceCreamConatiner';
import NewContainer from './components/NewContainer';
import ItemConatiner from './components/ItemConatiner';
import UserConatiner from './components/UserConatiner';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserConatiner />
        <ItemConatiner cake />
        <ItemConatiner />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamConatiner />
        <NewContainer />
      </div>
    </Provider>
  );
}

export default App;
