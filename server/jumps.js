/*jslint indent: 2, plusplus: true*/
"use strict";

var
  config = {
    default_engine_for_all_users = "https://www.google.com/search?q=%s"
  };

exports.Jumps = function () {

  /**
   * returns current jumps for this user as array of documents.
   * first jump is always (keyword===null), but it may have uid null also.
   */
  this.list = function (uid) {
    // mock it up for now.
    return [
      {
        uid : null,
        keyword : null,
        url : config.default_engine_for_all_users,
        atime : new Date()
      },
      {
        uid : uid,
        keyword : "g",
        url : config.default_engine_for_all_users
        atime : new Date(),
      },
      {
        uid : uid,
        keyword : "wa",
        url : "https://wolframalpha.com/?q=%s",
        atime : new Date(),
      },
    ];
  };

  /*
   * returns one document from db. this is used when user tries to search
   * something.
   *
   * returned document may have keyword set to null.
   *  -> if for that user (uid) there is no keyword match.
   * returned document may have keyword and uid set to null.
   *  -> if uid doesn't exists 
   */
  this.get = function (uid, keyword) {
    // SELECT * FROM jumps WHERE
    //  (uid = % OR uid IS NULL) and (keyword = % OR keyword IS NULL);
    //
    // if there is a row with not null uid and not null keyword,
    // that row is returned. (this is a keyword match)
    //
    // if there is a row with not null uid, that row is returned.
    // (this is a default fallback for that user)
    //
    // if there is a row (assert uid=null, keyword=null), return
    // that row. (this is a default fallback for all users)
    //
    // if there is no rows in return set, add new row with default
    // search engine for all users (uid=NULL,keyword=NULL) and return it.

    // mock it for now.
    return {
      uid : null,
      keyword : null,
      url : config.default_engine_for_all_users
      atime : new Date(),
    };
  };

};
