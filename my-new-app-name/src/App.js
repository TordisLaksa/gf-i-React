import './App.scss';
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'
import { Footer } from './components/partials/Footer/Footer'
import { Nav, navItems } from './components/partials/Nav/Nav'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav items={navItems} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
