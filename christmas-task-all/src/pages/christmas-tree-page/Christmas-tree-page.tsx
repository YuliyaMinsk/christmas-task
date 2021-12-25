import React from 'react';

import Settings from './settings/Settings';
import TreeSelect from './tree-select/Tree-select';
import BackgroundSelect from './background-select/Backgroung-select';
import GarlandSelect from './garland-select/Garland-select';
import GreetingCard from './greeting-card/Greeting-card';
import ToySelect from './toy-select/Toy-select';
import HistoryCards from './history-cards/History-cards';
import "./Christmas-tree-page.scss";

 function ChristmasTreePage() {
  return (
    <main className="christmas-tree-main">
      <div className="christmas-tree-main-container">
        <div className='left-side'>    
          <Settings />  
          <TreeSelect />
          <BackgroundSelect />
          <GarlandSelect />        
        </div>
        <div className='main-side'>
          <GreetingCard />
        </div>
        <div className='right-side'>
          <ToySelect />
          <HistoryCards />
        </div>
      </div>
    </main>
  );
}

export default ChristmasTreePage;