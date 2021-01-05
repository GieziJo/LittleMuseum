import React, { Component } from 'react'
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Modal, ModalBody, ModalHeader, ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';
import {getItem, deleteItem} from '../actions/itemActions'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

class SingleItemPage extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount(){
    const { itemId } = this.props.match.params;
    this.props.getItem(itemId);
  }

  onDeleteClick = () => {
    this.toggle()
  }

  onDeleteConfirm = (id) => {
    this.toggle()
    this.props.deleteItem(id);
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const singleItem = this.props.singleItem;
    
    if (!singleItem) {
      return (
        <section>
          <h2>Item not found!</h2>
        </section>
      )
    }
    return(
      <div>
        <Card>
            {singleItem.image_url && <CardImg top width="100%" src={singleItem.image_url} alt="Card image cap" />}
            <Link to={`/items/edit/${singleItem.id}`}>
              <Button renderAs="button" color="info" style={{position: 'absolute', right: 0, top:0}}>Edit</Button>
            </Link>
            <CardBody>
                <CardTitle tag="h5">{singleItem.title}</CardTitle>
                {singleItem.artist && <CardSubtitle tag="h6" className="mb-2 text-muted">{singleItem.artist}</CardSubtitle>}
                {singleItem.description && <CardText>{singleItem.description}</CardText>}
            </CardBody>
        </Card>
        <Button color="danger" className="remove-btn" onClick={this.onDeleteClick} block>Delete Entry</Button>
        
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete Entry</ModalHeader>
          <ModalBody>
            This action will permanently delete the selected entry, be carefull!
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.onDeleteConfirm.bind(this, singleItem.id)}>Delete entry</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SingleItemPage.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  singleItem: state.item.singleItem
})

export default connect(mapStateToProps, { getItem, deleteItem })(SingleItemPage);