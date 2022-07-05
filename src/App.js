import React, { useCallback } from 'react';
import './App.css';
import Header from './components/header';
import ProjectList from './components/projectList';
import TostAlert from './components/tostAlert';

function App() {
  const TopHeader = useCallback(() => <Header />, []);
  const ListProject = useCallback(() => <ProjectList />, []);
  const Toster = useCallback(() => <TostAlert />, []);

  return (
    <div className="App">
      <TopHeader />
      <ListProject />
      <Toster />
    </div>
  );
}

export default App;
