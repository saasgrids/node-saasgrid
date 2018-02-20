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
    define(['ApiClient', 'model/Filter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'));
  } else {
    // Browser globals (root is window)
    if (!root.crms) {
      root.crms = {};
    }
    root.crms.InlineResponse2005 = factory(root.crms.ApiClient, root.crms.Filter);
  }
}(this, function(ApiClient, Filter) {
  'use strict';




  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], [Filter]);
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'String');
      }
      if (data.hasOwnProperty('more_data')) {
        obj['more_data'] = ApiClient.convertToType(data['more_data'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Filter>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {String} skip
   */
  exports.prototype['skip'] = undefined;
  /**
   * @member {Boolean} more_data
   */
  exports.prototype['more_data'] = undefined;



  return exports;
}));


