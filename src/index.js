import React from 'react';
import ReactDOM from 'react-dom';

import SearchBaR from './Components/SearchBar';

const API_KEY = 'AIzaSyCHDn5oUmXq0GydT2zWuzzqrNOcgDv0WtI';
 
const App = () => {
    
    return(
    <div>
        <SearchBaR/>
    </div>);
}

ReactDOM.render(<App/>, document.querySelector('.app'));