
import Child from './chiled'
import './App.css'
// import { useEffect } from 'react';
// import axios from 'axios';
import IndexRouter from './router/index'
function App() {
  // useEffect(() => {
  //   axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4').then(res => {
  //     console.log('res',res)
  //   })
    
  // },[])
  return <div>
    {/* <ul>
      <li>1111</li>
      <li>2222</li>
      </ul>
    <Child/> */}
    {/* app */}
    <IndexRouter/>
  </div>
}

export default App;
