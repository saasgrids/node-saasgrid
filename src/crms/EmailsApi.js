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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Email'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Email'));
  } else {
    // Browser globals (root is window)
    if (!root.crms) {
      root.crms = {};
    }
    root.crms.EmailsApi = factory(root.crms.ApiClient, root.crms.Email);
  }
}(this, function(ApiClient, Email) {
  'use strict';

  /**
   * Emails service.
   * @module crms/EmailsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EmailsApi. 
   * @alias module:crms/EmailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates a new email
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {module:model/Email} body Email object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Email} and HTTP response
     */
    this.createEmailWithHttpInfo = function(userId, body) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createEmail");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEmail");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Email;

      return this.apiClient.callApi(
        '/{userId}/emails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a new email
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {module:model/Email} body Email object that needs to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Email}
     */
    this.createEmail = function(userId, body) {
      return this.createEmailWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} emailObjectId ObjectId of task to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteEmailByIdWithHttpInfo = function(userId, emailObjectId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteEmailById");
      }

      // verify the required parameter 'emailObjectId' is set
      if (emailObjectId === undefined || emailObjectId === null) {
        throw new Error("Missing the required parameter 'emailObjectId' when calling deleteEmailById");
      }


      var pathParams = {
        'userId': userId,
        'emailObjectId': emailObjectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/{userId}/emails/{emailObjectId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} emailObjectId ObjectId of task to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteEmailById = function(userId, emailObjectId) {
      return this.deleteEmailByIdWithHttpInfo(userId, emailObjectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all emails
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} email Email id of the email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Email>} and HTTP response
     */
    this.getAllEmailsWithHttpInfo = function(userId, email) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAllEmails");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getAllEmails");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'email': email
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Email];

      return this.apiClient.callApi(
        '/{userId}/emails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all emails
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} email Email id of the email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Email>}
     */
    this.getAllEmails = function(userId, email) {
      return this.getAllEmailsWithHttpInfo(userId, email)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} emailObjectId ObjectId of email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Email} and HTTP response
     */
    this.getEmailByIdWithHttpInfo = function(userId, emailObjectId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getEmailById");
      }

      // verify the required parameter 'emailObjectId' is set
      if (emailObjectId === undefined || emailObjectId === null) {
        throw new Error("Missing the required parameter 'emailObjectId' when calling getEmailById");
      }


      var pathParams = {
        'userId': userId,
        'emailObjectId': emailObjectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Email;

      return this.apiClient.callApi(
        '/{userId}/emails/{emailObjectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {String} emailObjectId ObjectId of email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Email}
     */
    this.getEmailById = function(userId, emailObjectId) {
      return this.getEmailByIdWithHttpInfo(userId, emailObjectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {module:model/Email} body Email object that needs to be updated
     * @param {String} emailObjectId ObjectId of task to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateEmailByIdWithHttpInfo = function(userId, body, emailObjectId) {
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateEmailById");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateEmailById");
      }

      // verify the required parameter 'emailObjectId' is set
      if (emailObjectId === undefined || emailObjectId === null) {
        throw new Error("Missing the required parameter 'emailObjectId' when calling updateEmailById");
      }


      var pathParams = {
        'userId': userId,
        'emailObjectId': emailObjectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/{userId}/emails/{emailObjectId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update email by Id
     * 
     * @param {String} userId User instance id returned from saasgrids after authorization
     * @param {module:model/Email} body Email object that needs to be updated
     * @param {String} emailObjectId ObjectId of task to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateEmailById = function(userId, body, emailObjectId) {
      return this.updateEmailByIdWithHttpInfo(userId, body, emailObjectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
