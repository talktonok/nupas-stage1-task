
const axios = require("axios");
require('dotenv').config();
const key = process.env.XRapidAPIKey;
const link = process.env.API_URI
const host = process.env.XRapidAPIHost


function autoSearchServ(search){
  const options = {
    method: 'GET',
    url: `${link}/auto-complete`,//'https://yummly2.p.rapidapi.com/feeds/auto-complete',
    params: {q: search},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };      
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response
      }).catch(function (error) {
          console.error(error);
      });
}
function searchServ(search){
  const options = {
    method: 'GET',
    url: `${link}/feeds/search`,
    params: {
      start: '0',
      maxResult: '18',
      maxTotalTimeInSeconds: '7200',
      q: search,
      allowedAttribute: 'diet-lacto-vegetarian,diet-low-fodmap',
      FAT_KCALMax: '1000'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response
      }).catch(function (error) {
          console.error(error);
      });
}

function listServ(){
  const options = {
    method: 'GET',
    url: `${process.env.API_URI}/feeds/list`,
    params: {limit: '24', start: '0'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response
      }).catch(function (error) {
          console.error(error);
      });
}

function listSimilaritiesServ(){
  const options = {
    method: 'GET',
    url: `${link}/feeds/list-similarities`,
    params: {
      limit: '18',
      start: '0',
      id: '15-Minute-Baked-Salmon-with-Lemon-9029477',
      apiFeedType: 'moreFrom',
      authorId: 'Yummly'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response
      }).catch(function (error) {
          console.error(error);
      });
}

function tagListServ(){
    const options = {
      method: 'GET',
      url: `${link}/tags/list`,
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': host
      }
    };
      axios.request(options).then(function (response) {
          console.log(response.data);
          return response
      }).catch(function (error) {
          console.error(error);
      });
}

function categoryListServ(){
  const options = {
    method: 'GET',
    url: `${link}/categories/list`,
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };
    axios.request(options).then(function (response) {
        console.log(response.data);
        return response
    }).catch(function (error) {
        console.error(error);
    });
};

function reviewListServ(){
  const options = {
    method: 'GET',
    url: `${link}/reviews/list`,
    params: {offset: '0', globalId: 'a8d6747a-bfaa-46a7-92fb-892e3f76b264', limit: '20'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
  };
    axios.request(options).then(function (response) {
        console.log(response.data);
        return response
    }).catch(function (error) {
        console.error(error);
    });
};

module.exports = {
  autoSearchServ,
  searchServ, 
  listServ, 
  listSimilaritiesServ, 
  tagListServ, 
  categoryListServ,
  reviewListServ
}