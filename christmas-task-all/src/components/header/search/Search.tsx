import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { appState } from '../../../common/types';
import { searchCards, searchClear } from '../../../redux/actions';
import './Search.scss';

function Search() {
  
  const { search } = useSelector((state: appState) => state);

  console.log('3', search); // TO DELETE

  const isActiveCloseSearch = ((search) && (search.length)) ? 'active' : '';
  
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