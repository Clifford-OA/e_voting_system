import CandidatesScreen from './Screens/CandidatesScreen';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import VotingCompletedScreen from './Screens/VotingCompletedScreen';

function App() {
  return (
    <Router>
      <div className="container ">
        <Navbar />
        <main className='mt-3 py-20'>
          <Routes>
            <Route path='/:id' element={<CandidatesScreen />}></Route>
            <Route path='/done' element={<VotingCompletedScreen />}></Route>
          </Routes>

        </main>
        <footer className='fixed bottom-0 h-16 w-full flex justify-center items-center bg-indigo-600 text-white'>
          All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
