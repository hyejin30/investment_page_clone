import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/globalStyle';

import Allocation from 'pages/Allocation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<Allocation />} path="/" />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
