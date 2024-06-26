/* eslint-disable @typescript-eslint/no-var-requires */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	send: (channel, data) => {
		ipcRenderer.send(channel, data);
	},
	sendSync: (channel, data) => {
		ipcRenderer.sendSync(channel, data);
	},
	on: (channel, func) => {
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	},
	once: (channel, func) => {
		ipcRenderer.once(channel, (event, ...args) => func(...args));
	},
});

module.exports = {};
