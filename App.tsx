import React from 'react';

import Routes from './src/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
