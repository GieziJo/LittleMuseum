import React, { Component } from 'react';

import { connect } from 'react-redux';
import {getItem, editItem} from '../actions/itemActions';
import FormItem from './FormItem';

class EditItem extends Component {
    

    componentDidMount(){
        const { itemId } = this.props.match.params;
        this.props.getItem(itemId);
    }

    onSubmit = (data) => {

        const newItem = {
            id: this.props.singleItem.id,
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
        this.props.editItem(newItem);

        const { history } = this.props;
        history.push('/items/' + newItem.id);
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
                <h1>Edit Item</h1>
                <FormItem onSubmit = {this.onSubmit} singleItem = {singleItem} buttonLabel='Update Item'/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    singleItem: state.item.singleItem
});

export default connect(mapStateToProps, { editItem, getItem })(EditItem);