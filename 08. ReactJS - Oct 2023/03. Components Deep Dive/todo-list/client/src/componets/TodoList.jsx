import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import TodoItem from "./TodoItem";


export default function TodoList(params) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(responce => responce.json())
            .then(data => {

                const result = Object.values(data)
                setTodos(result)
            })
            .catch((Error) => console.log(Error));

    }, [])


    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">

                {/* <Spinner /> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {todos.map(todo => (
                            <TodoItem
                                key={todo._id}
                                _id={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted} />
                        ))}
                     

                    </tbody>
                </table>
            </div>
        </section>
    );
};