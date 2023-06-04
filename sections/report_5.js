
function report_5Request(nameOfOperation) {

	let args = {
		identityDescriptor: {
			userName: getSavedNameValue(),
			password: getSavedPassValue(),
			userId: document.getElementById('userId').value,
		},
		referenceNumber: document.getElementById('referenceNumber' + nameOfOperation).value,
		searchedAddress: {
			attributes: {
				"xsi:type": "PersonAddressDescription"
			},
			location: {
				street: document.getElementById('street' + nameOfOperation).value,
				houseNumber: document.getElementById('houseNumber' + nameOfOperation).value,
				apartment: document.getElementById('apartment' + nameOfOperation).value,
				zip: document.getElementById('zip' + nameOfOperation).value,
				city: document.getElementById('city' + nameOfOperation).value,
				regionCode: document.getElementById('regionCode' + nameOfOperation).value,
				country: document.getElementById('country' + nameOfOperation).value
			},
			firstName: document.getElementById('firstName' + nameOfOperation).value,
			lastName: document.getElementById('lastName' + nameOfOperation).value,
			middleName: document.getElementById('middleName' + nameOfOperation).value,
			birthDate: document.getElementById('birthDate' + nameOfOperation).value,
		},
		reportFormat: document.getElementById('reportFormat' + nameOfOperation).value,
	};


	let nameOfSystem = document.getElementById('system').value;
	systemName(nameOfSystem);
	soapService(args, 'report_5');
}

