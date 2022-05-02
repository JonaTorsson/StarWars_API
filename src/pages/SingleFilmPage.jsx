import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/helper'
import SwapiApi from "../services/SwapiApi"
import { Button, Card, Row, Col, Container, Spinner} from "react-bootstrap"

const SingleFilmPage = () => {
	const [film, setFilm] = useState([])
	const [characters, setCharacters] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()
	const [loading, setLoadning] =useState(false)

	

	useEffect(() => {
		const getFilm = async (id) => {
			setLoadning(true)
			const data = await SwapiApi.getFilm(id)
			setFilm(data)
			setCharacters(data.characters)
			setLoadning(false)
		}
		getFilm(id)
	}, [id])

	return (
		<>
			
			<Container className="mt-5 pt-4">
				{loading && <Spinner animation="border" variant="danger" />}
				<Row>
					
					<Card className="card">
						<Card.Header>{film.title}</Card.Header>
						<Card.Body>
							<Card.Title>Attributes</Card.Title>
							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Episode:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{film.episode_id}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Director:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{film.director}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Producer:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{film.producer}</Card.Text>
								</Col>
							</Row>

							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Release date:</Card.Text>
								</Col>
								<Col md={8}>
									<Card.Text>{film.release_date}</Card.Text>
								</Col>
							</Row>
						</Card.Body>

						<Card.Body>
							<Card.Title>Links</Card.Title>
							<Row className="mb-3">
								<Col md={4}>
									<Card.Text>Characters:</Card.Text>
								</Col>

								<Col md={8}>
									{characters.map(character => (
									
										<Link 
										to={`/people/${getIdFromUrl(character)}`} 
										key={character}>
											<li>Character {getIdFromUrl(character)}</li>
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

export default SingleFilmPage
