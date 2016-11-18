options = {

    // Required. Called when a user selects an item in the Chooser.
    success: function(files) {
        console.log(files[0].link);
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open("GET", files[0].link);
        // xmlHttp.onload = function(res) {
        //     console.log(res);
        // };
        // xmlHttp.send(null);
    },
    linkType: "direct" // or "direct"
};

var button = Dropbox.createChooseButton(options);
document.getElementById("buttonDiv").appendChild(button);

