module.exports = {
  name: 'remote-a',
  exposes: {
    './Routes': 'apps/remote-a/src/app/remote-entry/entry.routes.ts',
    './Component': 'apps/remote-a/src/app/remote-entry/entry.component.ts',
  },
};
