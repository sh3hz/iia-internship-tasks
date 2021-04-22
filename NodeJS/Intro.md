# Node.js

- Node.js uses JavaScript on the server and uses asynchronous programming
- how Node.js handles a file request :
    Sends the task to the computer's file system.
    Ready to handle the next request.
    When the file system has opened and read the file, the server returns the content to the client.
- Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
- What Can Node.js Do :
    Node.js can generate dynamic page content
    Node.js can create, open, read, write, delete, and close files on the server
    Node.js can collect form data
    Node.js can add, delete, modify data in your database
    
### Globals 
 Setting a property to this namespace makes it globally visible within the running process.
- __dirname - path to current directory
- __filename - file name
- require - function to use modules

### REPL - Read-Eval-Print Loop
- It is the Node.js interactive shell; any valid JavaScript which can be written in a script can be passed to the REPL. It can be extremely useful for experimenting with Node.js, debugging code, and figuring out some of JavaScript's more eccentric behaviors.

### NPM - Node Package Manager
- NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use. The NPM program is installed on your computer when you install Node.js

