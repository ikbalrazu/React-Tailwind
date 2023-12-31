import './App.css';
import './tailwind.css';

function App() {
  return (
    <div className="wrapper">
      <nav>
        <div className='logo'>Tailwind</div>
        <ul>
          <li>Install</li>
          <li>Docs</li>
        </ul>
      </nav>
      <div className='hero sm:bg-orange-500 md:bg-sky-500 lg:bg-blue-100 xl:bg-slate-500 2xl:bg-red-300'>
        <h1 className='header'>
          Tailwind CSS makes styling React component easier!
        </h1>
        <button className='bg-[#0ea5e9] text-white font-bold p-1.5 mt-10 w-fit rounded-md hover:bg-sky-700'>Get Started</button>
        {/* using @apply */}
        <button className='btn'>Get Started</button> 
      </div>
    </div>
  );
}

export default App;
