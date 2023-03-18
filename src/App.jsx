import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Program from './components/Program';
import Message from './components/Message';

function App() {
	return (
		<div className='text-light bg-dark min-h-screen'>
			<Navbar />
			<Carousel />
			<About />
			<Program />
			<Menu />
			<Message />
			<Footer />
		</div>
	);
}

export default App;
