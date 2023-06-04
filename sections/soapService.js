const url = './wsdl/...'; //url to the WSDL file 
const soap = require('soap');
const format = require('xml-formatter');
let tableify = require('tableify');
let blacklist = ['password'];
let maskXml = require('mask-xml')(blacklist, { replacement: '*** PASSWORD REMOVED ***' });

function soapService(args, method) {
    soap.createClient(url, options, function (err, client) {
        console.log(err)

        let fun = client[method];
        fun(args, function (err, result, rawResponse, soapHeader, rawRequest) {
            console.log(err)
            //Display request in table
            function replacer(key, value) {
                // if property name is "password" hide the real value
                if (key === "password") {
                    return "*** PASSWORD REMOVED ***";
                }
                // otherwise, proceed as normal by returning the property's value
                return value;
            };
            let newArgs = JSON.stringify(args, replacer, 1);

            let requestTable = tableify(JSON.parse(newArgs));
            document.getElementById("request" + method).innerHTML = requestTable;

            //Display response in table
            let responseTable = tableify(result)
            document.getElementById("response" + method).innerHTML = maskXml(responseTable);

            //Display raw request 
            const formattedSoapRequest = format(rawRequest, {
                indentation: '\t',
                collapseContent: true,
                lineSeparator: '\n'
            });

            document.getElementById("soapRequest" + method).innerText = maskXml(formattedSoapRequest);

            //Display raw response 
            const formattedSoapResponse = format(rawResponse, {
                indentation: '\t',
                collapseContent: true,
                lineSeparator: '\n'
            });
            document.getElementById("soapResponse" + method).innerText = maskXml(formattedSoapResponse);
        });
    });
}
