import { useState, useEffect } from "react"
import SwapiApi from "../services/SwapiApi"
import { Card, Row, Col, ListGroup, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getIdFromUrl } from "../helpers/helper"

const Characters = () => {
	const [characters, setCharacters] = useState("")
	const [page, setPage] = useState(1)
	const [loading, setLoadning] =useState(false)

	useEffect(() => {
		const getCharacters = async (page) => {
			setLoadning(true)
		const data = await SwapiApi.getCharacters(page)
		setCharacters(data)
		setLoadning(false)
	}
		getCharacters(page)
	}, [page])
	return (
		<>
			<Container>
				<h1 className="text-center mt-3 mb-3">Films</h1>

				<Row xs={1} md={2} lg={3}>

					{loading && <p>Loading......</p>}

					{characters && characters.results.map((person, index) => (
						<Col key={index}>
							<Card className="mb-4"> 
								<Card.Header > {person.name} </Card.Header>
								<ListGroup>
									<ListGroup.Item>
										Gender: {person.gender}
									</ListGroup.Item>
									<ListGroup.Item>
										Born: {person.birth_year}
									</ListGroup.Item>
									<ListGroup.Item>
										In: {person.films.length} movies
									</ListGroup.Item>
								</ListGroup>

								<Card.Body>
									<Button 
										className="btn" 
										as={Link} 
										to={`/people/${getIdFromUrl(person.url)}`}>
											Read more
									</Button>
								</Card.Body>
							</Card>
							
						</Col>
					))}
				</Row>
				<div className="d-flex justify-content-between align-items-center mt-4">
					<div className="prev">
						<Button
							disabled={!characters.previous}
							onClick={() => setPage(prevValue => prevValue - 1)}
							variant="primary"
						>Previous Page</Button>
					</div>
					<div className="page">{page}</div>
					<div className="next">
						<Button
							disabled={!characters.next}
                            onClick={() => setPage(prevValue => prevValue + 1)}
                            variant="primary"
						>Next Page</Button>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Characters
