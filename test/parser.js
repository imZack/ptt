'use strict';

let chai = require('chai');
let should = chai.should();
let getArticlesFromLink = require('../lib/board').getArticlesFromLink;
let getArticleFromLink = require('../lib/article').getArticleFromLink;

describe('Articles (Board)', () => {
  it('should parse & list ALL Articles by given board url', (done) => {
    getArticlesFromLink('https://www.ptt.cc/bbs/gossiping/index.html')
      .then((data) => {
        data.should.have.property('nextPageUrl');
        data.nextPageUrl.should.not.eq('https://www.ptt.ccundefined');
        data.boardName.should.be.eq('Gossiping');
        data.should.have.property('articles');
        data.articles.should.have.be.a.Array;
        data.articles.forEach((article) => {
          article.should.have.property('title');
          article.should.have.property('date');
          article.should.have.property('author');
          article.should.have.property('push');
          article.should.have.property('url');
        });

        done();
      })
      .catch(done);
  });
});

describe('Article', () => {
  it('should parse Article by given article url', (done) => {
    getArticleFromLink('https://www.ptt.cc/bbs/Announce/M.1449742119.A.858.html')
      .then((data) => {
        data.should.have.property('content');
        data.should.have.property('date');
        data.should.have.property('author');
        data.should.have.property('boardName');
        data.should.have.property('images');
        data.should.have.property('links');
        data.should.have.property('title');
        data.should.have.property('url');

        done();
      })
      .catch(done);
  });

  it('should parse Article images by given article url', (done) => {
    getArticleFromLink('https://www.ptt.cc/bbs/Beauty/M.1505397483.A.C14.html')
      .then((data) => {
        data.images[0].should.be.equal('//imgur.com/dkz25TX');
        done();
      })
      .catch(done);
  });
});
