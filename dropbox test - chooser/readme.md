# The Dropbox Chooser
### Introduction
In this document I will explain what the dropbox chooser is, and how to use it.

### What is it?
The dropbox chooser is a ready-to-use javascript component provided by dropbox. It allows the user to select one or multiple files from their dropbox folder without giving the app access to their dropbox account. This is because all authentication happens within the dropbox chooser popup window, which communicates directly with the dropbox servers. The only thing the application will get access to, is the download link to the file or files the user picked.

### What is it not?
The dropbox chooser is not a complete way to access someone's dropbox: You can't upload files, you can't access other files than the ones selected by the user, and you can't access any user details.

### Before you start coding
To let any application talk to dropbox, you need to make a dropbox app first (not to be confused with the application itself - a dropbox app exists within your dropbox account). You can make an app by going to [dropbox for developers]. Click 'My apps' in the menu on the left, and then click 'create app'. After making an app you can view your created app in the 'My apps' menu. Click the app you just created. There should be a field called 'App key'. We'll need this key later on.

### Javascript code

##### Npm packages

You don't need any npm packages.

##### In your HTML

Add the following line to your HTML (anywhere will do):

```
<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="YOUR_KEY_HERE"></script>
```

Replace YOUR_KEY_HERE by the app key mentioned in the previous chapter.

Also, make sure there's a div with a unique id for your button to go (if you're using React, this might be within a component, and not in any of your actual HTML).

##### In your index.js 

*...or anywhere else - as long as the code is executed when you want your button!*

######To make a pre-styled button:

Create the button by adding the following code:

```javascript
var button = Dropbox.createChooseButton(options);
document.getElementById("buttonDiv").appendChild(button);
```

This code alone won't make a working dropbox chooser; You need to provide an options-object. The options object used in the example code is super simple:

```javascript
options = {
    success: function(files) {
        console.log("Link files[0].link);
    },
    linkType: "direct"
};
```

There are a lot more properties than just `success` and `linkType`, though. Here's a list of all available properties:

* **success**: the callback that is called when the user succesfully picked one or several files. the 'files' parameter is an array of files. What a file-object looks like is decribed below.
* **cancel (opt.)**: the callback that is called when the user presses cancel, rather than selecting a file
* **linkType (opt.)**: the type of link to the selected file. The default option is preview: a link to the file for sharing and displaying on dropbox. The other possible option is 'direct': a direct link that downloads the file itself.
* **multiselect (opt.)**: whether the user can select more than one file. The default value is false.
* **extensions (opt.)**: An array of accepted file extensions (for example: `['.epub', '.docx']`). Only the files with these extensions will be shown to the user. By default, all extensions are allowed.

Following is an example of what a file-object looks like:

```javascript
file = {
    name: "filename.txt",
    link: "https://...",
    bytes: 464,
    icon: "https://...",
    thumbnailLink: "https://...?bounding_box=75&mode=fit",
    isDir: false,
};
```

Properties:

* **name**: the name of the file;
* **link**: either a download link, or a link to the preview (depending on options);
* **bytes**: file size;
* **icon**: the url to a 64x64px icon, based on the file's extension;
* **thumbnailLink**: A thumbnail URL, possibly with more information in the query. Only available for image or video files;
* **isDir**: is true when the file is a directory.

######To make a custom button:

To make a custom button, skip creating the button in the above instructions and call  `Dropbox.choose(options);` to directly open the chooser instead. The rest of the instructions still apply.

### References

[dropbox for developers]:http://www.dropbox.com/developers/