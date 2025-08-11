import TodoHeader from './components/TodoHeader';
import TodoApp from './components/TodoApp';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState([]);

  const addTask = () => {
    // input태그에 입력한 문자열의 양긑 공백을 제거한 결과가 ''와 같으면 return
    if (input.trim() === '') return;
    setTasks([...tasks, input.trim()]);
    setInput('');
  }

  // 키보드 Enter 키로 입력하기
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (index) =>
    setTasks(tasks.map((_, i) => i !== index));

  return (
    <div className="App todo-container container">
      <TodoHeader />

      <div className="row g-2 align-items-stretch mb-4">
        <div className="col-sm-9 col-12">
          <input 
            type="text" 
            placeholder="할 일을 입력하세요" 
            className="form-control equal-height"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="col-sm-3 col-12 d-grid">
          <button
            className="btn btn-primary equal-width equal-height"
            onClick={addTask}>
              추가</button>
        </div>
      </div>

      <TodoApp tasks={tasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
