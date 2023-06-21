import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


const App = () => {

  const pageSize = 7
  const country = 'in'
  const apiKey = '444fb2802e214c20b943d5b823f94846'


  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={ }

        />
        <NavBar />

        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category='entertainment' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='technology' />} />
        </Routes>

      </Router>
    </>
  )

}

export default App
