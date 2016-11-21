# dropbox authentication

In this document I explain how to:

* Allow your application to connect with dropbox


* Authenticate a dropbox user
* Access their files and display them in a list

## Step 1: Making a dropbox app

To let any application talk to dropbox, you need to make a dropbox app first (not to be confused with the application itself - a dropbox app exists within your dropbox account). You can make an app by going to [dropbox for developers]. Click 'My apps' in the menu on the left, and then click 'create app'. After making an app you can view your created app in the 'My apps' menu. Click the app you just created. There should be a field called 'App key'. We'll need this key later on. Also, add the URIs you'll be using dropbox on to Redirect URIs. We can only redirect to these URIs after authenticating with dropbox.

## Step 2: Add required npm package 

While in your project directory, type `npm install dropbox --save` to install the dropbox package and add it to package.json.

## Step 3: Write the javascript code

You can use the code in index.js as a reference. All functions are explained in comments, but I will further explain what the code does step for step.

First it checks if the user is authenticated yet.

* If the user is authenticated:

  * It creates a new Dropbox object using the access token
  * It retrieves all files in the top folder (the top folder, in this case, being Apps/Readable Reader because we only gave our app permission to use a single folder)
  * It prints the file names in the chosen div

* If the user isn't authenticated:

  * It creates a new Dropbox object using not an access token, but the app key of the application that wants permission to access the users dropbox folder
  * It creates an anchor element to the authentication page of the dropbox object and tells it to redirect back to localhost:8080 (the current page, in this case) after authenticating
  * It prints the anchor element in a div

  ​