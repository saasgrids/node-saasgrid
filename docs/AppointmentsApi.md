# crms.AppointmentsApi

All URIs are relative to *https://api.saasgrids.com/apis/crms/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAppointment**](AppointmentsApi.md#createAppointment) | **POST** /{userId}/appointments | Creates a new appointment
[**deleteAppointmentsById**](AppointmentsApi.md#deleteAppointmentsById) | **DELETE** /{userId}/appointments/{appointmentId} | Delete appointments by Id
[**getAllAppointments**](AppointmentsApi.md#getAllAppointments) | **GET** /{userId}/appointments | Get all appointments
[**getAppointmentById**](AppointmentsApi.md#getAppointmentById) | **GET** /{userId}/appointments/{appointmentId} | Get appointment by Id
[**updateAppointmentById**](AppointmentsApi.md#updateAppointmentById) | **PUT** /{userId}/appointments/{appointmentId} | Update appointment by Id


<a name="createAppointment"></a>
# **createAppointment**
> createAppointment(userId, body)

Creates a new appointment



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AppointmentsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Appointment(); // Appointment | Appointments object that needs to be created

apiInstance.createAppointment(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Appointment**](Appointment.md)| Appointments object that needs to be created | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAppointmentsById"></a>
# **deleteAppointmentsById**
> deleteAppointmentsById(userId)

Delete appointments by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AppointmentsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

apiInstance.deleteAppointmentsById(userId).then(function() {
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

<a name="getAllAppointments"></a>
# **getAllAppointments**
> [Appointment] getAllAppointments(userId, email)

Get all appointments



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AppointmentsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var email = "email_example"; // String | Email id related to appointment

apiInstance.getAllAppointments(userId, email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **email** | **String**| Email id related to appointment | 

### Return type

[**[Appointment]**](Appointment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppointmentById"></a>
# **getAppointmentById**
> Appointment getAppointmentById(userId, appointmentId)

Get appointment by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AppointmentsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var appointmentId = "appointmentId_example"; // String | ObjectId of appointment

apiInstance.getAppointmentById(userId, appointmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **appointmentId** | **String**| ObjectId of appointment | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAppointmentById"></a>
# **updateAppointmentById**
> updateAppointmentById(userId, body)

Update appointment by Id



### Example
```javascript
var crms = require('saasgrids');
var defaultClient = crms.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new crms.AppointmentsApi();

var userId = "userId_example"; // String | User instance id returned from saasgrids after authorization

var body = new crms.Appointment(); // Appointment | Appointment object that needs to be updated

apiInstance.updateAppointmentById(userId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User instance id returned from saasgrids after authorization | 
 **body** | [**Appointment**](Appointment.md)| Appointment object that needs to be updated | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

