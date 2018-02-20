# crms.CallsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCall**](CallsApi.md#createCall) | **POST** /{userId}/calls | Creates a new call
[**deleteCallById**](CallsApi.md#deleteCallById) | **DELETE** /{userId}/calls/{callId} | Delete call by Id
[**getAllCalls**](CallsApi.md#getAllCalls) | **GET** /{userId}/calls | Get all calls
[**getCallById**](CallsApi.md#getCallById) | **GET** /{userId}/calls/{callId} | Get call by Id
[**updateCallById**](CallsApi.md#updateCallById) | **PUT** /{userId}/calls/{callId} | Update call by Id


<a name="createCall"></a>
# **createCall**
> Call createCall(userId, body)

Creates a new call



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.CallsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Call(); // Call | Call object that needs to be created

apiInstance.createCall(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Call**](Call.md)| Call object that needs to be created | 

### Return type

[**Call**](Call.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCallById"></a>
# **deleteCallById**
> deleteCallById(userId, callId)

Delete call by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.CallsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var callId = "callId_example"; // String | ObjectId of call

apiInstance.deleteCallById(userId, callId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **callId** | **String**| ObjectId of call | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllCalls"></a>
# **getAllCalls**
> [Call] getAllCalls(userId, email)

Get all calls



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.CallsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the call

apiInstance.getAllCalls(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the call | 

### Return type

[**[Call]**](Call.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallById"></a>
# **getCallById**
> Call getCallById(userId, callId)

Get call by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.CallsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var callId = "callId_example"; // String | ObjectId of call

apiInstance.getCallById(userId, callId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **callId** | **String**| ObjectId of call | 

### Return type

[**Call**](Call.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCallById"></a>
# **updateCallById**
> updateCallById(userId, body, callId)

Update call by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.CallsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Call(); // Call | Call object that needs to be updated

var callId = "callId_example"; // String | ObjectId of call

apiInstance.updateCallById(userId, body, callId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Call**](Call.md)| Call object that needs to be updated | 
 **callId** | **String**| ObjectId of call | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

