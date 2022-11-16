import React, { Suspense } from 'react';
import './App.css';
import { Products } from './Books';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <nav>
            <ul>
              <li>
                <Link to='/'>Books</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav> */}
          {/* <Routes>
            <Route index path='/' element={<Books  />} />
            <Route
              path='users'
              element={
                <React.Suspense fallback={<>...</>}>{<Users props={users} />}</React.Suspense>
              }
            />

          </Routes> */}
          <Products />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
