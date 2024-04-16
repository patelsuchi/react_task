import React from 'react';

import { Provider } from 'react-redux';
import store from './Components/store';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskList/>
        <TaskInput/>
      </div>
    </Provider>
  );
}

export default App;
