describe("Initializer: ", function() {
  beforeEach(function() {
    loadFixtures('initializer_fixture.html');
  });

  describe("When page loads", function() {
    it("should NOT call init on collapse since it is a NOT present module", function() {
      spyOn(locastyle.collapse, 'init');
      locastyle.init();
      expect(locastyle.collapse.init).not.toHaveBeenCalled();
    });

    describe("When the .ls-trackevent-on css class is present on <html> tag", function () {
      it('should init the trackEvents module', function() {
        spyOn(locastyle.trackEvents, 'init');
        $("html").addClass("ls-trackevent-on");
        locastyle.init();
        expect(locastyle.trackEvents.init).toHaveBeenCalled();
      });

    });
  });

});
