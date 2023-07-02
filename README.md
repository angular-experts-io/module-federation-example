<img height="75px" src="https://raw.githubusercontent.com/angular-experts-io/module-federation-example/master/apps/host-example/src/assets/angular-experts.png" />

# Module Federation Example by Angular Experts

Follow us [@tomastrajan](https://twitter.com/tomastrajan), [@kreuzercode](https://twitter.com/kreuzercode), [AngularExperts.io](https://angularexperts.io)


<img src="https://raw.githubusercontent.com/angular-experts-io/module-federation-example/master/docs/example.jpg" />

## Get started

- `npm ci`
- `npm start`

# Caching

## Caching tl;dr;

- caching works on level of the apps (`host` and `remotes`), these apps are built using the `full build` (and cached)
- module federation decouples build of `host` and `remotes`
- changing a `remote` does NOT necessitate rebuilding of the `host` (or other `remotes`)
- only affected `remotes` are rebuilt, (not affected `remotes` can be consumed from cache)
- caching build of buildable libs like `feature` or `ui` doesn't help because they still need to be built with the `full` Angular build (eg `host` or `remote`)
- making libs like `feature` or `ui` buildable makes overall perf worse because their build doesn't help to speed up `full` Angular build (eg `host` or `remote`)

## Caching in depth

### Vocabulary (Build types)

A lot of confusion stems from lack of differentiation between build types when thinking
about the NX build caching and the module federation approach as even though
all builds can be cached, they are not all equal in terms of performance impact.

* `(buildable) lib build` - build of a buildable lib (eg `feature` or `ui`) with the help of `ng-packagr` (lite)
* `full build` (or `app build`) - build of the final app (eg `host` or `remote`) with the help of `@nx/angular:webpack-browser` (full)

## Caching scenarios

### Without module federation

#### Scenario 1 - `app` and non-buildable libs

* `full build` only - the `app` is built with the help of `@angular-devkit/build-angular:browser` (full)
* the `full build` builds all libs from the src (eager and lazy loaded features)
* the `full build` is as fast as standard build in Angular CLI workspace
* the `full build` uses Angular cache
* the `full build` when in dev mode (`serve`) will build the whole app (when called) and after rebuild **only** the lazy loaded feature (module or routes) which were changed by a developer when working on the code base

> This approach is the standard approach for most Angular apps today and works very well for small to medium sized apps (eg up to 10-20 lazy features)

This approach starts to struggle when amount and size of lazy loaded feature grows which leads to:
1. slow prod build
2. slow start of dev build (followed by quick rebuilds of only changed lazy features)

#### Scenario 2 - `app` and buildable libs

* all the `(buildable) libs` are built (into `dist`) before the execution of the `full build` 
* `full build` then builds `app` (multiple builders possible) and references the already built libs from `dist`
* the `full build` is as fast as standard build in Angular CLI workspace, that means **NOT FASTER** than scenario 1 ( we tried this also with IVY `compilationMode: 'full'` for the libs and it did NOT lead to perf improvements), if you have different reproduction, please ping me [@tomastrajan](https://twitter.com/tomastrajan) on Twitter
* this means we're **SLOWER** than before because we have to first build the `buildable libs` and then build the app using the `full build` (and the app `full build` is the same speed as in scenario 1, so not faster) so we end up with longer build time in total (`buildable libs` builds + `full build` of the app)
* the subsequent builds consume `buildable libs` from cache (if not changed) so at best we can get to the performance of scenario 1 (but never better) but with much more overhead in process (buildable libs)

> This approach, if it worked, would be a great way to speed up the build of the app but unfortunately it doesn't work as expected and is actually slower than scenario 1, what we would wanted is:

* buildable libs (eg lazy features) are prebuilt and cached
* prebuilt libs are consumed by the `full build` of the app AND have positive impact on the build time of the app **<- this is not the case** 

#### Scenario 3 - `app` and buildable libs and module federation

Based on our current understanding, module federation represents a **workaround** for the problem described in scenario 2.

With module federation, the situation changes:

* lazy loaded feature libs get their own corresponding `remote` app which will be built using a `full build` (and cached)
* the main app will become a `host` app which will be build using a `full build` (and cached)
* now instead of one `full build` we have multiple `full builds` (one for each `remote` (lazy loaded feature) and one for the `host`)
* these `full builds` are decoupled and can be built, deployed and cached independently
* these `full builds` have same speed behavior as in scenario 1, but now we have eg **many smaller ones instead of 1 large one**, AND most of them can be consumed from cache (if not changed, eg changing implementation in one lazy feature)
* in other words, we're transforming **slow build of one large Angular app** into **many smaller fast builds of smaller Angular apps (one per lazy feature)** which can be cached and won't need to rebuild all together under normal circumstances 
* the interaction between the `full build`  and `buildable libs` (now for the corresponding `remote`(instead of the app) and the `buildable libs` like `feature` or `ui`) is the same as in scenario 2 which would lead to an argument that it **NEVER** makes sense to have buildable libs (besides case when you want to publish them as npm packages, OR use Typescript compilation as a form of "testing"), again, please ping me [@tomastrajan](https://twitter.com/tomastrajan) on Twitter if you have different reproduction 



# TODOs

Contribute to this project by picking up one of the following [TODOs](TODO.md).
