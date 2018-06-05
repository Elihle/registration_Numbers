describe('countAllFromTown', function() {

  it('return registration numbers from Cape Town', function() {
    var regNumbers = Registrations();
    assert.equal("CA123", regNumbers.allRegs("Cape Town"));
  });
  //
  // it('return registration numbers from Cape Town', function() {
  //   var regNumbers = Registrations();
  //   assert.equal("CA123", regNumbers.allRegs("Cape Town"));
  // });
  //
  // it('return registration numbers from Cape Town', function() {
  //   var regNumbers = Registrations();
  //   assert.equal("CA123", regNumbers.allRegs("Cape Town"));
  // });
});


  it ('Should return ', function(){
    let registr = Registration();
    registr.reg('CA 12312');
    assert.equal(registr.regNumber(), 'CA 12312');
  });
