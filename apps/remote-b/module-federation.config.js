module.exports = {
  name: 'remote-b',
  exposes: {
    './Routes': 'apps/remote-b/src/app/remote-entry/entry.routes.ts',
    './Component': 'apps/remote-b/src/app/remote-entry/entry.component.ts',
  },
};
