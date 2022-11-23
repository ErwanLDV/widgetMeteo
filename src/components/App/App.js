import Widget from '../widget/index'
import './App.scss';

function App() {  
  return (
    <div className="App">
      <Widget city="creteil" zipcode="94000" />
      <Widget city="paris" zipcode="75001" />
      <Widget city="evreux" zipcode="27000" />
    </div>
  );
}

export default App;
