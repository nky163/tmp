import React, {FormEvent, useState} from 'react'

const App = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskArray((preTaskArray) => [{content: inputValue}, ...preTaskArray]);
    setInputValue('');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-input">TODO</label>
        <input
          id="task-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
      {taskArray.length === 0 ? (
        <div>Empty</div>
      ) : (
        taskArray.map((task, i) => (
          <div key={i}>{task.content}</div>
        ))
      )}
    </div>
  );
};

export default App;