//
// Connects the button click to initating the upload dialog
//

require(['filePicker','jquery'], function() {
    //console.log('in upload');
    $('button').on('click', function(e) {
	    //console.log('in click');
	    filepicker.pick({mimetypes: ['application/pdf'], container: 'modal', services: ['COMPUTER','URL','DROPBOX','GOOGLE_DRIVE','BOX'], maxSize: 50*1024*1024, debug: false}, 
		    function(InkBlob){
    		      console.log(JSON.stringify(InkBlob));
 		    },
		    function(FPError){
		      console.log(FPError.toString());
		    })
        
	//e.preventDefault();
    });
});
