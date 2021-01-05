import React, { Component } from 'react';

import { connect } from 'react-redux';
import {addItem} from '../actions/itemActions';
import uuid from 'react-uuid';
import FormItem from './FormItem';

class AddItem extends Component {


    onSubmit = (data) => {

        const newItem = {
            id: uuid(),
            title: data.title,
            artist: data.artist,
            description: data.description,
            publisher: data.publisher,
            type: data.type,
            size: data.size,
            serial_number: data.serial_number,
            price: data.price,
            currency: data.currency,
            caracteristics: data.caracteristics,
            year: data.year,
            signed: data.signed,
            image_url:data.image_url
        }

        // add item via addItem action
        this.props.addItem(newItem);

        const { history } = this.props;
        history.push('/items/' + newItem.id);
    }

    render() {
        return(
            <div>
                <h1>Add New Item</h1>
                <FormItem onSubmit = {this.onSubmit}  buttonLabel='Add Item'/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(AddItem);