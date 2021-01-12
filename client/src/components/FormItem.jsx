import React, { Component } from 'react';
// import {
//     Form,
//     // FormGroup,
//     // Button,
//     // Input,
//     // InputGroupAddon,
//     // InputGroupText,
//     // InputGroup
//   } from 'reactstrap';
  import { connect } from 'react-redux';
  import AutocompleteWithPrompt from './AutocompleteWithPrompt';
  import {getArtists, addArtist} from '../actions/artistActions';
  import {getPublishers, addPublisher} from '../actions/publisherActions';
//   import Input from '@material-ui/core/Input';
  import TextField from '@material-ui/core/TextField';
  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


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
        signed: false,
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
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChangeCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    };

    onChangeID = (e) => {
        this.setState({
            [e.target.name + "_id"]: e.target.id,
        })
        this.onChange(e);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleSubmitArtist = (data) => {
      this.props.addArtist({
        name: data.name,
        description: data.description,
        id: data.id
      })
    }

    handleSubmitPublisher = (data) => {
      this.props.addPublisher({
        name: data.name,
        description: data.description,
        id: data.id
      })
    }

    render() {
        
        const artist = this.props.artist;
        const publisher = this.props.publisher;
        return(
            // <Form onSubmit={this.onSubmit}>
            <div>
                <TextField label="Title" name="title" value={this.state.title??""} variant="filled" required onChange={this.onChange} fullWidth size="small"/>
                
                <AutocompleteWithPrompt handleSubmit = {this.handleSubmitArtist} entries = {artist.artists} entryType='Artist' name='artist' onChange={this.onChangeID} value={this.state.artist??""}/>
                
                <TextField label="Description" name="description" value={this.state.description??""} variant="filled" onChange={this.onChange} fullWidth multiline size="small"/>

                <AutocompleteWithPrompt handleSubmit = {this.handleSubmitPublisher} entries = {publisher.publishers} entryType='Publisher' name='publisher' onChange={this.onChangeID}  value={this.state.publisher??""}/>

                <TextField label="Type" name="type" value={this.state.type??""} variant="filled" onChange={this.onChange} fullWidth size="small"/>

                <TextField label="Size" name="size" value={this.state.size??""} variant="filled" onChange={this.onChange} fullWidth size="small"/>

                <TextField label="Serial Number" name="serial_number" value={this.state.serial_number??""} variant="filled" onChange={this.onChange} fullWidth size="small"/>

                {/* <FormGroup>
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
                </FormGroup> */}

                        {/* <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
                        <Input type="number" name="price" defaultValue={this.state.price} id="" placeholder="9999999" min="0" onChange={this.onChange}/> */}
                        {/* <FormGroup row fullWidth> */}

                        <TextField label="Price" name="price" type="number" min="0" value={this.state.price  ?? ""} variant="filled" onChange={this.onChange} fullWidth size="small" 
                        InputProps={{
                        endAdornment: (
                        <InputAdornment position='end'>
                        <Select name="currency" value={this.state.currency  ?? ""} onChange={this.onChange} variant="standard" size="small" style={{marginLeft:10}}>
                            <MenuItem value=""></MenuItem >
                            <MenuItem value="CHF">CHF</MenuItem >
                            <MenuItem value="$">$</MenuItem >
                            <MenuItem value="€">€</MenuItem >
                            <MenuItem value="£">£</MenuItem >
                            <MenuItem value="¥">¥</MenuItem >
                        </Select>
                        </InputAdornment>
                        )
                        }}/>

                <TextField label="Caracteristics" name="caracteristics" value={this.state.caracteristics??""} variant="filled" onChange={this.onChange} fullWidth multiline size="small"/>

                <TextField label="Year" name="year" type="number" value={this.state.year??""} variant="filled" onChange={this.onChange} fullWidth size="small"/>

                <FormControlLabel
                    control={<Checkbox  value={this.state.signed??false}  checked={this.state.signed??false} onChange={this.onChangeCheck} name="signed" />}
                    label="Signed" labelPlacement="start"
                />

                <TextField label="Image Url" name="image_url" type="url" value={this.state.image_url??""} variant="filled" onChange={this.onChange} fullWidth size="small"/>

                <Button fullWidth variant="contained" onClick={this.onSubmit}>{this.props.buttonLabel}</Button>
                </div>
            // {/* </Form> */}
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