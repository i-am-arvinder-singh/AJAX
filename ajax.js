console.log('Ajax Tut')

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('buttonClickhandler! Button is clicked i.e., fetchBtn')

    // Create or instatiate an xhr object
    const xhr = new XMLHttpRequest()
    
    // Open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)//Here async was declared true
    
    //Use this for post request
    xhr.open('POST', ' 	http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type','application/json')

    //What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress')
        //A loader can be implemented here 
    }

    xhr.onreadystatechange = function(){
        console.log('Ready state is',xhr.readyState)
    }

    //0	UNSENT	Client has been created. open() not called yet.
    //1	OPENED	open() has been called.
    //2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    //3	LOADING	Downloading; responseText holds partial data.
    //4	DONE	The operation is complete.

    //What to do when response is ready
    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText)
        }else{
            console.log('Error occured in the progress')
        }


        //Once loaded the onload part can be displayed here
    }


    //send the request 
    params =   	`{"name":"test","salary":"123","age":"23"}`
    xhr.send(params)

    //We have some standard http response codes
    // For example 200 for everything fine
    // We can implement this in the above as if else condition
    //2xx Success. ...
    //3xx Redirection. ...
    //4xx Client Error. ...
    //5xx Server Error.
    //Search in google.

    console.log('We are done')
    // Since async was declared as true hence the code was not blocked. So, this line gets printed first
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler)

function popHandler(){
    console.log('popHandler! Button is clicked i.e., popBtn')

    // Create or instatiate an xhr object
    const xhr = new XMLHttpRequest()
    
    // Open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)//Here async was declared true
    
    //Use this for get request
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    //What to do on progress (optional)
    // xhr.onprogress = function(){
    //     console.log('On progress')
    //     //A loader can be implemented here 
    // }

    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is',xhr.readyState)
    // }

    //0	UNSENT	Client has been created. open() not called yet.
    //1	OPENED	open() has been called.
    //2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    //3	LOADING	Downloading; responseText holds partial data.
    //4	DONE	The operation is complete.

    //What to do when response is ready
    xhr.onload = function(){

        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str=""
            console.log('Keys are here')
            for (key in obj.data){
                //console.log(obj.data[key].employee_name)
                str += `<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML = str
        }else{
            console.log('Error occured in the progress')
        }


        //Once loaded the onload part can be displayed here
    }


    //send the request 
    
    xhr.send()

    //We have some standard http response codes
    // For example 200 for everything fine
    // We can implement this in the above as if else condition
    //2xx Success. ...
    //3xx Redirection. ...
    //4xx Client Error. ...
    //5xx Server Error.
    //Search in google.

    console.log('We are done fetching employee details')
    // Since async was declared as true hence the code was not blocked. So, this line gets printed first
}
