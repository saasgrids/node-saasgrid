/**
 * Saasgrids CRM grid
 * Saasgrids CRM grid
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@saasgrids.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.crms);
  }
}(this, function(expect, crms) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new crms.DealsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DealsApi', function() {
    describe('createDeals', function() {
      it('should call createDeals successfully', function(done) {
        //uncomment below and update the code to test createDeals
        //instance.createDeals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDealById', function() {
      it('should call deleteDealById successfully', function(done) {
        //uncomment below and update the code to test deleteDealById
        //instance.deleteDealById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllDeal', function() {
      it('should call getAllDeal successfully', function(done) {
        //uncomment below and update the code to test getAllDeal
        //instance.getAllDeal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDealById', function() {
      it('should call getDealById successfully', function(done) {
        //uncomment below and update the code to test getDealById
        //instance.getDealById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDealById', function() {
      it('should call updateDealById successfully', function(done) {
        //uncomment below and update the code to test updateDealById
        //instance.updateDealById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
