import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (

		<Container>
			<h1>HomePage</h1>

			<div className="btns">
					<p>text text text</p>
					<Button 
						className="btn" 
						as={Link} 
						to="/characters">
						Characters
					</Button>
					<Button 
						className="btn" 
						as={Link} 
						to="/films">
						Films
					</Button>
			</div>
		</Container>
	)
}

export default HomePage