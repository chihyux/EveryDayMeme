import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('meme', () =>
    fetch('https://meme-api.herokuapp.com/gimme').then((res) => res.json())
  );

  if (isLoading)
    return (
      <div class='loading-cover'>
        <div class='loading-spinner'></div>
      </div>
    );
  if (error) return 'An error has occurred: ' + error.message;
  if (data) {
    return (
      <div className='meme-container'>
        <h1>Every Day Meme</h1>
        <img src={data.url} alt={data.title} className='meme' />
        <span>
          Author: {data.author} from <a href={data.postLink}>reddit</a>
        </span>
      </div>
    );
  }
}

export default App;
