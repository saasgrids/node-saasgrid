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
    instance = new crms.TasksApi();
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

  describe('TasksApi', function() {
    describe('createTask', function() {
      it('should call createTask successfully', function(done) {
        //uncomment below and update the code to test createTask
        //instance.createTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTaskById', function() {
      it('should call deleteTaskById successfully', function(done) {
        //uncomment below and update the code to test deleteTaskById
        //instance.deleteTaskById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllTasks', function() {
      it('should call getAllTasks successfully', function(done) {
        //uncomment below and update the code to test getAllTasks
        //instance.getAllTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaskById', function() {
      it('should call getTaskById successfully', function(done) {
        //uncomment below and update the code to test getTaskById
        //instance.getTaskById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaskById', function() {
      it('should call updateTaskById successfully', function(done) {
        //uncomment below and update the code to test updateTaskById
        //instance.updateTaskById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
