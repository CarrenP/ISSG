const crypto = require('crypto');
const fs = require('fs');

// Key generation options
const options = {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  }
};

// Generate and save Alice's keys
const { privateKey: alicePrivateKey, publicKey: alicePublicKey } = crypto.generateKeyPairSync('rsa', options);
fs.writeFileSync('alice_private.pem', alicePrivateKey);
fs.writeFileSync('alice_public.pem', alicePublicKey);

// Generate and save Bob's keys
const { privateKey: bobPrivateKey, publicKey: bobPublicKey } = crypto.generateKeyPairSync('rsa', options);
fs.writeFileSync('bob_private.pem', bobPrivateKey);
fs.writeFileSync('bob_public.pem', bobPublicKey);

console.log("Keys generated and saved to files.");
