import './App.css';
function Banner(props){
  return <h1>{props.title}</h1>;
}
function Exhibit(props){
  return(
    <div className={'Exhibit Exhibit-' + props.color} height={props.height} width={props.width}>
      <h2>{props.heading}</h2>
      {props.children}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Banner title="Sextant Dashboard"/>
      <Exhibit color="blue"
                height="500px" 
                width="500px" 
                heading="Heading Title Goes Here">
        <p>Put Children Here</p>
      </Exhibit>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
