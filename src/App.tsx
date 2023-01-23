/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allocation from 'pages/Allocation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from 'styles/globalStyle';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Allocation />} path="/" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
