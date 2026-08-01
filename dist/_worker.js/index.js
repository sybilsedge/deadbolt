globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_Dk2yPKP3.mjs';
import { c as createExports } from './chunks/server_Bt47YTPd.mjs';
import { manifest } from './manifest_GSrrG7eB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
