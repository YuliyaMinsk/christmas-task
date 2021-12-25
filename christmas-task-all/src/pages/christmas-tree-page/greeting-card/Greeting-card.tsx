import React from 'react';
import { useSelector } from 'react-redux';

import tree1 from '../../../assets/images/tree/1.png'
import tree2 from '../../../assets/images/tree/2.png'
import tree3 from '../../../assets/images/tree/3.png'
import tree4 from '../../../assets/images/tree/4.png'
import tree5 from '../../../assets/images/tree/5.png'
import tree6 from '../../../assets/images/tree/6.png'
import { appState } from '../../../common/types';
import './Greeting-card.scss';

 function GreetingCard() {

  const { tree } = useSelector((state: appState) => state);

  function getUrlTree(tree: string) {
    switch (tree) {
      case 'tree-1': return tree1;
      case 'tree-2': return tree2;
      case 'tree-3': return tree3;
      case 'tree-4': return tree4;
      case 'tree-5': return tree5;
      case 'tree-6': return tree6;
      default: return tree1;
    }
  }

  const urlTree = getUrlTree(tree);

  return (
    <div className='greeting-card'>      
      <div className='selected-background'>
        <img className='selected-tree' src={urlTree} />
      </div>
    </div>
  );
}

export default GreetingCard;