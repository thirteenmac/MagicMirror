pi@pi:~ $ cd MagicMirror/config/
pi@pi:~/MagicMirror/config $ nano config.js

 /* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * test
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "India Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/India-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
                        module: 'MMM-AirQuality',
                        position: 'top_right', // you may choose any location
                        config: {
                                location: 'delhi/siri-fort/' // the location to check the index for
                        }
                },
		{
   			module: 'MagicMirror-QuoteCatalog',
    			header: 'The Quote Catalog',
    			position: 'middle_center',
    			config: {
                	// See below for configurable options
            		}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Delhi",
				locationID: "1273294",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "bhjdchjwjcjsj1yw78zhuiqhiushbqhuisq9huh"
			}
		},
		{
			module: 'mmm-systemtemperature',
			position: 'bottom_right',	// This can be any of the regions.
			classes: 'small dimmed', // Add your own styling. Optional.
			config: {
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Times of India",
						//url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
						//url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"	
						url : "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
