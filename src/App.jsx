import "./App.css";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import BooksFilter from "./components/BooksFilter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <BooksFilter />
            <Books />
          </div>
          <div>
            <AddBook />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
