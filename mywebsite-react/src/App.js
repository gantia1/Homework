import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';


function App() {
  return (
    <div>

      <div>
        <Header  title={'My Website!'} />
      </div >
      <Main />
      <Footer text={'©Foobar Inc.'} />
    </div>
  )
}

export default App;
