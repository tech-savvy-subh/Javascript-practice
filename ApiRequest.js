const xhr = new XMLHttpRequest(); //created a variable for sending api req
const requesturl = "https://api.github.com/users/tech-savvy-subh";
xhr.open("GET", requesturl); //opening an open request to the above url
xhr.send(); //sending that request
xhr.onreadystatechange = function() { //this function will track the readystate
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {//once the state is 4
    const data = JSON.parse(this.responseText); //converting he response received in sring format to Object format suing JSON.parse
    console.log(typeof data);
    console.log(data.company); //rendering the data
  }
};

//These below are the states of readyState these values indicate on which state API Req is now
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.
