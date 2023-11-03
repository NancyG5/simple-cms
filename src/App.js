import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import data from './tabs.json';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <ul className='app-table'>
          {data
            .sort((a, b) => a.order - b.order)
            .map((tab) => (
                <Link to={tab.id}>
                  <li key={tab.id}>{tab.title}</li>
                </Link>
            ))}
        </ul>
        <div className='content'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {data.map((tab) => {
              const TabComponent = React.lazy(() => import(`${tab.path}`));
              return (
                <Route
                  key={tab.id}
                  path={`/${tab.id}`}
                  element={<TabComponent />}
                />
              );
            })}
            <Route index element={<Navigate to={`/${data[0].id}`} />} />
          </Routes>
        </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
