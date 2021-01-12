var nodeS3EncryptionClient = require("node-s3-encryption-client");

function s3PutObject() {
	console.log(new Date());
	var params = {
		Body: "hello world",
		Bucket: "arn:aws:s3:::cup-central-local-ltigw",
		Key: "encryptedObject",
		KmsParams: {
			KeyId: "", // CMK key ARN will be mentioned here.
			KeySpec: "AES_256"
		}
	};
	nodeS3EncryptionClient.putObject(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	console.log(new Date());
}

function s3GetObject() {
	var params = {
		Bucket: "arn:aws:s3:::cup-central-local-ltigw", 
		Key: "encryptedObject"
	 };
	 nodeS3EncryptionClient.getObject(params, function(err, data) {
		 if (err) console.log(err, err.stack); // an error occurred
		 else     console.log(data);           // successful response
	 });
}

s3PutObject();

s3GetObject();