
const test = require('tape');
const request = require('supertest');
const app = require('../src/app.js');

test('All routes should return the expected results', t => {
    request(app)
      .get('/')
      .expect(302)
      .expect('Content-Type', /text/)
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

  test('Testing for main page on code state ',(t) => {
    request(app)
    .get('/portFolio/1')
    .expect(302)
    .end((err, res) => {
    t.error(err)
    t.equal(res.statusCode,302 ,'Should return 302');
    t.end();
    
    });
    });

    test('Testing for login route ',(t) => {
        request(app)
        .get('/login')
        .expect(200)
        .end((err, res) => {
        t.error(err)
        t.equal(res.statusCode,200, 'Should return 200');
        t.end();
        
        });
        });

        test('Testing for error route ',(t) => {
            request(app)
            .get('/dfhfsnhfdhefh')
            .expect(302)
            .end((err, res) => {
            t.error(err)
            t.equal(res.statusCode,302, 'Should return 302');
            t.end();
            
            });
            });
      

    test.onFinish(() => process.exit(0));