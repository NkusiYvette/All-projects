import "./App.css";

import * as React from "react";
import { useTable } from "react-table";

function App() {
 
      
  return (
    
      <div className="container">
        <table>
          <thead>
            <td>Date</td>
            <td>Time</td>
            <td>Item name</td>
          </thead>
        <tbody>
        <tr>
        <input type="date" placeholder='date' />
        </tr>
        <tr>
        <input type="time" placeholder="2am/pm" />
        </tr>
        <tr>
        <input type="text" placeholder="laptop" />
        </tr>
        </tbody>
        </table>
      </div>         
    
  );
}

export default App;