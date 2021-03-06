# Understanding Web Development

## ⏹️ How browser works ⏹️

#### Major Browsers
- Chrome, MS Edge, Firefox, Safari, Opera etc

#### Main Functionality
- Present the web resource, by requesting it from the server and displaying it in the browser window.

#### High-level architecture of browser
	- User Interface
	- Browser Engine
	- Rendering Engine
	  * Internet Explorer: Trident
	  * Firefox & other Mozilla browsers: Gecko
	  * Chrome & Opera 15+: Blink
	  * Chrome (iPhone) & Safari: Webkit
	- Networking
	- JavaScript Interpreter
	- UI Backend
	- Data Persistence/Storage

#### Rendering Engine
	
##### Main flow
![Image](https://miro.medium.com/max/600/1*cfQpu6Xvb7e9IiH4CCuiCg.png)
	
	
#### HTML Parser
	 - parse the HTML markup into a parse tree. 
	 - The output parse tree is a tree of DOM (Document Object Model) element and attribute nodes.
	 - Parsing Algorithm - Tokenization & Tree construction
	 - Formal format for defining HTML: DTD (Document Type Definition)
![HTML Parsing flow](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/image017.png)
