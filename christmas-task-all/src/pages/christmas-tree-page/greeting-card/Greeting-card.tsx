import { url } from 'inspector';
import React from 'react';
import { useSelector } from 'react-redux';

import tree1 from '../../../assets/images/tree/1.png'
import tree2 from '../../../assets/images/tree/2.png'
import tree3 from '../../../assets/images/tree/3.png'
import tree4 from '../../../assets/images/tree/4.png'
import tree5 from '../../../assets/images/tree/5.png'
import tree6 from '../../../assets/images/tree/6.png'

import background1 from '../../../assets/images/bg/1.jpg'
import background2 from '../../../assets/images/bg/2.jpg'
import background3 from '../../../assets/images/bg/3.jpg'
import background4 from '../../../assets/images/bg/4.jpg'
import background5 from '../../../assets/images/bg/5.jpg'
import background6 from '../../../assets/images/bg/6.jpg'
import background7 from '../../../assets/images/bg/7.jpg'
import background8 from '../../../assets/images/bg/8.jpg'
import background9 from '../../../assets/images/bg/9.jpg'
import background10 from '../../../assets/images/bg/10.jpg'

import { appState } from '../../../common/types';
import './Greeting-card.scss';
import SnowFall from '../settings/snow/snow-fall/Snow-fall';

 function GreetingCard() {

  const { tree, background, garland, settings } = useSelector((state: appState) => state);

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

  function getUrlBackground(background: string) {
    switch (background) {
      case 'background-1': return background1;
      case 'background-2': return background2;
      case 'background-3': return background3;
      case 'background-4': return background4;
      case 'background-5': return background5;
      case 'background-6': return background6;
      case 'background-7': return background7;
      case 'background-8': return background8;
      case 'background-9': return background9;
      case 'background-10': return background10;
      default: return background1;
    }
  }

  const urlBackground = getUrlBackground(background);

  const ulList = new Array(20).fill("line");
  const listItems= new Array(24).fill("li-element"); 
  const colors = ["red", "yellow", "blue", "green"];  

  function getGarlandColor(garlandSelected: string) {
    switch (garlandSelected) {
      case 'garland-red': return 'red';
      case 'garland-green': return 'green';
      case 'garland-blue': return 'blue';
      case 'garland-yellow': return 'yellow';
      case 'garland-multicolor': return colors[(Math.floor(Math.random() * 4))];
      default: return 'off-light';
    }
  }

  const rot = 32;
  const angle = 5;
  const circleSize = 500;

  return (
    <div className='greeting-card'>    
      <div className='selected-background' style={{ backgroundImage: `url(${urlBackground})` }}>
        { settings.snow && <SnowFall/> }  
        <img className='selected-tree' src={urlTree} />

        <div className="light">
        { 
          ulList.map((ul, ulIndex) => 
            <ul className = {ul} style ={{ top: `${160 + -30 * ulIndex}px` }}>

            { (garland !== 'off-light') && listItems.map((li, index) => 
             <li 
                className = {(((index) >= (1 + ulIndex / 2)) && ((index) <= (22 - ulIndex / 2))) ? (getGarlandColor(garland)) : `off-light`} 
                style ={{ 
                animationDuration: `${Math.random() * 0.8 + 0.1}s`,
                animationIterationCount: `infinite`,
                animationName: `lightning`,                 
                transform: `rotate(${(rot  + angle * index) * 1}deg) translate(${circleSize / 2}px) rotate(${(rot  + angle * index) * -1}deg)`,

              }}
              />)}
              
            </ul>)
          }
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
