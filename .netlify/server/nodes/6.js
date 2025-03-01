

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.C6AgI2F-.js","_app/immutable/chunks/scheduler.D-KrruXr.js","_app/immutable/chunks/index.DbpEAZHb.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/6.BTL8pIEz.css"];
export const fonts = [];
