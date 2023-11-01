export default function TodoItem({_id, text, isCompleted }) {

    const onChangeStatusClick=()=>{

    }

    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
};