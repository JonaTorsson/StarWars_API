import SwapiAPI from '../services/SwapiApi'
import { useState, useEffect } from 'react'
import { Button, Row, Card, Col, ListGroup, Container, Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Films = () => {
	const [films, setFilms] = useState("")
	const [loading, setLoadning] =useState(false)


	const getFilms = async () => {
		setLoadning(true)
		const data = await SwapiAPI.getFilms()
		setFilms(data)
		setLoadning(false)
	}

	useEffect(() => {
		getFilms()
	}, [])

	return (
		<>
			<Container>
				<h1 className="text-center mt-3 mb-3">Films</h1>
				
				<Row xs={1} md={2} lg={3}>
					{loading && <Spinner animation="border" variant="danger" />}
					{films && films.results.map((films, index) => (
						<Col key={index}>
							<Card className="mb-4"> 
								<Card.Header > {films.title} </Card.Header>
								<ListGroup>
									<ListGroup.Item>
										Episode: {films.episode_id}
									</ListGroup.Item>
									<ListGroup.Item>
										Release Date: {films.release_date}
									</ListGroup.Item>
								</ListGroup>

								<Card.Body>
									<Button 
										className="btn" 
										as={Link} 
										to={`/films/${films.episode_id}`}>
											Read more
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default Films
