import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ai.jpg","consult.jpg","data1.jpg","fav.png","favicon.png","front.jpg","headshot.jpg","metrics.jpg","prod1.jpg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CjjEf9Ri.js","app":"_app/immutable/entry/app.NRRmLbr0.js","imports":["_app/immutable/entry/start.CjjEf9Ri.js","_app/immutable/chunks/entry.DnwCIwhJ.js","_app/immutable/chunks/scheduler.CsE2K0RJ.js","_app/immutable/entry/app.NRRmLbr0.js","_app/immutable/chunks/scheduler.CsE2K0RJ.js","_app/immutable/chunks/index.BVS8uziJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
