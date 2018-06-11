describe('Registration Numbers', function() {

  it('should return registration numbers from Cape Town', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CA 251")
    assert.equal(regNumbers.getReg(), "CA 251");
  });

  it('should return registration numbers from George', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CJ 251")
    assert.equal(regNumbers.getReg(), "CJ 251");
  });


  it('should return registration numbers from Paarl', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CL 251")
    assert.equal(regNumbers.getReg(), "CL 251");
  });


  it('should return registration numbers from Stellenbosch', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CK 251")
    assert.equal(regNumbers.getReg(), "CK 251");
  });

  it('filter', function() {
    var regNumbers = Registrations();
    regNumbers.fromATown("CK 251")
    assert.equal(regNumbers.getReg(), "CK 251");
  });

});
registration_display.checkReg('CA 1234')
registration_display.checkReg('CK 1234')
  registration_display.checkReg('CA 1235')
assert.deepEqual(registration_display.filter('CA'),["CA 1234",'CA 1235'])
