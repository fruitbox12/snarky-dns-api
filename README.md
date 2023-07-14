# Proof Generation API

This API provides proof generation functionality for proving ownership of an RSA key for DNS validation without revealing the private key.

## Getting Started

Follow the instructions below to set up and run the project.

### Prerequisites

- Node.js (v14 or higher)

### Installation

1\. Clone the repository:

   ```shell
   git clone https://github.com/your/repo.git`

1.  Install the dependencies:

    shellCopy code

    `cd proof-generation-api
    npm install`

### Usage

1.  Start the server:

    shellCopy code

    `npm start`

2.  Send a POST request to generate a proof:

    httpCopy code

    `POST http://localhost:3000/proof
    Content-Type: application/json

    {
      "privateKey": "<RSA_PRIVATE_KEY>",
      "publicKey": "<RSA_PUBLIC_KEY>",
      "certificatePublicKey": "<CERTIFICATE_PUBLIC_KEY>",
      "dnsInformation": "<DNS_INFORMATION>",
      "certificateDnsInformation": "<CERTIFICATE_DNS_INFORMATION>"
    }`

3.  The server will respond with the generated proof.

API Reference
-------------

### Generate Proof

Endpoint: `POST /proof`

Request body:

jsonCopy code

`{
  "privateKey": "<RSA_PRIVATE_KEY>",
  "publicKey": "<RSA_PUBLIC_KEY>",
  "certificatePublicKey": "<CERTIFICATE_PUBLIC_KEY>",
  "dnsInformation": "<DNS_INFORMATION>",
  "certificateDnsInformation": "<CERTIFICATE_DNS_INFORMATION>"
}`

Response body:

jsonCopy code

`{
  "proof": "<GENERATED_PROOF>"
}`

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
-------

[MIT](https://chat.openai.com/LICENSE)

arduinoCopy code

 `Please note that this is a template, and you would need to fill in the implementation details for the circuit, controllers, and routes based on your specific requirements.`
