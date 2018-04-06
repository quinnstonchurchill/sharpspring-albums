import moment from 'moment';
import _ from 'lodash';

export function sortByYear(albums) {
    // return _.sortBy(albums ['releaseDate']);
    return albums.sort((a,b) => b-a);
}

export function formatDates(albums) {
    return albums.map(album => {
        const releaseDate = moment(album.releaseDate).get('year');
        return {
            ...album,
            releaseDate
        };
    })
}
