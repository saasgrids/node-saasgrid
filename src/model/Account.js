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
    define(['ApiClient', 'model/Customfield'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customfield'));
  } else {
    // Browser globals (root is window)
    if (!root.crms) {
      root.crms = {};
    }
    root.crms.Account = factory(root.crms.ApiClient, root.crms.Customfield);
  }
}(this, function(ApiClient, Customfield) {
  'use strict';




  /**
   * The Account model module.
   * @module model/Account
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('numberOfEmployees')) {
        obj['numberOfEmployees'] = ApiClient.convertToType(data['numberOfEmployees'], 'Number');
      }
      if (data.hasOwnProperty('annualRevenue')) {
        obj['annualRevenue'] = ApiClient.convertToType(data['annualRevenue'], 'Number');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'Number');
      }
      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
      if (data.hasOwnProperty('parentSalesAccount_id')) {
        obj['parentSalesAccount_id'] = ApiClient.convertToType(data['parentSalesAccount_id'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [Customfield]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {Number} numberOfEmployees
   */
  exports.prototype['numberOfEmployees'] = undefined;
  /**
   * @member {Number} annualRevenue
   */
  exports.prototype['annualRevenue'] = undefined;
  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Number} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * @member {String} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;
  /**
   * @member {String} linkedin
   */
  exports.prototype['linkedin'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {String} parentSalesAccount_id
   */
  exports.prototype['parentSalesAccount_id'] = undefined;
  /**
   * @member {Array.<module:model/Customfield>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


