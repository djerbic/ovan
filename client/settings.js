/*jslint indent: 2, plusplus: true*/
/*globals $, window*/
"use strict";

function wrapInTableCell(object) {
  return $('<td></td>').append(object);
}

function createRowObjectFromJump(jump) {
  var
    keywordText = $('<input type="text"></input>'),
    formatStringText = $('<input type="text"></input>'),
    removeButton = $('<input type="button" value="Remove" onclick="removeClicked()">'),
    saveButton = $('<input type="button" value="Save" onclick="saveClicked()">'),
    row = $('<tr></tr>');

  keywordText.val(jump.keyword);
  formatStringText.val(jump.formatString);

  row.append(wrapInTableCell(keywordText));
  row.append(wrapInTableCell(formatStringText));
  row.append(wrapInTableCell(saveButton).append(removeButton));

  row.jump = jump;

  return row;
}

function uid() {
  return window.location.search.substr(5);
}

function urlForMethodName(methodName) {
  var baseURL = 'ovan.jit.su';
  return baseURL + '/' + methodName;
}

function addNewClicked() {
  console.log("add new clicked");
}

function removeClicked() {
  
}

function saveClicked() {
  var
    row = $(this).parent().parent(),
    jump = row.jump;
  
  console.log($(this).parent());
  console.log(jump);
}

function removeJump(keyword, callback) {
  $.post(urlForMethodName('delete'), callback);
}

function saveJump(jump, callback) {
  $.post(urlForMethodName('save'), callback);
}

function getList(callback) {
  callback(JSON.parse('[\
    {\
        "keyword": "yt",\
        "nArgs": 2,\
        "formatString": "youtube.com/%1/?q=%2"\
    },\
    {\
        "keyword": "fb",\
        "nArgs": 1,\
        "formatString": "facebook.com/?uid=%1"\
    }]'));
//  $.getJSON('https://dl.dropbox.com/s/v2j92yd80qdn5b9/list.json', callback);
}

$(function () {
  getList(function (data) {
    var
      i,
      row,
      lastRow = $("#lastRow");

    for (i = 0; i < data.length; ++i) {
      row = createRowObjectFromJump(data[i]);
      lastRow.before(row);
    }
  });
});

