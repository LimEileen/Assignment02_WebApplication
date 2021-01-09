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
  getGroup04Img(token);
  getGroup05Img(token);
  getTopPlaylists(token);
  getTopPlaylists02(token);
  getTopPlaylists03(token);
  getTopPlaylists04(token);
  getTopPlaylists05(token)
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
    //console.log(response.images[2].url);
    $("#btsbtn").html(`<img src="${response.images[2].url}">`);
    $("#btsimg").html(`<img src="${response.images[2].url}">`);
    $("#btsfollowers").html(`Spotify Followers:${response.followers.total}`);
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
    //console.log(response.images[2].url);
    $("#txtbtn").html(`<img src="${response.images[2].url}">`);
    $("#txtimg").html(`<img src="${response.images[2].url}">`);
    $("#txtfollowers").html(`Spotify Followers:${response.followers.total}`);
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
    //console.log(response.images[2].url);
    $("#enhypenbtn").html(`<img src="${response.images[2].url}">`);
    $("#enhypenimg").html(`<img src="${response.images[2].url}">`);
    $("#enhypenfollowers").html(`Spotify Followers:${response.followers.total}`);
  });
}



function getGroup04Img(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //console.log(response.images[2].url);
    $("#svtbtn").html(`<img src="${response.images[2].url}">`);
    $("#svtimg").html(`<img src="${response.images[2].url}">`);
    $("#svtfollowers").html(`Spotify Followers:${response.followers.total}`);
  });
}





function getGroup05Img(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/0qlWcS66ohOIi0M8JZwPft",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //console.log(response.images[2].url);
    $("#gfbtn").html(`<img src="${response.images[2].url}">`);
    $("#gfimg").html(`<img src="${response.images[2].url}">`);
    $("#gffollowers").html(`Spotify Followers:${response.followers.total}`);
  });
}



function getTopPlaylists(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX/top-tracks?market=SK",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //[cher]
  
    console.log(response.tracks[0].external_urls.spotify)
    
    
    //console.log(response.tracks.album);
    $("#btssongs").html(`${response.tracks[0].name}`);
    $("#btsname").html(`${response.tracks[0].artists[0].name}`);
    $("#btspopularity").html(`${response.tracks[0].popularity}`);
    $("#btssongs2").html(`${response.tracks[1].name}`);
    $("#btsname2").html(`${response.tracks[1].artists[0].name}`);
    $("#btspopularity2").html(`${response.tracks[1].popularity}`);
    $("#btssongs3").html(`${response.tracks[2].name}`);
    $("#btsname3").html(`${response.tracks[2].artists[0].name}`);
    $("#btspopularity3").html(`${response.tracks[2].popularity}`);
    $("#btssongs4").html(`${response.tracks[3].name}`);
    $("#btsname4").html(`${response.tracks[3].artists[0].name}`);
    $("#btspopularity4").html(`${response.tracks[3].popularity}`);
    $("#btssongs5").html(`${response.tracks[4].name}`);
    $("#btsname5").html(`${response.tracks[4].artists[0].name}`);
    $("#btspopularity5").html(`${response.tracks[4].popularity}`);
  });
}





function getTopPlaylists02(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/0ghlgldX5Dd6720Q3qFyQB/top-tracks?market=SK",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //[cher]
  
      //console.log(response.tracks[0].name)
    
    
    //console.log(response.tracks.album);
    $("#txtsongs").html(`${response.tracks[0].name}`);
    $("#txtname").html(`${response.tracks[0].artists[0].name}`);
    $("#txtpopularity").html(`${response.tracks[0].popularity}`);
    $("#txtsongs2").html(`${response.tracks[1].name}`);
    $("#txtname2").html(`${response.tracks[1].artists[0].name}`);
    $("#txtpopularity2").html(`${response.tracks[1].popularity}`);
    $("#txtsongs3").html(`${response.tracks[2].name}`);
    $("#txtname3").html(`${response.tracks[2].artists[0].name}`);
    $("#txtpopularity3").html(`${response.tracks[2].popularity}`);
    $("#txtsongs4").html(`${response.tracks[3].name}`);
    $("#txtname4").html(`${response.tracks[3].artists[0].name}`);
    $("#txtpopularity4").html(`${response.tracks[3].popularity}`);
    $("#txtsongs5").html(`${response.tracks[4].name}`);
    $("#txtname5").html(`${response.tracks[4].artists[0].name}`);
    $("#txtpopularity5").html(`${response.tracks[4].popularity}`);
  });
}




function getTopPlaylists03(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/5t5FqBwTcgKTaWmfEbwQY9/top-tracks?market=SK",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //[cher]
  
      //console.log(response.tracks[0].name)
    
    
    //console.log(response.tracks.album);
    $("#enhypensongs").html(`${response.tracks[0].name}`);
    $("#enhypenname").html(`${response.tracks[0].artists[0].name}`);
    $("#enhypenpopularity").html(`${response.tracks[0].popularity}`);
    $("#enhypensongs2").html(`${response.tracks[1].name}`);
    $("#enhypenname2").html(`${response.tracks[1].artists[0].name}`);
    $("#enhypenpopularity2").html(`${response.tracks[1].popularity}`);
    $("#enhypensongs3").html(`${response.tracks[2].name}`);
    $("#enhypenname3").html(`${response.tracks[2].artists[0].name}`);
    $("#enhypenpopularity3").html(`${response.tracks[2].popularity}`);
    $("#enhypensongs4").html(`${response.tracks[3].name}`);
    $("#enhypenname4").html(`${response.tracks[3].artists[0].name}`);
    $("#enhypenpopularity4").html(`${response.tracks[3].popularity}`);
    $("#enhypensongs5").html(`${response.tracks[4].name}`);
    $("#enhypenname5").html(`${response.tracks[4].artists[0].name}`);
    $("#enhypenpopularity5").html(`${response.tracks[4].popularity}`);
  });
}



function getTopPlaylists04(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH/top-tracks?market=SK",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //[cher]
  
      //console.log(response.tracks[0].name)
    
    
    //console.log(response.tracks.album);
    $("#svtsongs").html(`${response.tracks[0].name}`);
    $("#svtname").html(`${response.tracks[0].artists[0].name}`);
    $("#svtpopularity").html(`${response.tracks[0].popularity}`);
    $("#svtsongs2").html(`${response.tracks[1].name}`);
    $("#svtname2").html(`${response.tracks[1].artists[0].name}`);
    $("#svtpopularity2").html(`${response.tracks[1].popularity}`);
    $("#svtsongs3").html(`${response.tracks[2].name}`);
    $("#svtname3").html(`${response.tracks[2].artists[0].name}`);
    $("#svtpopularity3").html(`${response.tracks[2].popularity}`);
    $("#svtsongs4").html(`${response.tracks[3].name}`);
    $("#svtname4").html(`${response.tracks[3].artists[0].name}`);
    $("#svtpopularity4").html(`${response.tracks[3].popularity}`);
    $("#svtsongs5").html(`${response.tracks[4].name}`);
    $("#svtname5").html(`${response.tracks[4].artists[0].name}`);
    $("#svtpopularity5").html(`${response.tracks[4].popularity}`);
  });
}






function getTopPlaylists05(token) {
  var settings = {
    url: "https://api.spotify.com/v1/artists/0qlWcS66ohOIi0M8JZwPft/top-tracks?market=SK",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  $.ajax(settings).done(function (response) {


    //console.log(images);
    //[cher]
  
      //console.log(response.tracks[0].name)
    
    
    //console.log(response.tracks.album);
    $("#gfsongs").html(`${response.tracks[0].name}`);
    $("#gfname").html(`${response.tracks[0].artists[0].name}`);
    $("#gfpopularity").html(`${response.tracks[0].popularity}`);
    $("#gfsongs2").html(`${response.tracks[1].name}`);
    $("#gfname2").html(`${response.tracks[1].artists[0].name}`);
    $("#gfpopularity2").html(`${response.tracks[1].popularity}`);
    $("#gfsongs3").html(`${response.tracks[2].name}`);
    $("#gfname3").html(`${response.tracks[2].artists[0].name}`);
    $("#gfpopularity3").html(`${response.tracks[2].popularity}`);
    $("#gfsongs4").html(`${response.tracks[3].name}`);
    $("#gfname4").html(`${response.tracks[3].artists[0].name}`);
    $("#gfpopularity4").html(`${response.tracks[3].popularity}`);
    $("#gfsongs5").html(`${response.tracks[4].name}`);
    $("#gfname5").html(`${response.tracks[4].artists[0].name}`);
    $("#gfpopularity5").html(`${response.tracks[4].popularity}`);
  });
}

