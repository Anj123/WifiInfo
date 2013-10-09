var wifi_info = {
    get: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'WifiInfoPlugin', // mapped to our native Java class called "WifiInfoPlugin"
            'get', // with this action name
            []
        ); 
    }
}
module.exports = wifi_info;