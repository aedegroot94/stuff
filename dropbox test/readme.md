# The Dropbox Chooser
### Introduction
In this document I will explain what the dropbox chooser is, and how to use it.

### What is it?
The dropbox chooser is a ready-to-use javascript component provided by dropbox. It allows the user to select one or multiple files from their dropbox folder without giving the app access to their dropbox account. This is because all authentication happens within the dropbox chooser popup window, which communicates directly with the dropbox servers. The only thing the application will get access to, is the download link to the file or files the user picked.

### Before you start coding
To let any application talk to dropbox, you need to make a dropbox app first (not to be confused with the application itself - a dropbox app exists within your dropbox account). You can make an app by going to [dropbox for developers]. Click 'My apps' in the menu on the left, and then click 'create app'. After making an app you can view your created app in the 'My apps' menu. Click the app you just created. There should be a field called 'App key'. We'll need this key later on.

### Javascript code

##### Npm packages

We don't need any npm packages.

##### In your HTML

Add the following line to your HTML (anywhere will do):

```
<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="qrrtkc1z2y0g7qy"></script>
```

Also, make sure there's a div with a unique id for your button to go (if you're using React, this might be within a component, and not in any of your actual HTML).

##### In your index.js 

*...or anywhere else - as long as the code is executed when you want your button!*

######To make a pre-styled button:

Create the button by adding the following code:

```javascript
var button = Dropbox.createChooseButton(options);
document.getElementById("buttonDiv").appendChild(button);
```


######To make a custom button:

### References

[dropbox for developers]:http://www.dropbox.com/developers/