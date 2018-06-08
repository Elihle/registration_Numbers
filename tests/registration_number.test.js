describe('Registration Numbers', function() {

  it('should return registration numbers from Cape Town', function() {
    var regNumbers = Registrations();
    regNumbers.regsMap("CA 251")
    assert.equal(regNumbers.allRegs(), "CA 251");
  });
});
