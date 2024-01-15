import axios from 'axios';
import useSWR from 'swr';
import { apiKey } from './const';
import './App.css';

function App() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error, isLoading } = useSWR(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2024-01-14`, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>Astronomy Picture of the Day（個人開発用）</h1>
      </header>
      <main className="App-main">
        <div className="App-image">
          <img src={data.url} alt="" width="400" />
        </div>
        <section className="App-body">
          <h2 className="App-title">{data.title}</h2>
          <p className="App-date">{data.date}</p>
          <p className="App-explanation">{data.explanation}</p>
          {data.copyright && <p className="App-copyright">Image Credit & Copyright: {data.copyright}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
