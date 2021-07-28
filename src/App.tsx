import './App.css';
import { FC } from 'react'
import HelloWorld from './components/HelloWorld'
import List from './components/List'

const employee = [
  'Kishore Devalla',
  'Sai Prasanna',
  'Dinup',
  'Raghavendra',
  
]

const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <List data={employee} />
    </div>
  );
}

export default App;