import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
  } from 'reactstrap';
  import { connect } from 'react-redux';
  import AutocompleteWithPrompt from './AutocompleteWithPrompt';
  import {getArtists, addArtist} from '../actions/artistActions';
  import {getPublishers, addPublisher} from '../actions/publisherActions';


class FormItem extends Component {

    state = {
        title: '',
        artist: '',
        artist_id: '',
        description: '',
        publisher: '',
        publisher_id: '',
        type: '',
        size: '',
        serial_number: '',
        price: '',
        currency: '',
        caracteristics: '',
        year: '',
        signed: '',
        image_url: ''
    }

    componentDidMount(){
        const singleItem = this.props.singleItem;
        if(singleItem){
            this.setState({
                title: singleItem.title,
                artist: singleItem.artist,
                artist_id: singleItem.artist_id,
                description: singleItem.description,
                publisher: singleItem.publisher,
                publisher_id: singleItem.publisher_id,
                type: singleItem.type,
                size: singleItem.size,
                serial_number: singleItem.serial_number,
                price: singleItem.price,
                currency: singleItem.currency,
                caracteristics: singleItem.caracteristics,
                year: singleItem.year,
                signed: singleItem.signed,
                image_url: singleItem.image_url
            })
        }
        this.props.getArtists();
        this.props.getPublishers();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleSubmitArtist = (data) => {
      this.props.addArtist({
        name: data.name,
        description: data.description
      })
    }

    handleSubmitPublisher = (data) => {
      this.props.addPublisher({
        name: data.name,
        description: data.description
      })
    }

    render() {
        
        const artist = this.props.artist;
        const publisher = this.props.publisher;
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
                        <Input type="text" name="title" defaultValue={this.state.title} id="" placeholder="Joconde" required onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                {/* <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Artist</InputGroupAddon>
                        <Input type="text" name="artist" defaultValue={this.state.artist} id="" placeholder="Leo"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup> */}
                
                <AutocompleteWithPrompt handleSubmit = {this.handleSubmitArtist} entries = {artist.artists} entryType='Artist'   onChange={this.onChange}/>
                
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
                        <Input type="textarea" name="description" defaultValue={this.state.description} id="" placeholder="The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'." onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                {/* <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Publisher</InputGroupAddon>
                        <Input type="text" name="publisher" defaultValue={this.state.publisher} id="" placeholder="Best paintings AG"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup> */}
                <AutocompleteWithPrompt handleSubmit = {this.handleSubmitPublisher} entries = {publisher.publishers} entryType='Publisher'   onChange={this.onChange}/>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Type</InputGroupAddon>
                        <Input type="text" name="type" defaultValue={this.state.type} id="" placeholder="Painting"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Size</InputGroupAddon>
                        <Input type="text" name="size" defaultValue={this.state.size} id="" placeholder="73x53cm"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Serial Number</InputGroupAddon>
                        <Input type="text" name="serial_number" defaultValue={this.state.serial_number} id="" placeholder="xn-347"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
                        <Input type="number" name="price" defaultValue={this.state.price} id="" placeholder="9999999" min="0" onChange={this.onChange}/>
                        <Input type="select" name="currency" defaultValue={this.state.currency} id="" onChange={this.onChange}>
                            <option>CHF</option>
                            <option>$</option>
                            <option>€</option>
                            <option>£</option>
                            <option>¥</option>
                        </Input>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Caracteristics</InputGroupAddon>
                        <Input type="textarea" name="caracteristics" defaultValue={this.state.caracteristics} id="" placeholder="Freaking old"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Year</InputGroupAddon>
                        <Input type="number" name="year" defaultValue={this.state.year} id="" placeholder="1503"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Signed</InputGroupAddon>
                        <InputGroupText>
                            <Input addon type="checkbox" name="signed" defaultValue={this.state.signed} id="" onChange={this.onChange}/>
                        </InputGroupText>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Image url</InputGroupAddon>
                        <Input type="url" name="image_url" defaultValue={this.state.image_url} id="" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <Button block>{this.props.buttonLabel}</Button>
            </Form>
        );
    }
}


const mapStateToProps = state => ({
    item: state.item,
    singleItem: state.item.singleItem,
    artist: state.artist,
    publisher: state.publisher
});

export default connect(mapStateToProps, { getArtists, addArtist, getPublishers, addPublisher })(FormItem);