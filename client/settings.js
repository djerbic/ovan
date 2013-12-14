/*jslint indent: 2, plusplus: true*/
/*globals $*/
"use strict";

function addNewClicked() {
}

function removeSetting(keyword, callback) {
}

function saveSetting(setting, callback) {
}

function urlForMethodName(methodName) {
  var baseURL = 'ovan.jit.su';
  return baseURL + '/' + methodName;
}

function getList(callback) {
  $.get(urlForMethodName('list'), callback);
}

function uid() {
  return document.location.blabla;
}

