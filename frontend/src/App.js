import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container ">
      <Navbar />
      <main className='mt-3 py-20'>show</main>
      <footer className='fixed bottom-0 h-16 w-full flex justify-center items-center bg-indigo-600 text-white'>
        All right reserved</footer>
    </div>
  );
}

export default App;
