import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Constants } from '../../../abstract/Constants';
import { searchCards, searchClear } from '../../../redux/actions';
import { appState } from '../../../redux/reducers';
import './Search.scss';


function Search() {

  const { search } = useSelector((state: appState) => state);

  const isActiveCloseSearch = (search.length) ? 'active' : '';
  
  const dispatch = useDispatch();

  return (
    <div>
    <input type = "text"
      className = "search-input"
      autoComplete = "off"
      autoFocus
      placeholder = {Constants.MENU_SEARCH} 
      value = {search}
      onChange = {(e) => dispatch(searchCards(e.target.value))}
    />
    <span className={"clear-search " + isActiveCloseSearch} onClick={() => dispatch(searchClear())}>&times;</span>
    </div>
  );
}

export default Search;