import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { appState } from '../../../common/types';
import { searchCards, searchClear } from '../../../redux/actions';
import './Search.scss';

function Search() {
  
  const { search } = useSelector((state: appState) => state);

  const classesCloseSearch = ((search) && (search.length)) ? 'clear-search active' : 'clear-search';
  
  const dispatch = useDispatch();

  return (
    <div>
    <input type = "text"
      className = "search-input"
      autoComplete = "off"
      autoFocus
      placeholder = {Constants.MENU_SEARCH} 
      value = {search}
      onChange = {(event) => dispatch(searchCards(event.target.value))}
    />
    <span className={classesCloseSearch} onClick={() => dispatch(searchClear())}>&times;</span>
    </div>
  );
}

export default Search;
