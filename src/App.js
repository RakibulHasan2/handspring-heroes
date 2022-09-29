import './App.css';
import Activity from './components/Activity/Activity';
import Header from './components/Header/Header';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Activity></Activity>
    <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
