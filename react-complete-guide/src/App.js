import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance', 
      amount: 500, 
      date: new Date(2022, 10, 3)
    },
    { 
      id: 'e2',
      title: 'Bike Insurance', 
      amount: 100, 
      date: new Date(2022, 10, 3)
    },
    { 
      id: 'e3',
      title: 'House Rent', 
      amount: 3000, 
      date: new Date(2022, 10, 3)
    },
    { 
      id: 'e4',
      title: 'Electricity Bill', 
      amount: 300, 
      date: new Date(2022, 10, 3)
    }
  ]
  return (
    <>
      <Expenses items={expenses}/>

    </>
  );
}

export default App;
