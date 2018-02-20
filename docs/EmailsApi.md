# crms.EmailsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmail**](EmailsApi.md#createEmail) | **POST** /{userId}/emails | Creates a new email
[**deleteEmailById**](EmailsApi.md#deleteEmailById) | **DELETE** /{userId}/emails/{emailObjectId} | Delete email by Id
[**getAllEmails**](EmailsApi.md#getAllEmails) | **GET** /{userId}/emails | Get all emails
[**getEmailById**](EmailsApi.md#getEmailById) | **GET** /{userId}/emails/{emailObjectId} | Get email by Id
[**updateEmailById**](EmailsApi.md#updateEmailById) | **PUT** /{userId}/emails/{emailObjectId} | Update email by Id


<a name="createEmail"></a>
# **createEmail**
> Email createEmail(userId, body)

Creates a new email



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.EmailsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Email(); // Email | Email object that needs to be created

apiInstance.createEmail(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Email**](Email.md)| Email object that needs to be created | 

### Return type

[**Email**](Email.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailById"></a>
# **deleteEmailById**
> deleteEmailById(userId, emailObjectId)

Delete email by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.EmailsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var emailObjectId = "emailObjectId_example"; // String | ObjectId of task to be deleted

apiInstance.deleteEmailById(userId, emailObjectId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **emailObjectId** | **String**| ObjectId of task to be deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllEmails"></a>
# **getAllEmails**
> [Email] getAllEmails(userId, email)

Get all emails



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.EmailsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the email

apiInstance.getAllEmails(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the email | 

### Return type

[**[Email]**](Email.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailById"></a>
# **getEmailById**
> Email getEmailById(userId, emailObjectId)

Get email by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.EmailsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var emailObjectId = "emailObjectId_example"; // String | ObjectId of email

apiInstance.getEmailById(userId, emailObjectId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **emailObjectId** | **String**| ObjectId of email | 

### Return type

[**Email**](Email.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmailById"></a>
# **updateEmailById**
> updateEmailById(userId, body, emailObjectId)

Update email by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.EmailsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Email(); // Email | Email object that needs to be updated

var emailObjectId = "emailObjectId_example"; // String | ObjectId of task to be deleted

apiInstance.updateEmailById(userId, body, emailObjectId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Email**](Email.md)| Email object that needs to be updated | 
 **emailObjectId** | **String**| ObjectId of task to be deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

