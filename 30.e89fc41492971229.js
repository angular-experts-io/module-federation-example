(self.webpackChunkhost_example=self.webpackChunkhost_example||[]).push([[30],{4030:(p,d,n)=>{n.r(d);var i=n(8202),o=n(7462),r=n(7512);const h={providers:[(0,o.provideRouter)([{path:"",pathMatch:"full",redirectTo:"remote-a"},{path:"dashboard",loadChildren:()=>n.e(76).then(n.t.bind(n,913,23)).then(t=>t.hostExampleFeatureDashboardRoutes)},{path:"dashboard-with-subroutes",loadChildren:()=>n.e(502).then(n.t.bind(n,8502,23)).then(t=>t.hostExampleFeatureDashboardWithSubroutesRoutes)},{path:"remote-a",loadChildren:()=>(0,r.Vs)("remote-a","./Routes").then(t=>t.remoteRoutes)},{path:"remote-b",loadChildren:()=>(0,r.Vs)("remote-b","./Routes").then(t=>t.remoteRoutes)}],(0,o.withEnabledBlockingInitialNavigation)(),(0,o.withRouterConfig)({onSameUrlNavigation:"reload"}))]};var l=n(1180),e=n(5232);(0,i.bootstrapApplication)((()=>{class t{}return(0,l.Z)(t,"\u0275fac",function(a){return new(a||t)}),(0,l.Z)(t,"\u0275cmp",e.\u0275\u0275defineComponent({type:t,selectors:[["angular-experts-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:19,vars:0,consts:[[1,"fixed","left-0","right-0","shadow-lg","z-10","bg-white"],[1,"container","mx-auto"],[1,"flex","items-center","gap-8","py-2"],["href","https://angularexperts.io","target","_blank"],["src","assets/angular-experts.png","alt","Angular Experts",1,"h-16"],[1,"text-blue-700","text-2xl","font-bold"],[1,"flex-1"],["routerLink","dashboard","routerLinkActive","btn-active",1,"btn"],["routerLink","dashboard-with-subroutes","routerLinkActive","btn-active",1,"btn"],["routerLink","remote-a","routerLinkActive","btn-active",1,"btn"],["routerLink","remote-b","routerLinkActive","btn-active",1,"btn"],[1,"flex-1","pt-32","bg-gray-100"]],template:function(a,c){1&a&&(e.\u0275\u0275elementStart(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),e.\u0275\u0275element(4,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",5),e.\u0275\u0275text(6,"Module Federation Example 1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"span",6),e.\u0275\u0275elementStart(8,"a",7),e.\u0275\u0275text(9,"Dashboard"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"a",8),e.\u0275\u0275text(11,"Dashboard (as routes)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"a",9),e.\u0275\u0275text(13,"Remote A"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"a",10),e.\u0275\u0275text(15,"Remote B"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(16,"main",11)(17,"div",1),e.\u0275\u0275element(18,"router-outlet"),e.\u0275\u0275elementEnd()())},dependencies:[o.RouterModule,o.RouterOutlet,o.RouterLink,o.RouterLinkActive],styles:["[_nghost-%COMP%]{display:flex;height:100vh;flex-direction:column}"]})),t})(),h).catch(t=>console.error(t))}}]);