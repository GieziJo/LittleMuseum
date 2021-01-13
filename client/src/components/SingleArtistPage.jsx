import React, { Component } from 'react'

import BreakpointMasonry from './BreakpointMasonry';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link'
import blue from '@material-ui/core/colors/blue'
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider'


import { Link as RouterLink } from 'react-router-dom'
import {connect} from 'react-redux';
import {getArtist} from '../actions/artistActions'
import {getItemsWithArtistID} from '../actions/itemActions'
import MuseumMasonry from './MuseumMasonry';

import PropTypes from 'prop-types';

class SingleArtistPage extends Component {

  componentDidMount(){
    const { artistId } = this.props.match.params;
    this.props.getArtist(artistId);
    this.props.getItemsWithArtistID(artistId);
  }

  render() {
    const singleArtist = this.props.singleArtist;
    const artist_items = this.props.artist_items;

    
    if (!singleArtist) {
      return (
        <section>
          <h2>Item not found!</h2>
        </section>
      )
    }
    return(
        <div>
          <Card style={{display:"flex", flexDirection:"row", marginBottom:20, position: "relative"}}>
          <RouterLink to={`/artists/edit/${singleArtist.id}`} style={{position: "absolute", top: 0, right: 0}}>
              <IconButton size="small" component="span" style={{padding:10, color:blue[500]}}>
                  <EditIcon/>
              </IconButton >
          </RouterLink>
              <CardContent style={{paddingBottom:5}}>
                  <Typography gutterBottom variant="h5" component="h2">
                      <Link to={`/artists/${singleArtist.id}`} component={RouterLink} color="inherit" variant="inherit">{singleArtist.name}</Link>
                  </Typography>
                  {singleArtist.description && <Typography variant="body2" color="textSecondary" component="p">{singleArtist.description}</Typography>}
              </CardContent>
          </Card>
          <Divider style={{marginBottom:20}}/>
          <MuseumMasonry itemsList={artist_items} />
          {/* <BreakpointMasonry>
                {artist_items.map(item => (
                        <Card style={{display:"flex", flexDirection:"row", marginBottom:20, position: "relative"}} key={item.id}>
                            <CardContent style={{paddingBottom:5}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Link to={`/items/${item.id}`} component={RouterLink} color="inherit" variant="inherit">{item.title}</Link>
                                </Typography>
                                {item.artist && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/artists/${item.artist_id}`} component={RouterLink} color="inherit" variant="inherit">{item.artist}</Link></Typography>}
                                {item.publisher && <Typography gutterBottom variant="subtitle2" component="h3"><Link to={`/publishers/${item.publisher_id}`} component={RouterLink} color="inherit" variant="inherit">{item.publisher}</Link></Typography>}
                            </CardContent>
                            {item.image_url && <CardMedia
                            image={item.image_url}
                            title="Card image cap"
                            style={{width: 151, backgroundSize: 'contain', backgroundPosition:"right", marginLeft: 'auto', marginRight:0}}
                            />}
                            
                            <CardActions style={{margin: 0, padding: 0, position: "absolute", bottom:0, right:0}}>
                                <RouterLink to={`/items/${item.id}`}>
                                    <IconButton size="small" color="secondary"  component="span" style={{padding:10}}>
                                        <LaunchIcon/>
                                    </IconButton >
                                </RouterLink>
                            </CardActions>
                        </Card>
                ))}
            </BreakpointMasonry> */}
          </div>
    );
  }
}

SingleArtistPage.propTypes = {
  getArtist: PropTypes.func.isRequired,
  getItemsWithArtistID: PropTypes.func.isRequired,
  singleArtist: PropTypes.object.isRequired,
  artist_items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    singleArtist: state.artist.singleArtist,
    artist_items: state.item.artist_items
})

export default connect(mapStateToProps, { getArtist, getItemsWithArtistID })(SingleArtistPage);