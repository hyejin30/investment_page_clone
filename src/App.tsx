import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allocation from 'pages/Allocation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Allocation />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
