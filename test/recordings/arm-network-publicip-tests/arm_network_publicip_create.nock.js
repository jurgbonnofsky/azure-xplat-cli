// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31951',
  'x-ms-request-id': '01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'x-ms-correlation-request-id': '01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090351Z:01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:51 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31951',
  'x-ms-request-id': '01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'x-ms-correlation-request-id': '01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090351Z:01afe965-55e5-4ed2-ae27-4433ff8b0ec7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:51 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-request-id': '4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'x-ms-correlation-request-id': '4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090353Z:4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-request-id': '4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'x-ms-correlation-request-id': '4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090353Z:4b1cf31a-6d9a-4f3a-94bc-6e24a7b555c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'de946c9a-ba38-447b-b519-81674713c834',
  'x-ms-correlation-request-id': 'de946c9a-ba38-447b-b519-81674713c834',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090355Z:de946c9a-ba38-447b-b519-81674713c834',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:54 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'de946c9a-ba38-447b-b519-81674713c834',
  'x-ms-correlation-request-id': 'de946c9a-ba38-447b-b519-81674713c834',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090355Z:de946c9a-ba38-447b-b519-81674713c834',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:03:54 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"20df3b45-76b9-49a9-8607-69289a64897c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1159\",\r\n      \"fqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '594',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd03396eb-c0b2-41ef-a2e0-e7bd298a1352',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d03396eb-c0b2-41ef-a2e0-e7bd298a1352?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '972f443d-7320-460a-93ec-5e824f90134c',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090401Z:972f443d-7320-460a-93ec-5e824f90134c',
  date: 'Mon, 27 Apr 2015 09:04:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"20df3b45-76b9-49a9-8607-69289a64897c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1159\",\r\n      \"fqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '594',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd03396eb-c0b2-41ef-a2e0-e7bd298a1352',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d03396eb-c0b2-41ef-a2e0-e7bd298a1352?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '972f443d-7320-460a-93ec-5e824f90134c',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090401Z:972f443d-7320-460a-93ec-5e824f90134c',
  date: 'Mon, 27 Apr 2015 09:04:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d03396eb-c0b2-41ef-a2e0-e7bd298a1352?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '863742e7-485a-4c93-be39-75c142b4279b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '223edd3f-40a2-477d-bd22-a9effd9fb815',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090412Z:223edd3f-40a2-477d-bd22-a9effd9fb815',
  date: 'Mon, 27 Apr 2015 09:04:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d03396eb-c0b2-41ef-a2e0-e7bd298a1352?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '863742e7-485a-4c93-be39-75c142b4279b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '223edd3f-40a2-477d-bd22-a9effd9fb815',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090412Z:223edd3f-40a2-477d-bd22-a9effd9fb815',
  date: 'Mon, 27 Apr 2015 09:04:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"aba92385-6bf3-47f1-b590-b506697fc4ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.125.138\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1159\",\r\n      \"fqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aba92385-6bf3-47f1-b590-b506697fc4ae"',
  'x-ms-request-id': '815d5376-1672-43cf-9874-e5f199c22aa7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31949',
  'x-ms-correlation-request-id': '6bafe14e-0f88-4834-85e6-60b0e1505e62',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090413Z:6bafe14e-0f88-4834-85e6-60b0e1505e62',
  date: 'Mon, 27 Apr 2015 09:04:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip3036\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip3036\",\r\n  \"etag\": \"W/\\\"aba92385-6bf3-47f1-b590-b506697fc4ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.125.138\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1159\",\r\n      \"fqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aba92385-6bf3-47f1-b590-b506697fc4ae"',
  'x-ms-request-id': '815d5376-1672-43cf-9874-e5f199c22aa7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31949',
  'x-ms-correlation-request-id': '6bafe14e-0f88-4834-85e6-60b0e1505e62',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090413Z:6bafe14e-0f88-4834-85e6-60b0e1505e62',
  date: 'Mon, 27 Apr 2015 09:04:12 GMT',
  connection: 'close' });
 return result; }]];