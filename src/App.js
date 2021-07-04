import React from 'react';
import './App.css';
import Random from './components/RandomGif';
import Tag from './components/searchGif';

const App = () => (
    <div>
        <h1>GIF Application</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
        <p>Copyright © 2021 All Rights Reserved by Shahinur Alam Bhuiyan.</p>
    </div>
);
export default App;