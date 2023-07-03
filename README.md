<img height="75px" src="https://raw.githubusercontent.com/angular-experts-io/module-federation-example/master/apps/host-example/src/assets/angular-experts.png" />

# Module Federation Example by Angular Experts (WIP)

Follow us [@tomastrajan](https://twitter.com/tomastrajan), [@kreuzercode](https://twitter.com/kreuzercode), [AngularExperts.io](https://angularexperts.io)


<img src="https://raw.githubusercontent.com/angular-experts-io/module-federation-example/master/docs/example.jpg" />

## Get started

- `npm ci`
- `npm start`

# Perf

* add `"buildLibsFromSource": false,` to the `project.json` of apps (host + remotes), else the `@nx/angular:webpack-browser` builder won't benefit from buildable libraries

## 1. Buildable libs

* host and remotes with correct builders ( generated out of the box by NX )
  * **build** - `@nx/angular:webpack-browser`, with `"buildLibsFromSource": false,` (needs to be added manually) 
  * **serve** 
    * **host** `@nx/angular:module-federation-dev-server` 
    * **remote** `@nx/angular:webpack-server`
* are cached by default

### Build

Better perf than Angular CLI, because only the changed libs are built (not the whole app)

### Serve

* **better initial build perf** than Angular CLI, because only the changed libs are built (not the whole app)
* same perf as Angular CLI for rebuilds

## 2. Module federation / Remotes

* compared to Angular CLI, no need to build "whole" app (build / first build of serve) but only a part (eg remote === lazy loaded feature)
* so building / serving smaller amount of code will always be faster


# Observations

*  using 
* buildable libs **do NOT help** (are worse than non-buildable) when using `@angular-devkit/build-angular:browser` builder for host and remotes
  * the buildable libs need to be built (takes time)
  * then they are ignored and whole thing is build through the consumer app (host / remote) with  `@angular-devkit/build-angular:browser` builder
* buildable libs **DO help** when using `@nx/angular:webpack-browser` builder, **WITH** `"buildLibsFromSource": false,`
* serving with `@nx/web:file-server` [docs](https://nx.dev/recipes/other/setup-incremental-builds-angular#running-and-serving-incremental-builds) is order of magnitude **WORSE** than serving with `@nx/angular:webpack-server` (generated)

# ⚠️ Unresolved problems ⚠️

*  **Using `"buildLibsFromSource": false,` seems to break live reload, only reloads for the first change
  * `npm run serve:remote-a`
  * change `libs/remote-a/feature/asrc/lib/remote-a-feature-a/remote-a-feature-a.component.ts`, will be reflected in the browser
  * another change to the same file, will not be reflected in the browser

# TODOs

Contribute to this project by picking up one of the following [TODOs](TODO.md).
