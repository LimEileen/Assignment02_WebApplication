//[STEP 0]: Fill in your own clientID and secret
const clientId = '4500f049073c43faa80cdfbb2ac0d1ef';
const clientSecret = 'f48e49c3cdb04cd3b2d2548e7c6962a6';

//[STEP 1]: Let's get out token first
let settings = {
  url: "https://accounts.spotify.com/api/token",
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
  },
  data: { grant_type: "client_credentials" },
};

//get access token
$.ajax(settings).done(function (response) {
  console.log(response);
  const data = response;
  let token = data.access_token;

  console.log(token);
  
  //[STEP 2]: With our token, we can access our API 
  getGroupImg(token);
  getGroup02Img(token);
  getGroup03Img(token);
  getTopPlaylists(token);
  //test calls
});


function getGroupImg(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    console.log(response.images[2].url);
    $("#btsbtn").html(`<img src="${response.images[2].url}">`);
    $("#grpimg").html(`<img src="${response.images[1].url}">`);
  });
}

function getGroup02Img(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/0ghlgldX5Dd6720Q3qFyQB",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    console.log(response.images[2].url);
    $("#txtbtn").html(`<img src="${response.images[2].url}">`);
  });
}

function getGroup03Img(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/5t5FqBwTcgKTaWmfEbwQY9",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    console.log(response.images[2].url);
    $("#enhypenbtn").html(`<img src="${response.images[2].url}">`);
  });
}



function getTopPlaylists(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=SE",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    console.log(response.tracks.album);
    $("#songsname").html(`<="${response.name}">`);
  });
}


