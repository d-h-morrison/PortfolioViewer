'use strict';

angular.module('PortfolioViewer.version', [
  'PortfolioViewer.version.interpolate-filter',
  'PortfolioViewer.version.version-directive'
])

.value('version', '0.1');
