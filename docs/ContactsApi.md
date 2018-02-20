# crms.ContactsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactsApi.md#createContact) | **POST** /{userId}/contacts | Creates a new contact
[**deleteContactById**](ContactsApi.md#deleteContactById) | **DELETE** /{userId}/contacts/{contactId} | Delete contact by Id
[**getContactByFilter**](ContactsApi.md#getContactByFilter) | **GET** /{userId}/contacts/filters/{filterId} | Get all contacts by filter
[**getContactById**](ContactsApi.md#getContactById) | **GET** /{userId}/contacts/{contactId} | Get contact by Id
[**getContactFilters**](ContactsApi.md#getContactFilters) | **GET** /{userId}/contacts/filters | Get all contact filters
[**getContactProperties**](ContactsApi.md#getContactProperties) | **GET** /{userId}/contacts/properties | Get all contact properties
[**getContacts**](ContactsApi.md#getContacts) | **GET** /{userId}/contacts | Get contacts
[**getContactsByEmail**](ContactsApi.md#getContactsByEmail) | **GET** /{userId}/contacts/email/{email} | Get all contacts by email
[**updateContactById**](ContactsApi.md#updateContactById) | **PUT** /{userId}/contacts/{contactId} | Update contact by Id


<a name="createContact"></a>
# **createContact**
> Contact createContact(userId, body)

Creates a new contact



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Contact(); // Contact | Contact object that needs to be created

apiInstance.createContact(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Contact**](Contact.md)| Contact object that needs to be created | 

### Return type

[**Contact**](Contact.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContactById"></a>
# **deleteContactById**
> deleteContactById(userId)

Delete contact by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteContactById(userId).then(function() {
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

<a name="getContactByFilter"></a>
# **getContactByFilter**
> InlineResponse2006 getContactByFilter(userId, filterId, opts)

Get all contacts by filter



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var filterId = "filterId_example"; // String | ObjectId of  filter

var opts = { 
  'limit': "limit_example", // String | Number of records to be fetched
  'skip': "skip_example" // String | Skip value got from previous request, can be empty for first request
};
apiInstance.getContactByFilter(userId, filterId, opts).then(function(data) {
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
 **limit** | **String**| Number of records to be fetched | [optional] 
 **skip** | **String**| Skip value got from previous request, can be empty for first request | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactById"></a>
# **getContactById**
> Contact getContactById(userId, contactId)

Get contact by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var contactId = "contactId_example"; // String | ObjectId of contact

apiInstance.getContactById(userId, contactId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **contactId** | **String**| ObjectId of contact | 

### Return type

[**Contact**](Contact.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactFilters"></a>
# **getContactFilters**
> InlineResponse2005 getContactFilters(userId, opts)

Get all contact filters



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var opts = { 
  'limit': "limit_example", // String | Number of records to be fetched
  'skip': "skip_example" // String | Skip value got from previous request, can be empty for first request
};
apiInstance.getContactFilters(userId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **limit** | **String**| Number of records to be fetched | [optional] 
 **skip** | **String**| Skip value got from previous request, can be empty for first request | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactProperties"></a>
# **getContactProperties**
> InlineResponse2004 getContactProperties(userId)

Get all contact properties



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.getContactProperties(userId).then(function(data) {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> InlineResponse2003 getContacts(userId, contactId)

Get contacts



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var contactId = ["contactId_example"]; // [String] | ObjectIds of contact

apiInstance.getContacts(userId, contactId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **contactId** | [**[String]**](String.md)| ObjectIds of contact | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsByEmail"></a>
# **getContactsByEmail**
> Contact getContactsByEmail(userId, email)

Get all contacts by email



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the contacts

apiInstance.getContactsByEmail(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the contacts | 

### Return type

[**Contact**](Contact.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContactById"></a>
# **updateContactById**
> updateContactById(userId, contactId, body)

Update contact by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.ContactsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var contactId = "contactId_example"; // String | ObjectId of contact to be updated

var body = new crms.Contact(); // Contact | Contact object that needs to be updated

apiInstance.updateContactById(userId, contactId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **contactId** | **String**| ObjectId of contact to be updated | 
 **body** | [**Contact**](Contact.md)| Contact object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

