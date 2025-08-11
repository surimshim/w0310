const TodoApp = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.map((task, index) =>
                <li className="d-flex justify-content-between align-items-center p-2 border rounded mb-1"
                    key={index}>
                    <span>{task}</span>
                    <button 
                        className="btn btn-danger btn-sm equal-width equal-height"
                        onClick={() => onDelete(index)}>
                            삭제</button>
                </li>
            )}
        </ul>
    )
}

export default TodoApp