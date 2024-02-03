import { Routes, Route, Link} from 'react-router-dom';

import Homepage from './assets/page/Homepage.jsx';
import Profilepage from './assets/page/Profilepage.jsx';
import Shoppage from './assets/page/Shoppage.jsx';

function App(){
  return(
    <>
    
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/shop" element={<Shoppage/>} />
        <Route path="/profile" element={<Profilepage username={"Adios"} auth={true}/>}/>
      </Routes>
    </>

  );
}
export default App;