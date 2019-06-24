function search(countrycode, countrylist){
    for (var i=0; i < countrylist.length; i++) {
        if (countrylist[i].value == countrycode) {
            return countrylist[i];
        }
    }
}

const countries = [{
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "US",
	"label": "US",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "CA",
	"label": "CA",
	"emailOptin": "OptionalPreselected",
	"mailOptin": "OptionalPreselected",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "MI",
	"label": "MI",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AX",
	"label": "AX",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AL",
	"label": "AL",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "DZ",
	"label": "DZ",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AD",
	"label": "AD",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AO",
	"label": "AO",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AI",
	"label": "AI",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AG",
	"label": "AG",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AR",
	"label": "AR",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AM",
	"label": "AM",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AW",
	"label": "AW",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AU",
	"label": "AU",
	"emailOptin": "Optional",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AT",
	"label": "AT",
	"emailOptin": "Optional",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}];

var resultObject = search("AT", countries);
document.write(resultObject["emailOptin"]);
document.write("<br><br>");
document.writeln(resultObject["mailOptin"]);
document.write("<br><br>");
document.writeln(resultObject["smsOptin"]);