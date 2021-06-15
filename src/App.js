import logo from './logo.svg';
import './App.css';
import computer from './computer.png';
import desktop from './desktop.png';
import ihLogo from './ihLogo.svg';
import reactLogo from './reactLogo.svg';
import terminal from './terminal.png';
import wranch from './wranch.png';

const title = <h1>Say hello to ReactJS</h1>
const subtitle = <h4>You will learn how to use the most popular frontend library and become a super ninja developer</h4>

function App() {
  return (
    <div className="App">
      <div>
      <main>
        <nav>
          <img src={ihLogo} alt= "ihLogo"/>
        </nav>
        <div class="title_container">
        <h1 className="title">    
        {title}
        </h1>
        </div>
        <div class="subtitle_container">
      <h4 className = "subtitle">{subtitle}</h4>
      </div>
      <button><a href="https://create-react-app.dev/docs/getting-started/">Awesome!</a></button>
      </main>
      <footer>
      <div className="features">
      <img src={wranch} alt="wranch" />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="features">
      <img src={computer} alt="computer" />
      <h3>Components</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="features">
      <img src={desktop} alt="desktop" />
      <h3>Single-Way</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="features">
      <img src={terminal} alt="terminal" />
      <h3>JSX</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
