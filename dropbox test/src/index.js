options = {

    success: function(files) {
        console.log(files[0].link);
    },
    linkType: "direct"
};

var button = Dropbox.createChooseButton(options);
document.getElementById("buttonDiv").appendChild(button);

