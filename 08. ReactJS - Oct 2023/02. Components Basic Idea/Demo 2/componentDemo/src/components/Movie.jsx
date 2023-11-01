export default function Movie(props) {
    return (
        <li>
            <h3>{props.data.title}</h3>
            <p>{props.data.id}</p>
        </li>
    );
};