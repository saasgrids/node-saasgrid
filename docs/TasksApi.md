# crms.TasksApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TasksApi.md#createTask) | **POST** /{userId}/tasks | Creates a new task
[**deleteTaskById**](TasksApi.md#deleteTaskById) | **DELETE** /{userId}/tasks/{taskId} | Delete task by Id
[**getAllTasks**](TasksApi.md#getAllTasks) | **GET** /{userId}/tasks | Get all tasks
[**getTaskById**](TasksApi.md#getTaskById) | **GET** /{userId}/tasks/{taskId} | Get task by Id
[**updateTaskById**](TasksApi.md#updateTaskById) | **PUT** /{userId}/tasks/{taskId} | Update task by Id


<a name="createTask"></a>
# **createTask**
> Task createTask(userId, body)

Creates a new task



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.TasksApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Task(); // Task | Task object that needs to be created

apiInstance.createTask(userId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Task**](Task.md)| Task object that needs to be created | 

### Return type

[**Task**](Task.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTaskById"></a>
# **deleteTaskById**
> deleteTaskById(userId, taskId)

Delete task by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.TasksApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var taskId = "taskId_example"; // String | ObjectId of task to be deleted

apiInstance.deleteTaskById(userId, taskId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **taskId** | **String**| ObjectId of task to be deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTasks"></a>
# **getAllTasks**
> [Task] getAllTasks(userId, email)

Get all tasks



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.TasksApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id of the task

apiInstance.getAllTasks(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id of the task | 

### Return type

[**[Task]**](Task.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskById"></a>
# **getTaskById**
> Task getTaskById(userId, taskId)

Get task by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.TasksApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var taskId = "taskId_example"; // String | ObjectId of task

apiInstance.getTaskById(userId, taskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **taskId** | **String**| ObjectId of task | 

### Return type

[**Task**](Task.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaskById"></a>
# **updateTaskById**
> updateTaskById(userId, body, taskId)

Update task by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.TasksApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Task(); // Task | Task object that needs to be updated

var taskId = "taskId_example"; // String | ObjectId of task to be deleted

apiInstance.updateTaskById(userId, body, taskId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Task**](Task.md)| Task object that needs to be updated | 
 **taskId** | **String**| ObjectId of task to be deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

