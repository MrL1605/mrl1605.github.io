(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(36)},18:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(11),r=a.n(n),c=(a(18),a(12));let i={};a.n(c).a.create({baseURL:"https://raw.githubusercontent.com/MrL1605/demo/master/",responseType:"json"}).get("/large-db-v3.json").then(e=>{i=e.data});class m extends s.Component{constructor(e){super(e),this.state={nm:!1,styleInd:0}}render(){const e=["https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css","https://bootswatch.com/4/materia/bootstrap.min.css","https://bootswatch.com/4/darkly/bootstrap.min.css","https://bootswatch.com/4/slate/bootstrap.min.css"],t=["Default","Materia","Darkly","Slate"],a=[!1,!1,!0,!0],s=e=>{this.setState({styleInd:e})},n=this.state,r=n.styleInd;n.nm;return l.a.createElement("div",null,e.map((t,a)=>l.a.createElement("link",{key:a,href:e[r],rel:r===a?"stylesheet":"stylesheet alt"})),l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light fixed-top",style:{paddingTop:"0.1rem",paddingBottom:"0.1rem"}},l.a.createElement("a",{className:"navbar-brand",onClick:()=>window.location.reload()},l.a.createElement("img",{src:"https://github.com/MrL1605/demo/raw/master/assets/clari5_logo.png",style:{height:"58px"},alt:"Clari5 Logo"})),l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navBarThemeDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},t[r]," Theme"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navBarThemeDropdown"},t.map((e,t)=>l.a.createElement("a",{className:"dropdown-item",href:"#",key:e,onClick:()=>s(t)},l.a.createElement("i",{className:"fas mr-1 "+(a[t]?"fa-moon":"fa-sun")}),e)))))))}}class o extends s.Component{constructor(e){super(e),this.contextRef=l.a.createRef(),this.state={showTabs:{activity:!0}}}componentDidMount(){setTimeout(()=>{this.setState({commentDetails:i.issue_comments[this.props.issueId]})},3500)}render(){this.state.showTabs,this.state.commentDetails;return l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"#",onClick:()=>this.props.goBack()},this.props.project)),l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"#"},this.props.issueId)),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Incident Details"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},this.getPlaceHolder()),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card text-white bg-secondary mb-3"},l.a.createElement("div",{className:"card-header"},"Pinned Details"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-secondary"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Project:"),l.a.createElement("dd",null,this.state.projectName))),l.a.createElement("li",{className:"list-group-item list-group-item-secondary"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Score:"),l.a.createElement("dd",null,"200"))),l.a.createElement("li",{className:"list-group-item list-group-item-secondary"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Priority"),l.a.createElement("dd",null,"Severe")))),l.a.createElement("div",{className:"card-footer"},"4 comments"))))))}getPlaceHolder(){return l.a.createElement("div",{className:"spinner-grow",style:{width:"4rem",height:"4rem"},role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))}}class d extends s.Component{constructor(e){super(e),this.state={issues:[],all_issues:[],asc_sort_order:!0,pageSize:20,selectedIssue:"",lastVisitedIssue:""},this.updatePageNumber=this.updatePageNumber.bind(this),this.selectIssue=this.selectIssue.bind(this)}componentDidMount(){this.updateIssuesList()}componentWillReceiveProps(e){this.state.projectName!==e.project&&this.setState({selectedIssue:"",projectName:e.project},()=>{this.updateIssuesList()})}updateIssuesList(){let e=i.issues[this.props.project];e?this.setState({all_issues:e},()=>{this.updatePageNumber(1)}):this.setState({all_issues:[]},()=>{this.updatePageNumber(1)})}render(){const e=this.state.asc_sort_order?"up ":"down ",t=this.state.all_issues.length/this.state.pageSize,a=this.state,s=a.activePage,n=a.selectedIssue;let r=[];for(let c=0;c<t;c++)r.push(l.a.createElement("li",{key:c,className:"page-item "+(s===c+1?"active":""),onClick:()=>this.updatePageNumber(c+1)},l.a.createElement("a",{className:"page-link",href:"#"},c+1)));return n?l.a.createElement(o,{goBack:()=>this.selectIssue(""),issueId:n,project:this.props.project,issue_summary:this.state.issue_summary,nm:this.props.nm}):l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-hover table-responsive-sm"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Incident Id"),l.a.createElement("th",null,"Entity Type"),l.a.createElement("th",null,"Entity Id"),l.a.createElement("th",{onClick:()=>{this.setState({asc_sort_order:!this.state.asc_sort_order})}},l.a.createElement("i",{className:"fas mr-1 fa-sort-"+e}),"Updated On"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Score"),l.a.createElement("th",null,"Summary"))),l.a.createElement("tbody",null,this.state.issues.map(e=>this.getRowFromIssue(e)))),l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination justify-content-center"},l.a.createElement("li",{className:"page-item",onClick:()=>this.updatePageNumber(s-1)},l.a.createElement("a",{className:"page-link "+(1===s?"disabled":""),href:"#"},"Previous")),r.map(e=>e),l.a.createElement("li",{className:"page-item",onClick:()=>this.updatePageNumber(s+1)},l.a.createElement("a",{className:"page-link "+ +(s===t?"disabled":""),href:"#"},"Next")))))}selectIssue(e,t={}){e?this.setState({selectedIssue:e,issue_summary:t,lastVisitedIssue:e}):this.setState({selectedIssue:e,issue_summary:{}})}getRowFromIssue(e){const t=new Date(parseInt(e.updated_on)).toLocaleString("en-IN",{timeZone:"UTC"}),a=parseInt(e.score)>=700,s=h({"table-active":this.state.lastVisitedIssue===e.incident_id,disabled:"Closed"===e.status,"table-warning":a});return l.a.createElement("tr",{key:"incident_"+e.incident_id,onClick:()=>this.selectIssue(e.incident_id,e),className:s},l.a.createElement("td",null,l.a.createElement("span",{className:"tag is-success is-light is-normal"},e.incident_id)),l.a.createElement("td",null,this.getIconForEntityType(e.entity_type)),l.a.createElement("td",null,e.entity_id),l.a.createElement("td",null," ",t," "),l.a.createElement("td",null,e.status),l.a.createElement("td",null,a&&l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-exclamation-circle"})),e.score),l.a.createElement("td",null,e.summary))}getIconForEntityType(e){const t=h({"tag is-light":!this.props.nm,"tag is-white":this.props.nm});return"Account"===e?l.a.createElement("span",{className:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-folder"})),e):"Customer"===e?l.a.createElement("span",{className:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-users"})),e):"Employee"===e?l.a.createElement("span",{className:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-suitcase"})),e):"Branch"===e?l.a.createElement("span",{className:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-code-branch"})),e):void 0}updatePageNumber(e){const t=this.state.all_issues.length/this.state.pageSize;if(e<=0||e>=t+1||e===this.state.activePage)return;let a=this.state.pageSize,s=this.state.all_issues.slice(a*(e-1),a*e);this.setState({activePage:e,issues:s})}}class p extends s.Component{constructor(e){super(e),this.state={project:"",projectList:[],nm:!1}}componentDidMount(){setTimeout(()=>{let e=i.projects;e&&this.setState({projectList:e,project:e[0]})},1e3)}render(){const e=e=>{e?this.setState({project:e,visible:!1}):this.setState({visible:!1})},t=this.state,a=t.projectList,s=t.project;return l.a.createElement("div",{style:{marginTop:"90px"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("h6",{className:"justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},"Projects"),0===a.length&&l.a.createElement("div",{className:"spinner-border mx-5 mt-4 mb-1",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")),l.a.createElement("div",{className:"list-group"},0!==a.length&&a.map(t=>l.a.createElement("a",{onClick:()=>e(t),className:"list-group-item list-group-item-action "+(t===s?"active":"")},t)))),l.a.createElement("div",{className:"col-10"},s&&l.a.createElement(d,{project:s})||l.a.createElement("div",{className:"spinner-border mx-5 mt-4 mb-1",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))))),l.a.createElement(m,{night:e=>this.setState({nm:e})}))}}class u extends s.Component{constructor(){super(),this.state={visible:!0,showICMS:!1},this.openICMS=this.openICMS.bind(this)}openICMS(){this.setState({showICMS:!0})}render(){return this.state.showICMS?l.a.createElement(p,null):l.a.createElement("div",{className:"App align-content-center"},l.a.createElement("h1",null,"ICMS"),l.a.createElement("h2",null,"Code Name: Lithium"),l.a.createElement("h3",null,"Let's see what this CSS framework has for you"),l.a.createElement("button",{onClick:this.openICMS,className:"btn btn-outline-light"},"Open ICMS"))}}function h(e){return Object.entries(e).filter(([e,t])=>t).map(([e,t])=>e).join(" ")}for(var E=0,g=["https://code.jquery.com/jquery-3.5.1.slim.min.js","https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"];E<g.length;E++){let e=g[E];const t=document.createElement("script");t.src=e,document.head.appendChild(t)}const b=document.createElement("link");b.rel="stylesheet",b.href="https://use.fontawesome.com/releases/v5.0.2/css/all.css",document.head.appendChild(b);const N=document.getElementById("root");r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),N)}},[[13,1,2]]]);
//# sourceMappingURL=main.1f590be0.chunk.js.map