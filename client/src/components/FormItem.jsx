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


class FormItem extends Component {

    state = {
        title: '',
        artist: '',
        description: '',
        publisher: '',
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
            this.state.title = singleItem.title
            this.state.artist = singleItem.artist
            this.state.description = singleItem.description
            this.state.publisher = singleItem.publisher
            this.state.type = singleItem.type
            this.state.size = singleItem.size
            this.state.serial_number = singleItem.serial_number
            this.state.price = singleItem.price
            this.state.currency = singleItem.currency
            this.state.caracteristics = singleItem.caracteristics
            this.state.year = singleItem.year
            this.state.signed = singleItem.signed
            this.state.image_url = singleItem.image_url
        }
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

    render() {
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
                        <Input type="text" name="title" defaultValue={this.state.title} id="" placeholder="Joconde" required onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Artist</InputGroupAddon>
                        <Input type="text" name="artist" defaultValue={this.state.artist} id="" placeholder="Leo"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
                        <Input type="textarea" name="description" defaultValue={this.state.description} id="" placeholder="The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'." onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Publisher</InputGroupAddon>
                        <Input type="text" name="publisher" defaultValue={this.state.publisher} id="" placeholder="Best paintings AG"  onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
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

export default FormItem;