import './App.css';
import { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Layout from './components/layout/Layout';
function App() {
	const someValue = '';

	useEffect(() => {
		//   WILL EXECUTE ON EVERY CHANGE ON VALUES IN THE ARRAY
	}, [someValue]);

	return (
		<div className='App'>
			<Navigation />
			<Layout />
		</div>
	);
}

export default App;
