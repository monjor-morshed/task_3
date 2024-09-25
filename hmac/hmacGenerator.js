import { randomBytes, createHmac } from "crypto";

export class HMACGenerator {
  static generateKey = () => randomBytes(32);
  static generateHMAC = (key, message) => {
    const hmac = createHmac("sha3-256", key);
    hmac.update(message);
    return hmac.digest("hex");
  };
}
