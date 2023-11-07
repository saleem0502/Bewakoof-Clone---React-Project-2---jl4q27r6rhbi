import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import reducer, { initialState } from "../src/Utils/reducer.js";
import { StateProvider } from './Utils/StateProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  
)
