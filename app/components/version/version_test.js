'use strict';

describe('PortfolioViewer.version module', function() {
  beforeEach(module('PortfolioViewer.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
