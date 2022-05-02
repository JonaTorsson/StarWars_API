import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
	return (

		<div>
			<h1 className="header">May The Force Be Yith You</h1>

			<div className="btns">
					<Button 
						className="btn" 
						as={Link} 
						to="/people">
						Characters
					</Button>
					<Button 
						className="btn mt-3 p-2" 
						as={Link} 
						to="/films">
						Films
					</Button>
			</div>
		</div>
	)
}

export default HomePage