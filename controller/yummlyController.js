
const {
  autoSearchServ,
  searchServ, 
  listServ, 
  listSimilaritiesServ, 
  tagListServ, 
  categoryListServ,
  reviewListServ
} = require('../services/yummlyService');
 const util = require('../utils/util');

 async function autoSearch (req, res){
    try {
      const allAutoSearch = await autoSearchServ;
      if (allAutoSearch.length > 0) {
        util.setSuccess(200, 'success', allAutoSearch);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };

  async function search (req, res){
    try {
      const search = await searchServ;
      if (search.length > 0) {
        util.setSuccess(200, 'success', search);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };

  async function list (req, res){
    try {
      const list = await listServ;
      if (list.length > 0) {
        util.setSuccess(200, 'success', list);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };
  async function listSimilarities (req, res){
    try {
      const listSimilarities = await listSimilaritiesServ;
      if (listSimilarities.length > 0) {
        util.setSuccess(200, 'success', listSimilarities);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };
  async function tagList (req, res){
    try {
      const tagList = await tagListServ;
      if (tagList.length > 0) {
        util.setSuccess(200, 'success', tagList);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };
  async function categoryList (req, res){
    try {
      const categoryList = await categoryListServ;
      if (search.length > 0) {
        util.setSuccess(200, 'success', categoryList);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  };

  async function reviewList (req, res){
    try {
      const reviewList = await reviewListServ;
      if (reviewList.length > 0) {
        util.setSuccess(200, 'success', reviewList);
      } else {
        util.setSuccess(200, 'No data found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  module.exports = 
  {
    autoSearch,
    search, 
    list, 
    listSimilarities, 
    tagList, 
    categoryList,
    reviewList
  }