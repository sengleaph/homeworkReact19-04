// import logo from './logo.svg';
import './App.css';
import { First } from './component/First';
import { ProductCollection } from './component/Products';
import SlideShow from './component/Profile';
import { Second } from './component/Second';
import { SetLoading } from './component/SkalatonUI';

function App() {
 return (
   <>
  
  <SlideShow/> 
  <First />
  <Second />
  <ProductCollection/> 
  {/* <WaitingData /> */}
  <SetLoading/>

   </>
   
  );
}
export default App;
