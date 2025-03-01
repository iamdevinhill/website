import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CQZZXHQG.js","_app/immutable/chunks/scheduler.D-KrruXr.js","_app/immutable/chunks/index.DbpEAZHb.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.8Wu_BF-Y.css"];
export const fonts = [];
