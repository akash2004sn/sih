import React from 'react'
import './Borderbody.css'
const Borderbody = () => {
  return (
    <div className="table-container">
    <table className="interactive-table">
      <thead>
        <tr>
          <th>Pole No</th>
          <th>Live Wire(A)</th>
          <th>Neutral Wire(A)</th>
          <th>Leakage Detected</th>
          <th>Earth Detected</th>
          <th>Switch(Y/N)</th>
          <th>Ground Pit(A)</th>
          
        </tr>
       
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>10</td>
          <td>9.99</td>
          <td>NO</td>
          <td>NO</td>
          <td>Y</td>
          <td>Null</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10</td>
          <td>9.93</td>
          <td>YES</td>
          <td>NO</td>
          <td>Y</td>
          <td>Null</td>
        </tr>
        <tr>
          <td>3</td>
          <td>12</td>
          <td>9</td>
          <td>YES</td>
          <td>YES</td>
          <td>N</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>13</td>
          <td>10</td>
          <td>YES</td>
          <td>YES</td>
          <td>N</td>
          <td>3</td>
        </tr>
       
      </tbody>
    </table>
  </div>
  )
}
export default Borderbody;
