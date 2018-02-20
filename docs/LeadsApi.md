# crms.LeadsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLead**](LeadsApi.md#createLead) | **POST** /{userId}/leads | Creates a new lead
[**deleteLeadById**](LeadsApi.md#deleteLeadById) | **DELETE** /{userId}/leads/{leadId} | Delete lead by Id
[**getAllLeads**](LeadsApi.md#getAllLeads) | **GET** /{userId}/leads | Get all leads
[**getLeadById**](LeadsApi.md#getLeadById) | **GET** /{userId}/leads/{leadId} | Get lead by Id
[**getLeadFilters**](LeadsApi.md#getLeadFilters) | **GET** /{userId}/leads/filters | Get all lead filters
[**getLeadsByFilter**](LeadsApi.md#getLeadsByFilter) | **GET** /{userId}/leads/filters/{filterId} | Get all leads by filter
[**updateLeadById**](LeadsApi.md#updateLeadById) | **PUT** /{userId}/leads/{leadId} | Update lead by Id


<a name="createLead"></a>
# **createLead**
> Lead createLead(userId, body)

Creates a new lead



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Lead(); // Lead | Lead object that needs to be created

apiInstance.createLead(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Lead**](Lead.md)| Lead object that needs to be created | 

### Return type

[**Lead**](Lead.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLeadById"></a>
# **deleteLeadById**
> deleteLeadById(userId)

Delete lead by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteLeadById(userId).then(function() {
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

<a name="getAllLeads"></a>
# **getAllLeads**
> InlineResponse2001 getAllLeads(userId, email)

Get all leads



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the lead

apiInstance.getAllLeads(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the lead | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLeadById"></a>
# **getLeadById**
> Lead getLeadById(userId, leadId)

Get lead by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var leadId = "leadId_example"; // String | ObjectId of lead

apiInstance.getLeadById(userId, leadId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **leadId** | **String**| ObjectId of lead | 

### Return type

[**Lead**](Lead.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLeadFilters"></a>
# **getLeadFilters**
> InlineResponse2002 getLeadFilters(userId)

Get all lead filters



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.getLeadFilters(userId).then(function(data) {
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

<a name="getLeadsByFilter"></a>
# **getLeadsByFilter**
> InlineResponse2001 getLeadsByFilter(userId, filterId)

Get all leads by filter



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var filterId = "filterId_example"; // String | ObjectId of  filter

apiInstance.getLeadsByFilter(userId, filterId).then(function(data) {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLeadById"></a>
# **updateLeadById**
> updateLeadById(userId, body)

Update lead by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.LeadsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Lead(); // Lead | Lead object that needs to be updated

apiInstance.updateLeadById(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Lead**](Lead.md)| Lead object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

