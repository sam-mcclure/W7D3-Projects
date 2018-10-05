import React from 'react';
import ReactDOM from 'react-dom';
import { receivePokemon, requestPokemon } from './actions/pokemon_actions';
import { fetchPokemon } from './util/api_util';
import createStore from './store/store';
// import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


const store = createStore();

window.receivePokemon = receivePokemon;
// window.fetchPokemon = fetchPokemon;
window.requestPokemon = requestPokemon;
// window.selectAllPokemon = selectAllPokemon;
window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
