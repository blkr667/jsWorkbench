
describe('jquery karma', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = 
      '<div id="fixture">' +
        '<div id="inner-box">hello</div>' +
      '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should change css property', function() {
    $(document).ready(function() {
      // when
       $("#inner-box").css("background-color", "red");
    });

    //then
     expect(document.getElementById("inner-box").style['background-color']).toBe("red");
  });

});