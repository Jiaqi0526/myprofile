import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      {/* navbar-header-fixed on the top */}
      <Navbar />
      {/* oppcupy aera to avoid content below not be blocked by navbar */}
      <div style={{ height: '71px' }}></div>
      
    </div>
  );
}

export default App;
