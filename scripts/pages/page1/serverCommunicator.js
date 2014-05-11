define(['app'], function(app)
{
    app.service('serverCommunicator',
	[
		'$http', '$q',
		function($http, $q)
		{
			this.http = $http;
			var deferrer = $q;
			this.sendDataToServer = function (requestData)
			{
			    alert("sending data (" + requestData.key + ") to server...");
			    return this.internalSendRequest("ExampleURIForServerSideHandler", requestData);
			};

		    this.internalSendRequest = function(uri, requestData)
		    {
                //waits for one second and returns an example object
		        var lock = deferrer.defer();
		        setTimeout(function ()
		        {
		            lock.resolve({ "keyFromServer": "valueFromServer" });
		        }, 1000);
		        return lock.promise;
		        
                //actual http sending implementation is below
		        //var lock = deferrer.defer();
		        //this.http.post(uri, requestData).success(function (responseData)
		        //{
		        //    lock.resolve(responseData);
		        //}).error(function(errorData)
		        //{
		        //    //...
		        //});
		        //return lock.promise;
		    };
		}
	]);
});

