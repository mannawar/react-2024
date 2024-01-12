import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Cat} from './pages/Cat';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  })


  return (
    <>
      <div className='App'>
        لا إله إلا الله محمد رسول الله
        <QueryClientProvider client={client}>
          <Cat />
        </QueryClientProvider>

      </div>
    </>
  );
}

export default App;
