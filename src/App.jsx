import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReviewedProducts } from './components/ReviewedProducts';
import { ChooseAuto } from './components/ChooseAuto';

function App() {
	return (
		<div>
			<Header />
			<ChooseAuto />
			<Home />
			<ReviewedProducts />
			<Footer />
		</div>
	);
}

export default App;
