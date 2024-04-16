import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './Actions';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    if (text.trim() !== '') {
      dispatch(addTask(text));
      setText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
