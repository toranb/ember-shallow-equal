import { module, test } from 'qunit';
import shallowEqual from 'shallow-equal';

module('unit: shallow equal test');

test('returns false when objects share nothing', function(assert) {
  let prev = {one: 1};
  let next = {two: 2};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when objects share everything', function(assert) {
  let prev = {one: 1};
  let next = {one: 1};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns false when objects share keys but not values', function(assert) {
  let prev = {one: 1};
  let next = {one: 2};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when objects share many keys and values', function(assert) {
  let prev = {one: 1, name: 'abc'};
  let next = {one: 1, name: 'abc'};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns false when objects share many keys but one value differs', function(assert) {
  let prev = {one: 1, name: 'abc'};
  let next = {one: 1, name: 'abe'};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns false when one object has missing value for a key', function(assert) {
  let prev = {one: 1, two: 2};
  let next = {one: null, two: 2};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when both objects match and have null values', function(assert) {
  let prev = {one: null};
  let next = {one: null};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns true when both objects are empty object literals', function(assert) {
  let prev = {};
  let next = {};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns false when nested objects match', function(assert) {
  let prev = {one: {two: 2, three: 3}};
  let next = {one: {two: 2, three: 3}};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when nested objects share the same reference', function(assert) {
  let shared = {two: 2, three: [1, 2, 3]};
  let prev = {one: shared};
  let next = {one: shared};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns true when array values match', function(assert) {
  let prev = {one: 1, reviews: [1, 2, 3]};
  let next = {one: 1, reviews: [1, 2, 3]};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns false when array keys length differ', function(assert) {
  let prev = {one: 1, reviews: [1, 2, 3]};
  let next = {one: 1, reviews: [1, 2]};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns false when array values do not match', function(assert) {
  let prev = {one: 1, reviews: [1, 2, 3]};
  let next = {one: 1, reviews: [1, 2, 4]};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns false when array has nested objects that match', function(assert) {
  let prev = {one: 1, reviews: [{id: 2}]};
  let next = {one: 1, reviews: [{id: 2}]};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when array has shared object reference', function(assert) {
  let shared = {id: 2};
  let prev = {one: 1, reviews: [shared]};
  let next = {one: 1, reviews: [shared]};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});

test('returns false when array has nested arrays that match', function(assert) {
  let prev = {one: 1, reviews: [{two: []}]};
  let next = {one: 1, reviews: [{two: []}]};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns false when one has diff keys', function(assert) {
  let prev = {ten: 'next', one: null};
  let next = {ten: 'next', one: null, twenty: 'next'};
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when comparing the same actual reference', function(assert) {
  let prev = {one: 1, nan: NaN, two: 'x', three: {}};
  let result = shallowEqual(prev, prev);
  assert.ok(result);
});

test('returns false when values are identical but one added with Object.create', function(assert) {
  let prev = {one: 1};
  let next = Object.create({one: 1});
  let result = shallowEqual(prev, next);
  assert.notOk(result);
});

test('returns true when both have the same reference to an empty array', function(assert) {
  let reviews = [];
  let prev = {id: 1, name: 'x', reviews: reviews};
  let next = {id: 1, name: 'x', reviews: reviews};
  let result = shallowEqual(prev, next);
  assert.ok(result);
});
