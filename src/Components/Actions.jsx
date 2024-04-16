export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(), 
      text,
      completed: false,
    },
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  