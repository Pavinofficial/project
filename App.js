//import logo from './logo.svg';
import './App.css';
//import BasicTextFields from './form';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SignIn from './Permit PASS/signpage';
import BasicTabs from './Permit PASS/homepage';
import Home from './Permit PASS/Homepagetry2';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function Page()
{
  return(
    <>
      <Home />
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<BasicTabs />} />
      </Routes>
    </>
  )
}
export default Page;
