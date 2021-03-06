/* name: _sendEvent
 * usage: to set hit type to Event
 */

var { _sendEvent } = require('../Universal-Federated-Analytics.lib.js');

test('_sendEvent: valid event', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  var _cat = 'navigation';
  var _act = 'click';
  var _lbl = 'top menu';
  var _val = '';
  var _nonInteraction = false;
  var interactionType = 'Mouse Click';
  _sendEvent(_cat, _act, _lbl, _val, _nonInteraction, interactionType, createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(2);
});

test('_sendEvent: missing required param', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  var _cat = undefined;
  var _act = 'click';
  var _lbl = 'top menu';
  var _val = '';
  var _nonInteraction = false;
  var interactionType = 'Mouse Click';
  _sendEvent(_cat, _act, _lbl, _val, _nonInteraction, interactionType, createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(0);
});
