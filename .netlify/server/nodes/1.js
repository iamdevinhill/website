

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8bVZV6fz.js","_app/immutable/chunks/scheduler.CsE2K0RJ.js","_app/immutable/chunks/index.BVS8uziJ.js","_app/immutable/chunks/stores.BCwpao07.js","_app/immutable/chunks/entry.DnwCIwhJ.js"];
export const stylesheets = [];
export const fonts = [];
