import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

import { search, searchAlbums, searchTracks, searchArtists, searchPlaylists } from '../src/main';

global.fetch = require('node-fetch');

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

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
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
        const fetchedStub = sinon.stub(global,'fetch');
        const artists = search();

        fetchedStub.restore();

        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should receive the correct url to fetch',()=>{
        const fetchedStub = sinon.stub(global,'fetch');
        const artists = search('Incubus','artist');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
          const albums = search('Incubus','album');

          expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
  });
});
