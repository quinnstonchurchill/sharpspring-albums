import moment from 'moment';
import sortBy from 'lodash.sortby';

export function sortByYear(albums) {
    return sortBy(albums, 'releaseDate');
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
