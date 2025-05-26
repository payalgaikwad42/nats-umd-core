import {
  connect,
  StringCodec,
  JSONCodec,
  headers,
  credsAuthenticator,
} from 'nats.ws';

const nats = {
  connect,
  StringCodec,
  JSONCodec,
  headers,
  credsAuthenticator,
};

// Attach to window for UMD 
declare global {
  interface Window {
    NATS: typeof nats;
  }
}
// Export to global for Tulip
if (typeof window !== 'undefined') {
  (window as any).NATS = { connect, StringCodec, JSONCodec, headers, credsAuthenticator };
}

export { connect, StringCodec, JSONCodec, headers, credsAuthenticator };

export default nats;

