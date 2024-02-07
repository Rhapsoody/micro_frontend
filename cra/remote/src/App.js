import LocalButton from './Button';
import Header from '../../sharedComponent/src/header'
import Card from './components/card'

const App = () => (
  <div>
    <Header name="Remote"/>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <Card userName="John"/>
    <LocalButton />
  </div>
);

export default App;
