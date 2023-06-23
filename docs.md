# Documentation

All information about Electron APP Demos such as folder structure, UI terminology, CSS naming convention or adding a section or demo can be found on this [website](https://github.com/electron/electron-api-demos/blob/master/docs.md).   

The Electron App Demos application has been extended to connect to a SOAP server and receive responses from it.  
Below you can find information about files that have been added. 

### `assets`

- `credentials.js` - file with function that saving login and password using sessionStorage in order to remember them in case of refreshing the application.

- `tabs.js` - file with function that adds tabs in reports html files.

- `togglePassword.js` - file with function that toggle between password visibility.

- `include-html.js` - file with function that include HTML snippets in HTML.

### `sections`

- `identityDescriptor.html` - file with Identity Decryption group (user name, password and user id) used for all reports.

- `soapService.js` - file with function that creates a connection to the Soap server, creates a soap client and sends the form data to the given endpoint. The response from the server is returned in two ways: in the form of a table and in the XML format.

- `config.js` - file with declaration of endpoints and a function that returns the selected one.

### `wsdl`

This directory to place the WSDL files 
