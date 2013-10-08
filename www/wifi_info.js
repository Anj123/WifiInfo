var wifi_info = {
    get: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'WifiInfo', // mapped to our native Java class called "CalendarPlugin"
            'get', // with this action name
            []
        ); 
    }
}
module.exports = wifi_info;