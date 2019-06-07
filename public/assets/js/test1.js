describe('Burger click to devour', function () {

    const data = [
      { id: 1, name: 'taco1', devoured: 0},
      { id: 2, name: 'Fatty Burger', devoured: 1},
      { id: 3, name: 'Awesome Burger', devoured: 0}
  
    ];
  
    let server;
  
    beforeEach(function () {
      server = sinon.fakeServer.create();
      total = 0;
    });
  
    afterEach(function () {
      server.restore();
    });
  
    // beforeEach(function () {
     
    // });

    it('displays', function (done) {
        server.respondWith('GET', '/', [
          200, { 'Content-Type': 'application/json' }, JSON.stringify(data[1])
        ]);
    
        // $('#submit').trigger('click');
    
        server.respond();
    
        expect($('#bu').text()).to.equal(true);
  
        done();
      });
  
    it('displays', function (done) {
      server.respondWith('PUT', '/api/burger/ + data[3].id', [
        200, { 'Content-Type': 'application/json' }, JSON.stringify(data[3])
      ]);
  
      $('#submit').trigger('click');
  
      server.respond();
  
      expect($('#bu').text()).to.equal(false);

      done();
    
    });
  

  
  });