import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchPlaylists } from '../src/main'

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    // search (genérico) +1 de um tipo
    // searchAlbums
    // searchArtists
    // searchPlaylists
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
    describe('Generic Search', () => {
      it('should call fectch function',() => {
        const artists = search();
      });
  });
});
