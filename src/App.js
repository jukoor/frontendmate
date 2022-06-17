import './App.css';
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'

function App() {

  return (
    <div className='app'>
			<Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
