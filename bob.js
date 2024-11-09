const crypto = require('crypto');
const fs = require('fs');

// Load Bob's private key and Alice's public key from files
const bobPrivateKey = fs.readFileSync('bob_private.pem', 'utf8');
const alicePublicKey = fs.readFileSync('alice_public.pem', 'utf8');

// Load encrypted message and signature
const encryptedMessageHex = fs.readFileSync('message.txt', 'utf8');
const signature = fs.readFileSync('signature.txt', 'utf8');

// Convert the encrypted message from hex to buffer
const encryptedMessage = Buffer.from(encryptedMessageHex, 'hex');

// Decrypt the message using Bob's private key
const decryptedMessage = crypto.privateDecrypt(bobPrivateKey, encryptedMessage);
console.log("Message:", decryptedMessage.toString());

// Verify the signature
const verify = crypto.createVerify('SHA256');
verify.update(decryptedMessage.toString());
verify.end();
const isVerified = verify.verify(alicePublicKey, signature, 'hex');

console.log("Signature Verification:", isVerified);