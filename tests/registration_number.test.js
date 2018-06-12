describe('Registration Numbers', function() {

  it('should return registration numbers from Cape Town', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CK 251")
    regNumbers.fromATown("CA 251")
    regNumbers.fromATown("CA 331")

    assert.deepEqual(regNumbers.filterAll('CA'), ['CA 251', 'CA 331'])

  });

  it('should return registration numbers from Paarl', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CL 251")
    regNumbers.fromATown("CA 251")
    regNumbers.fromATown("CL 331")

    assert.deepEqual(regNumbers.filterAll('CL'), ['CL 251', 'CL 331'])
  });

  it('should return registration numbers from Stellenbosch', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CK 251")
    regNumbers.fromATown("CA 251")
    regNumbers.fromATown("CK 331")

    assert.deepEqual(regNumbers.filterAll('CK'), ['CK 251', 'CK 331'])
  });

  it('should return registration numbers from Goerge', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CJ 251")
    regNumbers.fromATown("CA 251")
    regNumbers.fromATown("CJ 331")

    assert.deepEqual(regNumbers.filterAll('CJ'), ['CJ 251', 'CJ 331'])
  });

  it('should return a list of all the registration numbers', function() {
    var regNumbers = Registrations();

    regNumbers.fromATown('CA 1900')
    regNumbers.fromATown('CL 7223')
    regNumbers.fromATown('CJ 2532')
    assert.deepEqual(regNumbers.regsMap(), ['CA 1900', 'CL 7223', 'CJ 2532'])

});

it('should return false if an invalid registration is entered', function() {
  var regNumbers = Registrations();
      assert.equal(regNumbers.fromATown("CMK777"), false);
  });


  it('should return true if a valid registration is entered', function() {
  var regNumbers = Registrations();
      assert.equal(regNumbers.fromATown("CA 123456"), true);

});

it('should not add registration number if it entered twice', function() {
     var regNumbers = Registrations();
      regNumbers.fromATown('CL667');
       regNumbers.fromATown('CL667');
      assert.deepEqual(regNumbers.regsMap() ,[ 'CL667'] );
  });
});
