"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[446],{1446:(gt,h,s)=>{s.r(h),s.d(h,{TicketModule:()=>lt});var a=s(9808),d=s(5020),c=s(2382),p=(()=>{return(i=p||(p={})).LOW="Low",i.MEDIUM="Medium",i.HIGH="High",i.CRITICAL="Critical",p;var i})(),l=(()=>{return(i=l||(l={})).TASK="Task",i.BUG="Bug",i.FEATURE="Feature",i.SUPPORT="Support",l;var i})(),u=(()=>{return(i=u||(u={})).OPEN="Open",i.IN_PROGRESS="In Progress",i.REVIEW="Ready For Review",i.COMPLETED="Completed",u;var i})();class q{constructor(){this.status=u.OPEN,this.priority=p.LOW,this.type=l.BUG}}var t=s(5e3),Z=s(4004),C=s(2340),I=s(520);let U=(()=>{class i{constructor(e){this.http=e,this.apiUri=C.N.apiUri}getTicketsByProjectId(e){return this.http.get(this.apiUri+`/projects/${e}/tickets`)}getTicketsByUserId(e){return this.http.get(this.apiUri+`/tickets/user/${e}`)}getTicketById(e){return this.http.get(this.apiUri+`/tickets/${e}`)}createTicket(e){return this.http.post(this.apiUri+"/tickets",e)}updateTicket(e){return this.http.put(this.apiUri+"/tickets/"+e._id,e)}addCommentToTicket(e,o){return this.http.post(this.apiUri+`/tickets/${o}/comments`,{content:e})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(I.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var F=s(2290);let f=(()=>{class i{constructor(e,o,r,m){this.ticketService=e,this.router=o,this.route=r,this.toastr=m}loadTicketsByProjectId(e){return this.ticketService.getTicketsByProjectId(e).pipe((0,Z.U)(o=>o.tickets))}getTicketsByUserId(e){return this.ticketService.getTicketsByUserId(e).pipe((0,Z.U)(o=>o.tickets))}createTicket(e){const o=e.projectId;this.ticketService.createTicket(e).subscribe(()=>{this.router.navigate(["projects",o,"tickets"]),this.toastr.success("Ticket created","Success")})}updateTicket(e){const o=e.projectId;this.ticketService.updateTicket(e).subscribe(()=>{this.router.navigate(["projects",o,"tickets"]),this.toastr.success("Ticket updated","Success")})}getTicketById(e){return this.ticketService.getTicketById(e)}addCommentToTicket(e,o){return this.ticketService.addCommentToTicket(e,o)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(U),t.LFG(d.F0),t.LFG(d.gz),t.LFG(F._W))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var T=s(564),x=s(264),g=s(5299);function j(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"option",45),t._uU(2),t.qZA(),t.BQk()),2&i){const e=n.$implicit;t.xp6(1),t.s9C("value",e._id),t.xp6(1),t.Oqu(e.name)}}function J(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(1,"div",9),t.TgZ(2,"div",10),t.TgZ(3,"label",11),t._uU(4,"Name"),t.qZA(),t._UZ(5,"input",12),t.qZA(),t.TgZ(6,"div",13),t.TgZ(7,"label",14),t._uU(8,"Assigned To"),t.qZA(),t.TgZ(9,"div"),t.TgZ(10,"select",15),t.TgZ(11,"option",16),t._uU(12,"None"),t.qZA(),t.YNc(13,j,3,2,"ng-container",17),t.ALo(14,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",18),t.TgZ(16,"label",19),t._uU(17,"Description"),t.qZA(),t._UZ(18,"textarea",20),t.qZA(),t.TgZ(19,"div",21),t.TgZ(20,"div",22),t.TgZ(21,"label",23),t._uU(22,"Priority"),t.qZA(),t.TgZ(23,"div"),t.TgZ(24,"select",24),t.TgZ(25,"option",25),t._uU(26,"Low"),t.qZA(),t.TgZ(27,"option",26),t._uU(28,"Medium"),t.qZA(),t.TgZ(29,"option",27),t._uU(30,"High"),t.qZA(),t.TgZ(31,"option",28),t._uU(32,"Critical"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",22),t.TgZ(34,"label",29),t._uU(35,"Status"),t.qZA(),t.TgZ(36,"div"),t.TgZ(37,"select",30),t.TgZ(38,"option",31),t._uU(39,"Open"),t.qZA(),t.TgZ(40,"option",32),t._uU(41,"In Progress"),t.qZA(),t.TgZ(42,"option",33),t._uU(43,"Ready For Review"),t.qZA(),t.TgZ(44,"option",34),t._uU(45,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",21),t.TgZ(47,"div",22),t.TgZ(48,"label",35),t._uU(49,"Type"),t.qZA(),t.TgZ(50,"div"),t.TgZ(51,"select",36),t.TgZ(52,"option",37),t._uU(53,"Task"),t.qZA(),t.TgZ(54,"option",38),t._uU(55,"Bug"),t.qZA(),t.TgZ(56,"option",39),t._uU(57,"Feature"),t.qZA(),t.TgZ(58,"option",40),t._uU(59,"Support"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"div",22),t.TgZ(61,"label",41),t._uU(62,"Due Date"),t.qZA(),t.TgZ(63,"div"),t._UZ(64,"input",42),t.qZA(),t.qZA(),t.qZA(),t.TgZ(65,"div",43),t.TgZ(66,"button",44),t._uU(67),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.ticketForm),t.xp6(13),t.Q6J("ngForOf",t.lcZ(14,3,e.projectMembers$)),t.xp6(54),t.hij(" ",e.isAddMode?"Create":"Update"," ticket ")}}function L(i,n){if(1&i&&(t.TgZ(0,"div",47),t.TgZ(1,"div",48),t._UZ(2,"img",49),t.qZA(),t.TgZ(3,"div",50),t.TgZ(4,"div",51),t.TgZ(5,"p",52),t._uU(6),t.qZA(),t.TgZ(7,"p",53),t._uU(8),t.ALo(9,"date"),t.qZA(),t.qZA(),t.TgZ(10,"div"),t._uU(11),t.qZA(),t.qZA(),t.qZA()),2&i){const e=n.$implicit;t.xp6(2),t.MGl("src","https://i.pravatar.cc/200?u=",e.postedBy._id,"",t.LSH),t.s9C("title",e.postedBy.name),t.xp6(4),t.hij(" ",e.postedBy.name," "),t.xp6(2),t.hij(" ",t.xi3(9,5,e.createdAt,"MMM dd, yyyy h:mm a")," "),t.xp6(3),t.hij(" ",e.content," ")}}function M(i,n){if(1&i&&(t.ynx(0),t.YNc(1,L,12,8,"div",46),t.BQk()),2&i){const e=n.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function N(i,n){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,M,2,1,"ng-container",7),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.selectedTicket.comments)}}function O(i,n){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",49),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.MGl("src","https://i.pravatar.cc/200?u=",e.user._id,"",t.LSH),t.s9C("title",e.user.name)}}function Y(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",55),t.TgZ(1,"h2",56),t._uU(2,"Comment"),t.qZA(),t.TgZ(3,"div",57),t.YNc(4,O,2,2,"div",7),t.TgZ(5,"form",58),t.NdJ("keydown.enter",function(r){return t.CHM(e),t.oxw(2).onCommentSubmit(r)}),t._UZ(6,"textarea",59),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(4),t.Q6J("ngIf",e.user),t.xp6(1),t.Q6J("formGroup",e.commentForm)}}function Q(i,n){if(1&i&&(t.ynx(0),t.YNc(1,Y,7,2,"div",54),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.commentForm)}}let k=(()=>{class i{constructor(e,o,r,m,ut){this.fb=e,this.ticketFacade=o,this.authFacade=r,this.projectFacade=m,this.route=ut}ngOnInit(){this.projectId=this.route.snapshot.params.id;const e=this.route.snapshot.params.ticketid;this.isAddMode=!e;const o=this.authFacade.getUserDetails();o&&(this.user=o),this.projectMembers$=this.projectFacade.getProjectMembers(this.projectId),this.setCommentFormGroup(),this.isAddMode?(this.selectedTicket=new q,this.setTicketFormGroup()):this.ticketFacade.getTicketById(e).subscribe(r=>{this.selectedTicket=r,this.setTicketFormGroup()})}setTicketFormGroup(){var e=new a.uU("en");this.ticketForm=this.fb.group({name:[this.selectedTicket.name,c.kI.required],description:[this.selectedTicket.description,c.kI.required],priority:[this.selectedTicket.priority],status:[this.selectedTicket.status],type:[this.selectedTicket.type],assignedTo:[this.selectedTicket.assignedTo||""],dueDate:[e.transform(this.selectedTicket.dueDate,"yyyy-MM-dd")]})}setCommentFormGroup(){this.commentForm=this.fb.group({content:[""]})}onSubmit(){this.ticketForm.invalid||(this.selectedTicket=Object.assign(Object.assign(Object.assign({},this.selectedTicket),this.ticketForm.value),{projectId:this.projectId}),this.isAddMode?this.ticketFacade.createTicket(this.selectedTicket):this.ticketFacade.updateTicket(this.selectedTicket))}onCommentSubmit(e){e.preventDefault();const o=this.commentForm.value.content.trim();!o||(this.ticketFacade.addCommentToTicket(o,this.selectedTicket._id).subscribe(r=>{this.selectedTicket.comments.push(r.comment)}),this.setCommentFormGroup())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.qu),t.Y36(f),t.Y36(T.O),t.Y36(x.J),t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["add-edit-ticket"]],decls:12,vars:3,consts:[[1,"flex","h-full","items-center","justify-center"],[1,"grid","w-3/4","rounded-lg","bg-white","shadow-xl","md:w-3/5","lg:w-2/5"],[1,"mx-7","flex","justify-between","pt-8"],[1,"text-xl","font-bold","text-gray-600","md:text-2xl"],["routerLink","../"],[1,"rounded-lg","px-4","py-2","font-medium","shadow-md","dark:bg-slate-400","dark:text-white"],["class","mb-8","errorTailor","",3,"formGroup","ngSubmit",4,"ngIf"],[4,"ngIf"],["errorTailor","",1,"mb-8",3,"formGroup","ngSubmit"],[1,"mx-7","mt-5","grid","grid-cols-1","gap-5","md:grid-cols-[1fr_max-content]","md:gap-8"],[1,"grid"],["for","name",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["type","text","placeholder","Title","formControlName","name",1,"mt-1","rounded-lg","border-2","border-cyan-300","py-2","px-3","focus:border-transparent","focus:outline-none","focus:ring-2","focus:ring-cyan-600"],[1,"ml-auto"],["for","assignedTo",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["formControlName","assignedTo",1,"mt-1","rounded-lg","border-2","border-cyan-300"],["value",""],[4,"ngFor","ngForOf"],[1,"mx-7","mt-5","grid"],["for","description",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["placeholder","Description","formControlName","description","rows","6",1,"mt-1","rounded-lg","border-2","border-cyan-300","py-2","px-3","focus:border-transparent","focus:outline-none","focus:ring-2","focus:ring-cyan-600"],[1,"mx-7","mt-5","grid","grid-cols-1","gap-5","md:grid-cols-2","md:gap-8"],[1,""],["for","priority",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["formControlName","priority",1,"mt-1","rounded-lg","border-cyan-300"],["value","Low"],["value","Medium"],["value","High"],["value","Critical"],["for","status",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["formControlName","status",1,"mt-1","rounded-lg","border-cyan-300"],["value","Open"],["value","In Progress"],["value","Ready For Review"],["value","Completed"],["for","type",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["formControlName","type",1,"mt-1","rounded-lg","border-cyan-300"],["value","Task"],["value","Bug"],["value","Feature"],["value","Support"],["for","dueDate",1,"text-light","text-xs","font-medium","text-gray-500","md:text-sm"],["type","date","formControlName","dueDate",1,"mt-1","rounded-lg","border-cyan-300"],[1,"mt-4","flex","items-center","justify-center","py-5"],[1,"w-auto","rounded-lg","bg-cyan-500","px-4","py-2","font-medium","text-white","shadow-xl","hover:bg-cyan-700"],[3,"value"],["class","mx-7 mb-7 flex items-center gap-4 border-t border-slate-300 pt-8",4,"ngFor","ngForOf"],[1,"mx-7","mb-7","flex","items-center","gap-4","border-t","border-slate-300","pt-8"],[1,"shrink-0"],["alt","member portrait",1,"h-8","w-8","rounded-full",3,"src","title"],[1,"grow","space-y-1"],[1,"flex","items-center","justify-between"],[1,"font-medium"],[1,"text-xs","text-slate-400"],["class","mx-7 mb-40 border-t border-slate-300 pt-6",4,"ngIf"],[1,"mx-7","mb-40","border-t","border-slate-300","pt-6"],[1,"ml-12","mb-4","text-lg","font-medium"],[1,"flex","gap-4"],[1,"w-full",3,"formGroup","keydown.enter"],["placeholder","Leave a comment...","formControlName","content",1,"w-full","rounded-lg","border-2","border-cyan-300","focus:border-transparent","focus:outline-none","focus:ring-2","focus:ring-cyan-600"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Ticket"),t.qZA(),t.TgZ(5,"a",4),t.TgZ(6,"div",5),t.TgZ(7,"button"),t._uU(8,"Go Back"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(9,J,68,5,"form",6),t.YNc(10,N,2,1,"div",7),t.YNc(11,Q,2,1,"ng-container",7),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("ngIf",o.ticketForm),t.xp6(1),t.Q6J("ngIf",o.selectedTicket),t.xp6(1),t.Q6J("ngIf",null==o.selectedTicket?null:o.selectedTicket._id))},directives:[d.yS,a.O5,c._Y,c.JL,g.m6,c.sg,g.kH,c.Fj,c.JJ,c.u,c.EJ,c.YN,c.Kr,a.sg],pipes:[a.Ov,a.uU],encapsulation:2}),i})();var _=s(7579),y=s(7146),v=s(1884),A=s(2722),w=s(4605),S=s(1999);function B(i,n){1&i&&(t.TgZ(0,"span",24),t._uU(1,"Open"),t.qZA())}function E(i,n){1&i&&(t.TgZ(0,"span",25),t._uU(1,"In Progress"),t.qZA())}function $(i,n){1&i&&(t.TgZ(0,"span",26),t._uU(1,"Ready for Review"),t.qZA())}function G(i,n){1&i&&(t.TgZ(0,"span",27),t._uU(1,"Completed"),t.qZA())}function D(i,n){1&i&&(t.TgZ(0,"span",28),t._uU(1,"Low"),t.qZA())}function P(i,n){1&i&&(t.TgZ(0,"span",29),t._uU(1,"Medium"),t.qZA())}function R(i,n){1&i&&(t.TgZ(0,"span",30),t._uU(1,"High"),t.qZA())}function H(i,n){1&i&&(t.TgZ(0,"span",31),t._uU(1,"Critical"),t.qZA())}const V=function(i,n){return["/projects",i,"tickets",n]};function z(i,n){if(1&i&&(t.TgZ(0,"tr",9),t.TgZ(1,"td",10),t.YNc(2,B,2,0,"span",11),t.YNc(3,E,2,0,"span",12),t.YNc(4,$,2,0,"span",13),t.YNc(5,G,2,0,"span",14),t.qZA(),t.TgZ(6,"td",15),t.TgZ(7,"a",16),t.TgZ(8,"p",17),t._uU(9),t.qZA(),t.TgZ(10,"p",18),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"td",10),t.YNc(13,D,2,0,"span",19),t.YNc(14,P,2,0,"span",20),t.YNc(15,R,2,0,"span",21),t.YNc(16,H,2,0,"span",22),t.qZA(),t.TgZ(17,"td",15),t.TgZ(18,"p"),t._uU(19),t.qZA(),t.qZA(),t.TgZ(20,"td",15),t.TgZ(21,"p",23),t._uU(22),t.ALo(23,"date"),t.qZA(),t.qZA(),t.qZA()),2&i){const e=n.$implicit;let o;t.xp6(2),t.Q6J("ngIf","Open"===e.status),t.xp6(1),t.Q6J("ngIf","In Progress"===e.status),t.xp6(1),t.Q6J("ngIf","Ready For Review"===e.status),t.xp6(1),t.Q6J("ngIf","Completed"===e.status),t.xp6(2),t.Q6J("routerLink",t.WLB(19,V,e.project,e._id)),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Q6J("ngIf","Low"===e.priority),t.xp6(1),t.Q6J("ngIf","Medium"===e.priority),t.xp6(1),t.Q6J("ngIf","High"===e.priority),t.xp6(1),t.Q6J("ngIf","Critical"===e.priority),t.xp6(2),t.Gre("whitespace-nowrap text-gray-900 ",null!=e.assignedTo&&e.assignedTo.name?"":"italic",""),t.xp6(1),t.hij(" ",null!==(o=null==e.assignedTo?null:e.assignedTo.name)&&void 0!==o?o:"None"," "),t.xp6(3),t.hij(" ",t.xi3(23,16,e.createdAt,"MMM dd, '''yy")," ")}}const W=function(){return["name","description","status","priority","type"]};function X(i,n){if(1&i&&(t.TgZ(0,"div",3),t.TgZ(1,"table",4),t.TgZ(2,"thead"),t.TgZ(3,"tr",5),t.TgZ(4,"th",6),t._uU(5,"Status"),t.qZA(),t.TgZ(6,"th",7),t._uU(7,"Ticket"),t.qZA(),t.TgZ(8,"th",6),t._uU(9,"Priority"),t.qZA(),t.TgZ(10,"th",7),t._uU(11,"Assigned To"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Created"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,z,24,22,"tr",8),t.ALo(16,"listFilterPipe"),t.qZA(),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(15),t.Q6J("ngForOf",t.Dn7(16,1,e.tickets,t.DdM(5,W),e.searchTerm))}}function K(i,n){1&i&&(t.TgZ(0,"div",32),t._uU(1," The project currently has no tickets. Try creating one. "),t.qZA())}let b=(()=>{class i{ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ticket-list"]],inputs:{tickets:"tickets",searchTerm:"searchTerm"},decls:4,vars:2,consts:[[1,"-mx-4","overflow-x-auto","px-4","py-4","sm:-mx-8","sm:px-8"],["class","inline-block min-w-full overflow-hidden rounded-lg shadow",4,"ngIf","ngIfElse"],["noData",""],[1,"inline-block","min-w-full","overflow-hidden","rounded-lg","shadow"],[1,"min-w-full","leading-normal"],[1,"whitespace-nowrap","bg-cyan-200","text-xs","font-medium","uppercase","tracking-wider","text-gray-600","dark:bg-slate-600","dark:text-gray-200"],[1,"px-5","py-3","text-center"],[1,"px-5","py-3","text-left"],["class","bg-white dark:bg-gray-100",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-100"],[1,"border-b","border-gray-200","px-5","py-5","text-center","text-sm"],["class","whitespace-nowrap rounded-full bg-blue-200 px-3 py-1.5 text-sm font-medium tracking-wider text-blue-700 shadow-sm",4,"ngIf"],["class","whitespace-nowrap rounded-full bg-green-300 px-3 py-1.5 text-sm font-medium tracking-wider text-green-700 shadow-sm",4,"ngIf"],["class","whitespace-nowrap rounded-full bg-yellow-300 px-3 py-1.5 text-sm font-medium tracking-wider text-yellow-700 shadow-sm",4,"ngIf"],["class","whitespace-nowrap rounded-full bg-slate-300 px-3 py-1.5 text-sm font-medium tracking-wider text-slate-700 shadow-sm",4,"ngIf"],[1,"border-b","border-gray-200","px-5","py-5","text-sm"],[3,"routerLink"],[1,"text-base","text-gray-900"],[1,"line-clamp-1","text-gray-500"],["class","rounded-full bg-green-600 px-8 py-0.5 text-sm font-medium tracking-wider text-white shadow-sm",4,"ngIf"],["class","rounded-full bg-orange-600 px-8 py-0.5 text-sm font-medium tracking-wider text-white shadow-sm",4,"ngIf"],["class","rounded-full bg-red-600 px-8 py-0.5 text-sm font-medium tracking-wider text-white shadow-sm",4,"ngIf"],["class","rounded-full bg-black px-8 py-0.5 text-sm font-medium tracking-wider text-white shadow-sm",4,"ngIf"],[1,"whitespace-nowrap","text-gray-900"],[1,"whitespace-nowrap","rounded-full","bg-blue-200","px-3","py-1.5","text-sm","font-medium","tracking-wider","text-blue-700","shadow-sm"],[1,"whitespace-nowrap","rounded-full","bg-green-300","px-3","py-1.5","text-sm","font-medium","tracking-wider","text-green-700","shadow-sm"],[1,"whitespace-nowrap","rounded-full","bg-yellow-300","px-3","py-1.5","text-sm","font-medium","tracking-wider","text-yellow-700","shadow-sm"],[1,"whitespace-nowrap","rounded-full","bg-slate-300","px-3","py-1.5","text-sm","font-medium","tracking-wider","text-slate-700","shadow-sm"],[1,"rounded-full","bg-green-600","px-8","py-0.5","text-sm","font-medium","tracking-wider","text-white","shadow-sm"],[1,"rounded-full","bg-orange-600","px-8","py-0.5","text-sm","font-medium","tracking-wider","text-white","shadow-sm"],[1,"rounded-full","bg-red-600","px-8","py-0.5","text-sm","font-medium","tracking-wider","text-white","shadow-sm"],[1,"rounded-full","bg-black","px-8","py-0.5","text-sm","font-medium","tracking-wider","text-white","shadow-sm"],[1,"mt-8","text-center","text-2xl","font-medium"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,X,17,6,"div",1),t.qZA(),t.YNc(2,K,2,0,"ng-template",null,2,t.W1O)),2&e){const r=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.tickets.length)("ngIfElse",r)}},directives:[a.O5,a.sg,d.yS],pipes:[S.$,a.uU],encapsulation:2}),i})();function tt(i,n){if(1&i&&(t.ynx(0),t._UZ(1,"img",11),t.BQk()),2&i){const e=n.$implicit;t.xp6(1),t.MGl("src","https://i.pravatar.cc/200?u=",e,"",t.LSH)}}function et(i,n){if(1&i&&(t.TgZ(0,"div",7),t.TgZ(1,"h1",8),t._uU(2),t.qZA(),t.TgZ(3,"div",9),t.YNc(4,tt,2,1,"ng-container",10),t.qZA(),t.qZA()),2&i){const e=n.ngIf;t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.Q6J("ngForOf",e.members)}}function it(i,n){if(1&i&&(t.ynx(0),t._UZ(1,"ticket-list",12),t.BQk()),2&i){const e=n.ngIf,o=t.oxw();t.xp6(1),t.Q6J("tickets",e)("searchTerm",o.searchTerm)}}function ot(i,n){if(1&i&&(t.ynx(0),t._UZ(1,"img",14),t.BQk()),2&i){const e=n.$implicit;t.xp6(1),t.MGl("src","https://i.pravatar.cc/200?u=",e,"",t.LSH)}}function rt(i,n){if(1&i&&(t.TgZ(0,"div",10),t.TgZ(1,"h1",11),t._uU(2),t.qZA(),t.TgZ(3,"div",12),t.YNc(4,ot,2,1,"ng-container",13),t.qZA(),t.qZA()),2&i){const e=n.ngIf;t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.Q6J("ngForOf",e.members)}}const st=function(){return["../invite"]};function ct(i,n){1&i&&(t.TgZ(0,"div",7),t.TgZ(1,"a",15),t._uU(2,"Add member"),t.qZA(),t.qZA()),2&i&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,st)))}function at(i,n){if(1&i&&(t.ynx(0),t._UZ(1,"ticket-list",16),t.BQk()),2&i){const e=n.ngIf,o=t.oxw();t.xp6(1),t.Q6J("tickets",e)("searchTerm",o.searchTerm)}}const dt=[{path:"",component:(()=>{class i{constructor(e,o,r,m){this.ticketFacade=e,this.projectFacade=o,this.authFacade=r,this.route=m,this.destroy$=new _.x,this.filterInput=new c.NI,this.searchTerm=""}ngOnInit(){var e;const o=null===(e=this.authFacade.getUserDetails())||void 0===e?void 0:e._id;o&&(this.tickets$=this.ticketFacade.getTicketsByUserId(o)),this.filterInput.valueChanges.pipe((0,y.b)(200),(0,v.x)(),(0,A.R)(this.destroy$)).subscribe(r=>this.searchTerm=r)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f),t.Y36(x.J),t.Y36(T.O),t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["my-tickets"]],decls:11,vars:8,consts:[[1,"w-full","rounded-md","p-12"],["class","mb-2 flex items-center",4,"ngIf"],[1,"flex","items-center","pb-6"],[1,"text-xl","font-medium","text-gray-600","dark:text-gray-100"],[1,"ml-8","flex","items-center"],["ngDefaultControl","",3,"searchPlaceholder","formControl"],[4,"ngIf"],[1,"mb-2","flex","items-center"],[1,"mr-6","text-2xl","font-medium","text-gray-600","dark:text-gray-100"],[1,"flex","gap-1"],[4,"ngFor","ngForOf"],["alt","member portrait",1,"h-7","w-7","rounded-full",3,"src"],[3,"tickets","searchTerm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,et,5,2,"div",1),t.ALo(2,"async"),t.TgZ(3,"div",2),t.TgZ(4,"div"),t.TgZ(5,"h2",3),t._uU(6," My Tickets "),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"search-input",5),t.qZA(),t.qZA(),t.YNc(9,it,2,2,"ng-container",6),t.ALo(10,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,o.project$)),t.xp6(7),t.Q6J("searchPlaceholder","search tickets...")("formControl",o.filterInput),t.xp6(1),t.Q6J("ngIf",t.lcZ(10,6,o.tickets$)))},directives:[a.O5,w.J,c.Fj,c.JJ,c.oH,g.kH,a.sg,b],pipes:[a.Ov],encapsulation:2}),i})()},{path:"tickets",component:(()=>{class i{constructor(e,o,r,m){this.ticketFacade=e,this.projectFacade=o,this.authFacade=r,this.route=m,this.destroy$=new _.x,this.filterInput=new c.NI,this.searchTerm=""}ngOnInit(){const e=this.route.snapshot.params.id;this.tickets$=this.ticketFacade.loadTicketsByProjectId(e),this.project$=this.projectFacade.getProjectById(e),this.filterInput.valueChanges.pipe((0,y.b)(200),(0,v.x)(),(0,A.R)(this.destroy$)).subscribe(o=>this.searchTerm=o)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f),t.Y36(x.J),t.Y36(T.O),t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ticket-view"]],decls:15,vars:9,consts:[[1,"w-full","rounded-md","p-12"],["class","mb-2 flex items-center",4,"ngIf"],[1,"flex","items-center","justify-between","pb-6"],[1,"text-xl","font-medium","text-gray-600","dark:text-gray-100"],[1,"flex","items-center"],["ngDefaultControl","",3,"searchPlaceholder","formControl"],["class","ml-8 lg:ml-16",4,"ngIf"],[1,"ml-8","lg:ml-16"],["routerLink","new",1,"cursor-pointer","rounded-md","bg-indigo-600","px-4","py-2","font-medium","tracking-wide","text-white"],[4,"ngIf"],[1,"mb-2","flex","items-center"],[1,"mr-6","text-2xl","font-medium","text-gray-600","dark:text-gray-100"],[1,"flex","gap-1"],[4,"ngFor","ngForOf"],["alt","member portrait",1,"h-7","w-7","rounded-full",3,"src"],[1,"cursor-pointer","rounded-md","bg-blue-600","px-4","py-2","font-medium","tracking-wide","text-white",3,"routerLink"],[3,"tickets","searchTerm"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,rt,5,2,"div",1),t.ALo(2,"async"),t.TgZ(3,"div",2),t.TgZ(4,"div"),t.TgZ(5,"h2",3),t._uU(6," Tickets "),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"search-input",5),t.YNc(9,ct,3,2,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"a",8),t._uU(12,"New ticket"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(13,at,2,2,"ng-container",9),t.ALo(14,"async"),t.qZA()),2&e){let r;t.xp6(1),t.Q6J("ngIf",t.lcZ(2,5,o.project$)),t.xp6(7),t.Q6J("searchPlaceholder","search tickets...")("formControl",o.filterInput),t.xp6(1),t.Q6J("ngIf","Admin"===(null==(r=o.authFacade.getUserDetails())?null:r.role)||"Manager"===(null==(r=o.authFacade.getUserDetails())?null:r.role)),t.xp6(4),t.Q6J("ngIf",t.lcZ(14,7,o.tickets$))}},directives:[a.O5,w.J,c.Fj,c.JJ,c.oH,g.kH,d.yS,a.sg,b],pipes:[a.Ov],encapsulation:2}),i})()},{path:"tickets/new",component:k},{path:"tickets/:ticketid",component:k}];let mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(dt)],d.Bz]}),i})();var pt=s(4466);let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.ez,mt,pt.m]]}),i})()}}]);