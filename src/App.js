import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import data from './tabs.json';


const App = () => {
  const [activeId, setActiveId] = useState(null);
  
  const handleLinkClick = (tabId) => {
    setActiveId(tabId);
  };

  return (
    <Router>
      <div className='app'>
        <div className='app-sidebar'>
        <ul className='app-table'>
          {data
            .sort((a, b) => a.order - b.order)
            .map((tab) => (
                <Link to={tab.id} key={tab.id}>
                  <li key={tab.id}
                      className={`active-link ${activeId === tab.id ? 'active' : ''}`}
                      onClick={() => handleLinkClick(tab.id)}>{tab.title}
                        </li>
                </Link>
            ))}
        </ul>
        </div>
        <div className='app-content'>
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
