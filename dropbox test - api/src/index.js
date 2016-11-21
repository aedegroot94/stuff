var Dropbox = require('dropbox');

//------------------------------FUNCTIONS------------------------------

//get the access token. This will return if there's no access token yet.
function getAccessToken() {
    return parseQueryString(window.location.hash).access_token;
}

//returns the boolean representation of getAccessToken using not not:
// if there's an access token, getAccessToken returns a string, which is truthy, which returns true.
// if there's no access token, getAccessToken returns undefined, which is falsey, which returns false.
function isAuthenticated() {
    return !!getAccessToken();
}

// I copied this function from the dropbox javascript examples. the string it expects is the location.hash: the portion after # of the current url.
// it parses this part of the url into a usable object.
function parseQueryString(str) {
    var ret = Object.create(null);

    if (typeof str !== 'string') {
        return ret;
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
        return ret;
    }

    str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;

        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (ret[key] === undefined) {
            ret[key] = val;
        } else if (Array.isArray(ret[key])) {
            ret[key].push(val);
        } else {
            ret[key] = [ret[key], val];
        }
    });

    return ret;
}

//loops through all files, puts their names in a list item element, and appends the list items to the specified element
function displayFiles(files, element) {
    for (var i = 0; i < files.length; i++) {
        li = document.createElement('li');
        li.appendChild(document.createTextNode(files[i].name));
        element.appendChild(li);
    }
}

//---------------------------------CODE---------------------------------

if (isAuthenticated()) {
    //makes a dropbox object using the accessToken
    var dbx = new Dropbox({ accessToken: getAccessToken() });
    //get all files from the dropbox
    dbx.filesListFolder({path: ''})
        .then(function(response) {
            displayFiles(response.entries, document.getElementById('div'));
        })
        .catch(function(error) {
            console.error(error);
        });
} else {

     var dbx = new Dropbox({ clientId: 'qrrtkc1z2y0g7qy' });


    var authLink = document.createElement('a');
    authLink.innerText = "authenticate";
    authLink.href = dbx.getAuthenticationUrl('http://localhost:8080/');
    document.getElementById('div').appendChild(authLink);

}

