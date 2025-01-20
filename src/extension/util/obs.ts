import OBSWebSocket, { OBSWebSocketError, type OBSEventTypes } from 'obs-websocket-js';
import { setTimeout as wait } from 'timers/promises';
import { nodecg } from './nodecg.js';

const config = nodecg.bundleConfig.obs;
const obs = new OBSWebSocket();

// Types available in our build of obs-websocket.
export type SceneTransitionStarted = {
  transitionDuration: number,
  toScene: string,
  fromScene: string
} & OBSEventTypes['SceneTransitionStarted'];

/**
 * Used to (re)connect to the OBS WebSocket.
 */
async function connect() {
  try {
    const { obsWebSocketVersion, rpcVersion } = await obs.connect(config.url, config.password);
    nodecg.log.debug('[Util/OBS] Connected (version: %s, RPC: %s)', obsWebSocketVersion, rpcVersion);
  } catch (err) {
    try {
      await obs.disconnect();
    } catch { /* ignore errors */ }
    nodecg.log.warn(
      '[Util/OBS] Connection error (reason: %s - %s)',
      (err as OBSWebSocketError).code ?? 'N/A',
      (err as OBSWebSocketError).message || 'N/A',
    )
  }
}

obs.on('ConnectionClosed', async (data) => {
  nodecg.log.warn('[Util/OBS] Connection closed (reason: %s - %s)', data.code ?? 'N/A', data.message || 'N/A');
  await wait(5000);
  await connect();
});

obs.on('ConnectionError', (err) => {
  nodecg.log.warn('[Utill/OBS] Connection error (reason: %s - %s)', err.code, err.message);
});

if (config.enabled) {
  await new Promise((res) => {
    obs.on('Identified', res);
    connect().catch(() => {});
  });
  nodecg.log.debug('[Util/OBS] Setup complete');
}

export default {
  conn: obs,
};
