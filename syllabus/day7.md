## [30 minutes] Morning challenge

## [30 minutes] Follow-up to `class` concepts
- the keyword `this`
- Subclassing with `extends` for both function and class declarations https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends

## [90 minutes] Continue with React Tutorial
- Review the starter code provided by Facebook: https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code
- Pass data through props: parent-child relationship
	* props are accessed in the child by `this.props`, where `this` refers to the child object
- Make a component interactive using the `onclick` functionality of the button
	* Do you remember this from jQuery? 
- Introducing state: 
	* React components can have a local state set in the constructor function (what is called when the component is created)
	* state is accessed by `this.state`

## [60 minutes] Build small React application in pairs using create-react-app tutorial
- Get the application started following these instructions: https://www.codecademy.com/articles/how-to-create-a-react-app
- Create an input for selecting a language: English or Arabic
- Create one child component within `App` that says "Hello" in English or Arabic
- If time, create a second child component within `App` that tells the user what time it is in their language 
	* Make a call to the `curl "http://worldtimeapi.org/api/ip"` api and retrieve time for the user's location, based on their IP address

## [30 minutes] BREAK - Walk in sunshine and go to Zuwadeh together