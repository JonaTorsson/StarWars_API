import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/helper'
import SwapiApi from "../services/SwapiApi"
import { Button, Card, Row, Col, Container} from "react-bootstrap"


const SingleCharacterPage = () => {
	const [films, setFilms] = useState([])
	const [character, setCharacter] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	const getCharacter = async (id) => {
		const data = await SwapiApi.getCharacter(id)
		setCharacter(data)
		setFilms(data.films)
		console.log(data);
	}

	useEffect(() => {
		getCharacter(id)
	}, [id])


	return (
		<>
			<Container className="mt-5 pt-4">
				<Row>
					<Card className="card">
						<Card.Header>{character.name}</Card.Header>
						<Card.Body>
							<Card.Title>Attributes</Card.Title>
							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Gender:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.gender}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Birth year:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.birth_year}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Height:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.height}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Mass:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.mass}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Hair color:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.hair_color}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Skin color:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.skin_color}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Eye color:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{character.eye_color}</Card.Text>
								</Col>
							</Row>
						</Card.Body>

						<Card.Body>
							<Card.Title>Links</Card.Title>
							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Films:</Card.Text>
								</Col>

								<Col md={8}>
									{films.map(films => (
									
										<Link 
										to={`/films/${getIdFromUrl(films)}`} 
										key={getIdFromUrl(films)}>
										<li>Film {getIdFromUrl(films)}</li>
										</Link>
										
									))} 
								</Col>
							</Row>

							<Button 
							variant="primary" 
							onClick={() => navigate(-1)}>
								Back
							</Button>
						</Card.Body>
					</Card>
				</Row>  
			</Container>
		</>
	)
}

export default SingleCharacterPage
