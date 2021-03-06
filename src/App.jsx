import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage"
import Films from "./pages/Films"
import Characters from "./pages/Characters"
import SingleFilmPage from "./pages/SingleFilmPage"
import SingleCharacterPage from "./pages/SingleCharacterPage"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
	<div className="App">
		<Navigation />

		<Routes>
			<Route path="/" element	={< HomePage />} />
			<Route path="/films" element	={< Films />} />
			<Route path="/people" element	={< Characters />} />
			<Route path="/films/:id" element	={< SingleFilmPage />} />
			<Route path="/people/:id" element	={< SingleCharacterPage />} />
		</Routes>
	</div>
  );
}

export default App;
