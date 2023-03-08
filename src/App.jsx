import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Description from './components/Description';
import Message from './components/Message';

function App() {
	return (
		<div className='text-dark bg-light min-h-screen'>
			<Navbar />
			<Carousel />
			<About />
			<Description />
			<Menu />
			<Message />
			<Footer />
		</div>
	);
}

export default App;
