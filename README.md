<img src="https://raw.githubusercontent.com/angular-experts-io/module-federation-example/apps/host-example/src/assets/angular-experts.png" height: 100px>

# Module Federation Example by Angular Experts

## Get started

* `npm ci`
* `npm start`

# Caching

* caching works on level of the apps (host and remotes), these apps are built (and cached)
* module federation decouples build of host and remotes
* changing remote does NOT necessitate rebuilding of the host
* only affected remote is are rebuilt, (not affected remotes cam be consumed from cache)
* caching build of libs like `feature` or `ui` doesn't help because they still need to be built with the final Angular build (eg host or remote)
* making libs like `feature` or `ui` buildable makes overall perf worse becase their build doesn't help to spped up final Angular build (eg host or remote)

# TODOs

Contribute to this project by picking up one of the following [TODOs](TODO.md).