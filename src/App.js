//import logo from './logo.svg';
import './App.css';
import classprop from './components/classprop';

function App() {
  return (
    <div className="App">
      <classprop lastname="kone" firstname="Akira" age={25} haircolor="brown"/>
      <classprop lastname="test" age={ 67 }/>
    </div>
  );
}

export default App;
