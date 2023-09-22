import logo from './logo.svg';
import './App.css';
import './index.css';

const SlotM = (props) =>
{
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if((x===y)&&(x===z))
  {
    return(
      <>
        <div className='slot_in'>
          <h1>
            {" "}
            {x} {y} {z}
          </h1>
          <h1>This is matching</h1>
        </div>
      </>
    )
  }
  else
  {
    return(
      <>
        <div className='slot_in'>
          <h1>
            {" "}
            {x} {y} {z}
          </h1>
          <h1>This is Not matching</h1>
        </div>
      </>
    )

  }
}

const App = () =>
{
  return <>
    
    <h1 className='heading'> 🎰 Welcome to <span className='head'>SLOT Machine 🎰</span></h1>

    <div className='slot_machine'>
      <hr/>
      <SlotM x="😀" y="😀" z="😀"/>
      <hr/>
      <SlotM x="😀" y="😁" z="🤩"/>
      <hr/>
      <SlotM x="🥶" y="🤯" z="😭"/>
      <hr/>
    </div>
    </>
}
export default App;
