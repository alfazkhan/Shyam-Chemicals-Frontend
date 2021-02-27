var aesjs = require('aes-js');
var key = [9, 9, 8, 2, 0, 8, 0, 7, 8, 1, 8, 6, 1, 9, 7, 6];
export const encryption = (text) => {
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return (encryptedHex);
}
export const decryption = (encryptedHex) => {
    var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return (decryptedText);
}