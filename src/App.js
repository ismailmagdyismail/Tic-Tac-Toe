import Board from "./Board";
import "./style.css";
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <div className="app">
        <h1 className="title">Tic-Tac-Toe in <span> ReactJs </span></h1>
        <Board />
        <Toaster
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
                success: {
                    duration: 3000,
                },
                style: {
                    fontSize: "1.8rem",
                    maxWidth: "500px",
                    padding: "2.4rem",
                    backgroundColor: "white",
                    color: "black",
                },
            }}/>
    </div>
  );
}

export default App;
