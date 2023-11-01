import Footer from "./componets/Footer";
import Header from "./componets/Header";
import TodoList from "./componets/TodoList";


function App() {

  return (
    <>
      <Header />

      <main className="main">

        <TodoList />
        
      </main>
      <Footer />
    </>
  );
}

export default App
