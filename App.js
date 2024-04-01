import React from 'react';
import './App.css';

import PostPage from './components/PostPage'; 



function App() {

  return (
    <div className="App">

      <header className="App-header">

        <h1>WELCOME</h1>

       

      </header>

      <main>

        <PostPage /> {/* Use the PostPage component here */}

      </main>

    </div>

  );

}



export default App;


