import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Link from '@material-ui/core/Link'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'



import { Link as RouterLink } from 'react-router-dom'

import {
  // Card, Button, CardImg, CardTitle, CardText,
  // CardSubtitle, CardBody, 
  Button,
  Modal, ModalBody, ModalHeader, ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';
import {getItem, deleteItem} from '../actions/itemActions'

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
      // {/* <Card>
            // {singleItem.image_url && <CardImg top width="100%" src={singleItem.image_url} alt="Card image cap" />}
            // <Link to={`/items/edit/${singleItem.id}`}>
            //   <Button renderAs="button" color="info" style={{position: 'absolute', right: 0, top:0}}>Edit</Button>
            // </Link>
            // <CardBody>
            //     <CardTitle tag="h5">{singleItem.title}</CardTitle>
            //     {singleItem.artist && <CardSubtitle tag="h6" className="mb-2 text-muted">{singleItem.artist}</CardSubtitle>}
            //     {singleItem.description && <CardText>{singleItem.description}</CardText>}
            // </CardBody>
        // </Card> */}
        // {/* <Button color="danger" className="remove-btn" onClick={this.onDeleteClick} block>Delete Entry</Button>
              <div>
        
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} style={{color: "black"}}>Delete Entry</ModalHeader>
          <ModalBody style={{color: "black"}}>
            This action will permanently delete the selected entry, be carefull!
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.onDeleteConfirm.bind(this, singleItem.id)}>Delete entry</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        
          <Card style={{display:"flex", flexDirection:"row", marginBottom:20, position: "relative"}}>
          <RouterLink to={`/items/edit/${singleItem.id}`} style={{position: "absolute", top: 0, right: 0}}>
              <IconButton size="small" component="span" style={{padding:10, color:blue[500]}}>
                  <EditIcon/>
              </IconButton >
          </RouterLink>
            {/* <RouterLink to={`/items/edit/${singleItem.id}`} style={{position: "absolute", bottom: 0, right: 0}}> */}
                <IconButton size="small" component="span" style={{padding:10, color:red[500], position: "absolute", bottom: 0, right: 0}} onClick={this.onDeleteClick}>
                    <DeleteForeverIcon/>
                </IconButton >
            {/* </RouterLink> */}
              <CardContent style={{paddingBottom:5}}>
                  <Typography gutterBottom variant="h5" component="h2">
                      <Link to={`/items/${singleItem.id}`} component={RouterLink} color="inherit" variant="inherit">{singleItem.title}</Link>
                  </Typography>
                  {singleItem.artist && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/artists/${singleItem.artist_id}`} component={RouterLink} color="inherit" variant="inherit">{singleItem.artist}</Link></Typography>}
                  {singleItem.publisher && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/publishers/${singleItem.publisher_id}`} component={RouterLink} color="inherit" variant="inherit">{singleItem.publisher}</Link></Typography>}
                  {singleItem.description && <Typography variant="body2" color="textSecondary" component="p">{singleItem.description}</Typography>}
                  {singleItem.caracteristics && <Typography variant="body2" color="textSecondary" component="p">{singleItem.caracteristics}</Typography>}
              </CardContent>
              {singleItem.image_url && <CardMedia
              image={singleItem.image_url}
              title="Card image cap"
              style={{width: 400, height: 400, backgroundSize: 'contain', backgroundPosition:"right", marginLeft: 'auto', marginRight:0}}
              />}
          </Card>
      </div>
    );
  }
}

SingleItemPage.propTypes = {
  getItem: PropTypes.func.isRequired,
  singleItem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  singleItem: state.item.singleItem
})

export default connect(mapStateToProps, { getItem, deleteItem })(SingleItemPage);