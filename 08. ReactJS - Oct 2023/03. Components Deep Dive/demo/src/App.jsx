import './App.css'

function App() {

    let numbers = [1, 2, 3, 4, 5]
    const list = numbers.map((el) => <li>{el}</li>)

    return (
        <div>
            {list}
        </div>
    )
}

export default App
