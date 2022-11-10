import React, { Suspense, useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Users } from './Users';
import { Books } from './Books';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const baseUrl = 'https://5fd60a9066125e0016500b6c.mockapi.io/';
function App() {
  const requestOne = axios.get(`${baseUrl}/books`);
  const requestTwo = axios.get(`${baseUrl}/users`);

  const [users, setusers] = useState([]);
  const [books, setbooks] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get([requestOne])
      .then(
        axios.spread((...responses) => {
          setbooks(responses[0].data);
          setusers(responses[1].data);
        })
      )
      .catch((errors) => {
        console.log(errors);
        // react on errors.
      });
  }, [requestOne]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <ul>
              <li>
                <Link to='/'>Books</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index path='/' element={<Books props={books} />} />
            <Route
              path='users'
              element={
                <React.Suspense fallback={<>...</>}>{<Users props={users} />}</React.Suspense>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
