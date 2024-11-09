const crypto = require('crypto');
const fs = require('fs');

// Load Alice's private key and Bob's public key from files
const alicePrivateKey = fs.readFileSync('alice_private.pem', 'utf8');
const bobPublicKey = fs.readFileSync('bob_public.pem', 'utf8');

// Message to send
const message = "I want some apples";

// Sign the message using Alice's private key
const sign = crypto.createSign('SHA256');
sign.update(message);
sign.end();
const signature = sign.sign(alicePrivateKey, 'hex');

// Encrypt the message with Bob's public key
const encryptedMessage = crypto.publicEncrypt(bobPublicKey, Buffer.from(message));

// Output
console.log("Signature:", signature);
console.log("Message:", encryptedMessage.toString('hex'));

// Save the signature and encrypted message to files
fs.writeFileSync('message.txt', encryptedMessage.toString('hex'));
fs.writeFileSync('signature.txt', signature);
