
function TodoList() {

const TodoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]
return (
    <div>
        <h1>My Todos</h1>
        <ul>
            {TodoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </div>
  );
}

export default TodoList;