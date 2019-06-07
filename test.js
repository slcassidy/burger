const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./server");
const expect = chai.expect;

// API Endpoint Testing
// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

  // set a variable for making http requests.
let request;

describe('POST /api/burger', function() {

  beforeEach(function(done) {
    request = chai.request(server);
    done();
  });

  it('should append a burger to the burger table', function(done) {
    const reqBody = {
      name: 'BLT Burger',
      devoured: false
    };

    // POST the request body to the server
    request
      .post('/api/burger')
      .send(reqBody)
      .end(function(err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;
        // expect(err).to.not.be.null

        expect(responseStatus).to.equal(200);
        

        expect(responseBody)
          .to.be.an('object')
          .that.includes({ affectedRows: 1 });

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });

  it('should not add to the table as ther is a null value of the name', function(done) {
    const reqBody = {
      name: "",
      devoured: true
    };

    // POST the request body to the server
    request
      .post('/api/burger')
      .send(reqBody)
      .end(function(err, res) {
        const responseStatus = res.status;
        // const responseBody = res.body;

        // Run assertions on the response

        // expect(err).to.not.be.null
        expect(responseStatus).to.not.equal(200);



        // The `done` function is used to end any asynchronous tests
        done();
      });
  });

  // postive and negative above completed
  // 2 more to go

  it('should data in the database', function(done) {
    // const reqBody = {
    //   name: 'BLT Burger',
    //   devoured: false
    // };

    // POST the request body to the server
    request
      .get('/')
      .send(reqBody)
      .end(function(err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;
        // expect(err).to.not.be.null

        expect(responseStatus).to.equal(200);
        

        // expect(responseBody)
        //   .to.be.an('object')
        //   .that.includes({ affectedRows: 1 });

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
  
});