//Suppose you have a html page and in the html code you have defined a <script src="script.js" ></script>
//Browser will parse the html line by line and when it will see a script tag,it will fetch it from network and execute then and there.
//then again html parsing will start when the script is fully executed.
//there is a pause duration during the execution of the script and it is blocking the html render on the page.
//Pause duration here is== time to fetch js file from network+ executing it.

//what if you use an async attribute on script
// <script async src="script.js" ></script>
// Here fetching the js file from netowrk happpens in parallal with the html parsing.
// Only it takes the pause when you are executing the script 
//once the script is executed fully ,it will again start parsing the html.
//Pause duration here is== executing the js file fetched using network calls.

//what if you use defer attribute on script
// <script defer src="script.js" ></script>
//Here the html parsing continues in parallal with script fetching from network.
//after the html parsing is completed then only the script with defer tag will be executed.
//This is the main difference where in other cases your browser html renderation is paused to execute script.

//when to use what?
//async attribute does not gurantee the order of execution of the scripts but defer does
//if you have multiple scripts which are interpendent on each other's order of execution please use defer not async.
//if you have to add an external script like google analytics you can use async .