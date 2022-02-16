import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary className="w-full h-screen grid content-center justify-items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
