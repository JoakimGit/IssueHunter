"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{264:(w,g,n)=>{n.d(g,{J:()=>y});var c=n(4004),u=n(5e3),o=n(2340),v=n(520);let a=(()=>{class i{constructor(t){this.http=t,this.apiUri=o.N.apiUri}getProjects(){return this.http.get(this.apiUri+"/projects")}getProjectById(t){return this.http.get(this.apiUri+"/projects/"+t)}createProject(t){return this.http.post(this.apiUri+"/projects",t)}updateProject(t){return this.http.put(this.apiUri+"/projects/"+t._id,t)}getEmployees(){return this.http.get(this.apiUri+"/people")}addMemberToProject(t,h){return this.http.patch(this.apiUri+`/projects/${h}/add-user`,{members:t})}getProjectMembers(t){return this.http.get(this.apiUri+`/projects/${t}/members`)}}return i.\u0275fac=function(t){return new(t||i)(u.LFG(v.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var p=n(5020),f=n(2290);let y=(()=>{class i{constructor(t,h,b,d){this.projectService=t,this.router=h,this.route=b,this.toastr=d}loadProjects(){return this.projectService.getProjects().pipe((0,c.U)(t=>t.projects))}createProject(t){this.projectService.createProject(t).subscribe(h=>{this.router.navigate(["projects"]),this.toastr.success("Project created","Success")})}updateProject(t){this.projectService.updateProject(t).subscribe(h=>{this.router.navigate(["projects"]),this.toastr.success("Project updated","Success")})}getProjectById(t){return this.projectService.getProjectById(t)}getEmployees(){return this.projectService.getEmployees().pipe((0,c.U)(t=>t.members))}addMemberToProject(t,h){this.projectService.addMemberToProject(t,h).subscribe(()=>{this.router.navigate([`projects/${h}/tickets`]),this.toastr.success("Member added to project","Success")})}getProjectMembers(t){return this.projectService.getProjectMembers(t).pipe((0,c.U)(h=>h.members))}}return i.\u0275fac=function(t){return new(t||i)(u.LFG(a),u.LFG(p.F0),u.LFG(p.gz),u.LFG(f._W))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4605:(w,g,n)=>{n.d(g,{J:()=>u});var c=n(5e3);let u=(()=>{class o{ngOnInit(){}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=c.Xpm({type:o,selectors:[["search-input"]],inputs:{searchPlaceholder:"searchPlaceholder"},decls:4,vars:1,consts:[[1,"relative","mx-auto"],["type","search","name","search",1,"h-10","rounded-lg","border-2","border-gray-300","bg-white","px-4","placeholder:text-gray-400","focus:outline-none",3,"placeholder"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","id","Capa_1","x","0px","y","0px","viewBox","0 0 56.966 56.966",0,"xml","space","preserve","width","512px","height","512px",1,"absolute","right-0","top-0","mt-3","mr-4","h-4","w-4","fill-current","text-gray-400",2,"enable-background","new 0 0 56.966 56.966"],["d","M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"]],template:function(a,p){1&a&&(c.TgZ(0,"div",0),c._UZ(1,"input",1),c.O4$(),c.TgZ(2,"svg",2),c._UZ(3,"path",3),c.qZA(),c.qZA()),2&a&&(c.xp6(1),c.s9C("placeholder",p.searchPlaceholder||"search ..."))},encapsulation:2}),o})()},1999:(w,g,n)=>{n.d(g,{$:()=>u});var c=n(5e3);let u=(()=>{class o{transform(a,p,f){return a&&p&&f?a.filter(y=>{for(let i=0;i<p.length;i++){const t=y[p[i]];if(t&&-1!==t.toString().toLowerCase().indexOf(f))return!0}return!1}):a}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275pipe=c.Yjl({name:"listFilterPipe",type:o,pure:!0}),o})()},7146:(w,g,n)=>{n.d(g,{b:()=>b});var c=n(727);class u extends c.w0{constructor(e,r){super()}schedule(e,r=0){return this}}const o={setInterval(...d){const{delegate:e}=o;return((null==e?void 0:e.setInterval)||setInterval)(...d)},clearInterval(d){const{delegate:e}=o;return((null==e?void 0:e.clearInterval)||clearInterval)(d)},delegate:void 0};var v=n(8737),p=n(6063);class f{constructor(e,r=f.now){this.schedulerActionCtor=e,this.now=r}schedule(e,r=0,s){return new this.schedulerActionCtor(this,e).schedule(s,r)}}f.now=p.l.now;const i=new class extends f{constructor(e,r=f.now){super(e,r),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:r}=this;if(this._active)return void r.push(e);let s;this._active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=r.shift());if(this._active=!1,s){for(;e=r.shift();)e.unsubscribe();throw s}}}(class extends u{constructor(e,r){super(e,r),this.scheduler=e,this.work=r,this.pending=!1}schedule(e,r=0){if(this.closed)return this;this.state=e;const s=this.id,l=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(l,s,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(l,this.id,r),this}requestAsyncId(e,r,s=0){return o.setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,r,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return r;o.clearInterval(r)}execute(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,r);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,r){let l,s=!1;try{this.work(e)}catch(m){s=!0,l=m||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),l}unsubscribe(){if(!this.closed){const{id:e,scheduler:r}=this,{actions:s}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,v.P)(s,this),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,super.unsubscribe()}}});var t=n(4482),h=n(5403);function b(d,e=i){return(0,t.e)((r,s)=>{let l=null,m=null,x=null;const S=()=>{if(l){l.unsubscribe(),l=null;const P=m;m=null,s.next(P)}};function F(){const P=x+d,I=e.now();if(I<P)return l=this.schedule(void 0,P-I),void s.add(l);S()}r.subscribe(new h.Q(s,P=>{m=P,x=e.now(),l||(l=e.schedule(F,d),s.add(l))},()=>{S(),s.complete()},void 0,()=>{m=l=null}))})}}}]);