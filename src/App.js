import React, { Component } from 'react';
import axios from 'axios';
import Albums from './components/Albums';
import Banner from './components/Banner';
import * as utils from './utils';

const artistId = 2900657;

export default class App extends Component {
    state = {
        artistName: '',
        artistLinkUrl: '',
        albums: []
    };
    componentWillMount() {
        this.fetchAlbums();
    }
    fetchAlbums() {
        return axios.get(`https://itunes.apple.com/lookup?id=${artistId}&entity=album`)
            .then(res => {
                const results = res.data.results;
                const { artistName, artistLinkUrl } = results[0];
                let albums = results.slice(1, results.length);
                albums = utils.formatDates(albums);
                albums = utils.sortByYear(albums);
                this.setState({
                    artistName,
                    artistLinkUrl,
                    albums
                });
            })
    }
    render() {
        return (
            <div>
                <Banner artistName={this.state.artistName} />
                <Albums albums={this.state.albums} />
            </div>
        );
    }
}
