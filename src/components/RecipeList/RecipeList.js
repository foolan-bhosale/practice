import React from 'react';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
function RecipeList(props) {
    return (
        <div>
            <Container>
                <Row>
                    {props.recipes.map((recipe) => (
                        <Col sm={true} key={recipe.strMeal} className='mb-3'>
                            <Card style={{width: '18rem'}} className='text-center'>
                                <Card.Img variant='top' src={recipe.strMealThumb} alt={recipe.strMeal} />
                                <Card.Body>
                                    <Card.Title>{recipe.strMeal}</Card.Title>
                                    <Card.Text>
                                        Cuisine:<strong className='strong-text'>{recipe.strArea}</strong>{' '}
                                    </Card.Text>

                                    <Link to={`/recipes/${recipe.idMeal}`} className='btn btn-primary'>
                                        View Recipe Details
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default RecipeList;
