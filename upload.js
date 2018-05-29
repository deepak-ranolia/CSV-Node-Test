const IncomingForm = require( 'formidable' ).IncomingForm

module.exports = function upload( req, res ) {
    var form = new IncomingForm()
    console.log( form )
    form.on( 'file' , ( field, file ) => {
        console.log(file)
        console.log(field)
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    })
    form.on('end', () => {
        res.json()
    })
    form.parse(req)
}

