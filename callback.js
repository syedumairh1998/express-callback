app.get('/callme', (request, response, next) => {
    request.name = 'Syed Umair Hussain'
    console.log('My first callback')
    next()


}, (request, response) => {
    console.log('My second callback',request.name)
    return response.json({ message: 'Response from second callback' })

})


// ======================================= //


function callback1(request, response,next) {
    console.log('callback 1')
    next()
}

function callback2(request, response,next) {
    console.log('callback 2')
    next()
}

function callback3(request, response) {
    console.log('callback 3')
    return response.json({ message: 'Response from third call back in array callback' })
}

app.get('/callmearray', [callback1, callback2, callback3])
  
