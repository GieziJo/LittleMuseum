import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Button
  } from 'reactstrap';

import { Link } from 'react-router-dom'

import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';

import PropTypes from 'prop-types';

class Museum extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return(
            <CardColumns>
                {items.map(item => (
                    // <Link to={`/items/${item.id}`}>
                        <Card hoverable>
                            {item.image_url && <CardImg top width="100%" src={item.image_url} alt="Card image cap" />}
                            <CardBody>
                                <CardTitle tag="h5">{item.title}</CardTitle>
                                {item.artist && <CardSubtitle tag="h6" className="mb-2 text-muted">{item.artist}</CardSubtitle>}
                                {item.description && <CardText>{item.description}</CardText>}
                                <Link to={`/items/${item.id}`}>
                                    <Button renderAs="button" color="info">View</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    // </Link>
                ))}
            </CardColumns>
        );
    }
}

Museum.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(Museum);