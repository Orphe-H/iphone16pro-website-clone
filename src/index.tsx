import { hydrate, prerender as ssr } from 'preact-iso';

import { Navbar } from './pages/home/sections/navbar';
import { Content } from './pages/home/sections/content';
import { Footer } from './pages/home/sections/footer';

import './assets/js/app.js';
import './assets/css/app.css';

export function App() {
	return (
		<>
			<Navbar/>
			<Content/>
			<Footer/>
		</>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
