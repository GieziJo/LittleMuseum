import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import LaunchIcon from '@material-ui/icons/Launch';
import Link from '@material-ui/core/Link'


import { Link as RouterLink } from 'react-router-dom'

import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';

import PropTypes from 'prop-types';

import BreakpointMasonry from './BreakpointMasonry';
import MuseumMasonry from './MuseumMasonry';
  


class Museum extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return(
            // <BreakpointMasonry>
            //     {items.map(item => (
            //             <Card style={{display:"flex", flexDirection:"row", marginBottom:20, position: "relative"}} key={item.id}>
            //                 <CardContent style={{paddingBottom:5}}>
            //                     <Typography gutterBottom variant="h5" component="h2">
            //                         <Link to={`/items/${item.id}`} component={RouterLink} color="inherit" variant="inherit">{item.title}</Link>
            //                     </Typography>
            //                     {item.artist && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/artists/${item.artist_id}`} component={RouterLink} color="inherit" variant="inherit">{item.artist}</Link></Typography>}
            //                     {item.publisher && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/publishers/${item.publisher_id}`} component={RouterLink} color="inherit" variant="inherit">{item.publisher}</Link></Typography>}
            //                     {/* {item.description && <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>} */}
            //                 </CardContent>
            //                 {item.image_url && <CardMedia
            //                 image={item.image_url}
            //                 title="Card image cap"
            //                 style={{width: 151, backgroundSize: 'contain', backgroundPosition:"right", marginLeft: 'auto', marginRight:0}}
            //                 />}
                            
            //                 <CardActions style={{margin: 0, padding: 0, position: "absolute", bottom:0, right:0}}>
            //                     <RouterLink to={`/items/${item.id}`}>
            //                         <IconButton size="small" color="secondary"  component="span" style={{padding:10}}>
            //                             <LaunchIcon/>
            //                         </IconButton >
            //                     </RouterLink>
            //                 </CardActions>
            //             </Card>
            //     ))}
            // </BreakpointMasonry>
            <MuseumMasonry itemsList={items} />
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