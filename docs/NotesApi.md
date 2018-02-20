# crms.NotesApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](NotesApi.md#createNote) | **POST** /{userId}/notes | Creates a new note
[**deleteNoteById**](NotesApi.md#deleteNoteById) | **DELETE** /{userId}/note/{noteId} | Delete note by Id
[**getAllNotes**](NotesApi.md#getAllNotes) | **GET** /{userId}/notes | Get all notes
[**getNoteById**](NotesApi.md#getNoteById) | **GET** /{userId}/note/{noteId} | Get note by Id
[**updateNoteById**](NotesApi.md#updateNoteById) | **PUT** /{userId}/note/{noteId} | Update note by Id


<a name="createNote"></a>
# **createNote**
> createNote(userId, body)

Creates a new note



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.NotesApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Note(); // Note | Note object that needs to be created

apiInstance.createNote(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Note**](Note.md)| Note object that needs to be created | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNoteById"></a>
# **deleteNoteById**
> deleteNoteById(userId)

Delete note by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.NotesApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteNoteById(userId).then(function() {
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

<a name="getAllNotes"></a>
# **getAllNotes**
> [Note] getAllNotes(userId, email)

Get all notes



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.NotesApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the note

apiInstance.getAllNotes(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the note | 

### Return type

[**[Note]**](Note.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNoteById"></a>
# **getNoteById**
> Note getNoteById(userId, noteId)

Get note by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.NotesApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var noteId = "noteId_example"; // String | ObjectId of acount

apiInstance.getNoteById(userId, noteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **noteId** | **String**| ObjectId of acount | 

### Return type

[**Note**](Note.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNoteById"></a>
# **updateNoteById**
> updateNoteById(userId, body)

Update note by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.NotesApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Note(); // Note | Note object that needs to be updated

apiInstance.updateNoteById(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Note**](Note.md)| Note object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

