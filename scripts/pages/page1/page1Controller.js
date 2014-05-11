//load is configured in routes.js
define(['app', 'pages/page1/serverCommunicator'], function (app)
{
	app.controller('page1Controller',
    [
		'$scope', 'serverCommunicator',
		function ($scope, serverCommunicator)
		{
		    $scope.query = "";

            //below function is not used. just an example to use an angular service for server (http) communication
		    $scope.queryServer = function()
		    {
		        var exampleData = { "key": $scope.query };
		        serverCommunicator.sendDataToServer(exampleData).then(function (resultFromServer)
		        {
		            alert("server responded (" + resultFromServer.keyFromServer + ")");
		        });
		    };
		}
    ]);
});

