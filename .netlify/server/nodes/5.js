

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.uUpH4TYy.js","_app/immutable/chunks/scheduler.D-KrruXr.js","_app/immutable/chunks/index.DbpEAZHb.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.wc1tOD2T.css"];
export const fonts = [];
