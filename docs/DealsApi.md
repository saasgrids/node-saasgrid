# crms.DealsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeals**](DealsApi.md#createDeals) | **POST** /{userId}/deals | Creates a new deals
[**deleteDealById**](DealsApi.md#deleteDealById) | **DELETE** /{userId}/deal/{dealId} | Delete deal by Id
[**getAllDeal**](DealsApi.md#getAllDeal) | **GET** /{userId}/deals | Get all deal
[**getDealById**](DealsApi.md#getDealById) | **GET** /{userId}/deal/{dealId} | Get deal by Id
[**updateDealById**](DealsApi.md#updateDealById) | **PUT** /{userId}/deal/{dealId} | Update deal by Id


<a name="createDeals"></a>
# **createDeals**
> createDeals(userId, body)

Creates a new deals



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.DealsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Deal(); // Deal | Deal object that needs to be created

apiInstance.createDeals(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Deal**](Deal.md)| Deal object that needs to be created | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDealById"></a>
# **deleteDealById**
> deleteDealById(userId)

Delete deal by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.DealsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteDealById(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllDeal"></a>
# **getAllDeal**
> [Deal] getAllDeal(userId, email)

Get all deal



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.DealsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the deal

apiInstance.getAllDeal(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the deal | 

### Return type

[**[Deal]**](Deal.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDealById"></a>
# **getDealById**
> Deal getDealById(userId, dealId)

Get deal by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.DealsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var dealId = "dealId_example"; // String | ObjectId of acount

apiInstance.getDealById(userId, dealId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **dealId** | **String**| ObjectId of acount | 

### Return type

[**Deal**](Deal.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDealById"></a>
# **updateDealById**
> updateDealById(userId, body)

Update deal by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.DealsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Deal(); // Deal | Deal object that needs to be updated

apiInstance.updateDealById(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Deal**](Deal.md)| Deal object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

