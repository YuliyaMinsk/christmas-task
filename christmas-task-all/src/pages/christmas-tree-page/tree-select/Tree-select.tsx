import React from 'react';
import { useDispatch } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { selectTree } from '../../../redux/actions';
import './Tree-select.scss';

 function TreeSelect() {

  const dispatch = useDispatch();
  return (
    <div className='tree-select'>      
      <h3>{Constants.SELECT_TREE}</h3>
      <div className='tree-box'> 
        <button className='background-tree tree-1' onClick={() => dispatch(selectTree('tree-1'))}></button>
        <button className='background-tree tree-2' onClick={() => dispatch(selectTree('tree-2'))}></button>
        <button className='background-tree tree-3' onClick={() => dispatch(selectTree('tree-3'))}></button>
        <button className='background-tree tree-4' onClick={() => dispatch(selectTree('tree-4'))}></button>
        <button className='background-tree tree-5' onClick={() => dispatch(selectTree('tree-5'))}></button>
        <button className='background-tree tree-6' onClick={() => dispatch(selectTree('tree-6'))}></button>
      </div>
    </div>
  );
}

export default TreeSelect;