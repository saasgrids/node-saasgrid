# crms.AccountsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](AccountsApi.md#createAccount) | **POST** /{userId}/accounts | Creates a new account
[**deleteAccountById**](AccountsApi.md#deleteAccountById) | **DELETE** /{userId}/account/{accountId} | Delete account by Id
[**getAccountById**](AccountsApi.md#getAccountById) | **GET** /{userId}/account/{accountId} | Get account by Id
[**getAccountFilters**](AccountsApi.md#getAccountFilters) | **GET** /{userId}/accounts/filters | Get all account filters
[**getAccountsByFilter**](AccountsApi.md#getAccountsByFilter) | **GET** /{userId}/accounts/filters/{filterId} | Get all accounts by filter
[**getAllAccounts**](AccountsApi.md#getAllAccounts) | **GET** /{userId}/accounts | Get all accounts
[**updateAccountById**](AccountsApi.md#updateAccountById) | **PUT** /{userId}/account/{accountId} | Update account by Id


<a name="createAccount"></a>
# **createAccount**
> createAccount(userId, body)

Creates a new account



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Account(); // Account | Account object that needs to be created

apiInstance.createAccount(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Account**](Account.md)| Account object that needs to be created | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAccountById"></a>
# **deleteAccountById**
> deleteAccountById(userId)

Delete account by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteAccountById(userId).then(function() {
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

<a name="getAccountById"></a>
# **getAccountById**
> Account getAccountById(userId, accountId)

Get account by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var accountId = "accountId_example"; // String | ObjectId of acount

apiInstance.getAccountById(userId, accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **accountId** | **String**| ObjectId of acount | 

### Return type

[**Account**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountFilters"></a>
# **getAccountFilters**
> InlineResponse2002 getAccountFilters(userId)

Get all account filters



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.getAccountFilters(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountsByFilter"></a>
# **getAccountsByFilter**
> InlineResponse2007 getAccountsByFilter(userId, filterId)

Get all accounts by filter



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var filterId = "filterId_example"; // String | ObjectId of  filter

apiInstance.getAccountsByFilter(userId, filterId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **filterId** | **String**| ObjectId of  filter | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAccounts"></a>
# **getAllAccounts**
> InlineResponse2007 getAllAccounts(userId, email)

Get all accounts



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the account

apiInstance.getAllAccounts(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the account | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAccountById"></a>
# **updateAccountById**
> updateAccountById(userId, body)

Update account by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AccountsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Account(); // Account | Account object that needs to be updated

apiInstance.updateAccountById(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Account**](Account.md)| Account object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

