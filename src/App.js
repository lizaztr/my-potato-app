import React, { useState } from 'react';
import './App.css';
import CustomButton from './CustomButton';
import NewPage from './NewPage';
import ShoppingList from './ShoppingList';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <nav className="App-nav">
        <CustomButton onClick={() => setActiveTab('home')} label="Home" className={activeTab === 'home' ? 'active' : ''} />
        <CustomButton onClick={() => setActiveTab('newpage')} label="Potato" className={activeTab === 'newpage' ? 'active' : ''} />
        <CustomButton onClick={() => setActiveTab('shoppinglist')} label="Shop Potatoes" className={activeTab === 'shoppinglist' ? 'active' : ''} />
      </nav>
      <div className="tab-content">
        {activeTab === 'home' && (
          <div className="tab-pane active">
            <header className="App-header">
              <h1>Welcome to the Potato Page!</h1>
              <img src={`${process.env.PUBLIC_URL}/images/potato_cute.jpg`} alt="Potatoes with faces" className="potato-image" />
              <h2>Get those potatoes!</h2>
              <CustomButton onClick={() => setActiveTab('newpage')} label="Go to Potato" />
            </header>
          </div>
        )}
        {activeTab === 'newpage' && (
          <div className="tab-pane active">
            <NewPage />
          </div>
        )}
        {activeTab === 'shoppinglist' && (
          <div className="tab-pane active">
            <ShoppingList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
