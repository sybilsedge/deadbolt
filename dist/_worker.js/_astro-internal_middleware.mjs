globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_DX1UbNkh.mjs';
import './chunks/astro/server_DM0A1wcG.mjs';
import { s as sequence } from './chunks/render-context_Dp2WmxFM.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
