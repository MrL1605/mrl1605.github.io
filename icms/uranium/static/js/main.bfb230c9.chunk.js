(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),l=a.n(r),c=(a(23),a(24),a(25),a(2)),i=a(3),u=a(6),o=a(5),m=a(4),d=(a(26),a(17)),p={};a.n(d).a.create({baseURL:"https://raw.githubusercontent.com/MrL1605/demo/master/",responseType:"json"}).get("/large-db-v3.json").then(function(e){p=e.data});var h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={nm:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.nm;return s.a.createElement("div",{"data-uk-sticky":"sel-target: .uk-navbar-container"},s.a.createElement("div",{className:"uk-navbar-container","data-uk-navbar":!0},s.a.createElement("div",{className:"uk-navbar-left"},s.a.createElement("a",{className:"uk-navbar-item uk-logo",onClick:function(){return window.location.reload()}},s.a.createElement("img",{style:{height:"58px"},src:"https://github.com/MrL1605/demo/raw/master/assets/clari5_logo.png",alt:"Clari5 Logo"})),s.a.createElement("a",{className:"uk-navbar-toggle","data-uk-toggle":"target: #projects-off-canvas-slide"},s.a.createElement("span",{"data-uk-navbar-toggle-icon":!0}),s.a.createElement("span",{className:"uk-margin-small-left"},"Projects"))),s.a.createElement("div",{className:"uk-navbar-right"},s.a.createElement("div",{className:"uk-navbar-item"},s.a.createElement("a",{className:"uk-button",onClick:function(){e.setState({nm:!e.state.nm},function(){e.props.night(e.state.nm)})}},s.a.createElement("span",{"uk-icon":"icon: star"}),s.a.createElement("span",null,t?"Dark":"Light"))))))}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={issues:[],all_issues:[],asc_sort_order:!0,pageSize:20,selectedIssue:"",lastVisitedIssue:""},n.updatePageNumber=n.updatePageNumber.bind(Object(u.a)(n)),n.selectIssue=n.selectIssue.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateIssuesList()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.state.projectName!==e.project&&this.setState({selectedIssue:"",projectName:e.project},function(){t.updateIssuesList()})}},{key:"updateIssuesList",value:function(){var e=this,t=p.issues[this.props.project];t?this.setState({projectName:this.props.project,all_issues:t},function(){e.updatePageNumber({activePage:1})}):this.setState({projectName:this.props.project,all_issues:[]},function(){e.updatePageNumber({activePage:1})})}},{key:"render",value:function(){for(var e=this,t=this.state.asc_sort_order?"ascending":"descending",a=this.state.all_issues.length/this.state.pageSize,n=(this.state.selectedIssue,[]),r=function(t){n.push(s.a.createElement("li",{key:t,onClick:function(){return e.updatePageNumber({activePage:t+1})}}," ",t+1))},l=0;l<a;l++)r(l);return s.a.createElement("div",{className:"uk-container"},s.a.createElement("div",{"data-uk-grid":!0},s.a.createElement("div",{className:"uk-width-3-4"},s.a.createElement("table",{className:"uk-table uk-table-responsive uk-table-divider uk-table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Incident Id"),s.a.createElement("th",null,"Entity Type"),s.a.createElement("th",null,"Entity Id"),s.a.createElement("th",{className:"sorted "+t,onClick:function(){e.setState({asc_sort_order:!e.state.asc_sort_order})}},"Updated On"),s.a.createElement("th",null,"Status"),s.a.createElement("th",null,"Score"),s.a.createElement("th",null,"Summary"))),s.a.createElement("tbody",null,this.state.issues.map(function(t){return e.getRowFromIssue(t)}))),s.a.createElement("ul",{className:"uk-pagination uk-flex-center"},s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("span",{"data-uk-pagination-previous":!0}))),n.map(function(e){return e}),s.a.createElement("li",null),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("span",{"data-uk-pagination-next":!0}))))),s.a.createElement("div",{className:"uk-width-1-4",style:{paddingTop:"50px"}},s.a.createElement("div",{className:"uk-card uk-card-secondary uk-card-body","data-uk-sticky":"offset: 80"},s.a.createElement("h3",{className:"uk-card-title"},"Project Filters"),s.a.createElement("dl",null,s.a.createElement("dt",null,"Project:"),s.a.createElement("dd",null,this.state.projectName),s.a.createElement("dt",null,"Score:"),s.a.createElement("dd",null," > 200"),s.a.createElement("dt",null,"Priority"),s.a.createElement("dd",null," > Severe"))))))}},{key:"selectIssue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e?this.setState({selectedIssue:e,issue_summary:t,lastVisitedIssue:e}):this.setState({selectedIssue:e,issue_summary:{}})}},{key:"getRowFromIssue",value:function(e){var t=new Date(parseInt(e.updated_on)).toLocaleString("en-IN",{timeZone:"UTC"}),a=parseInt(e.score)>=700;this.state.lastVisitedIssue,e.incident_id;return s.a.createElement("tr",{"data-uk-scrollspy":"cls:uk-animation-fade; repeat: true"},s.a.createElement("td",null,s.a.createElement("span",{className:"uk-label"}," ",e.incident_id," ")),s.a.createElement("td",null,this.getIconForEntityType(e.entity_type)),s.a.createElement("td",null,e.entity_id),s.a.createElement("td",null," ",t," "),s.a.createElement("td",null,e.status),s.a.createElement("td",null,a&&s.a.createElement("span",{"uk-icon":"heart"}),e.score),s.a.createElement("td",null,e.summary))}},{key:"getIconForEntityType",value:function(e){return"Account"===e?s.a.createElement("span",{color:this.props.nm?"black":"default"},s.a.createElement("span",{"data-uk-icon":"folder"})," ",e):"Customer"===e?s.a.createElement("span",{color:this.props.nm?"black":"default"},s.a.createElement("span",{name:"users"}),e):"Employee"===e?s.a.createElement("span",{color:this.props.nm?"black":"default"},s.a.createElement("span",{name:"suitcase"}),e):"Branch"===e?s.a.createElement("span",{color:this.props.nm?"black":"default"},s.a.createElement("span",{name:"code branch"}),e):void 0}},{key:"updatePageNumber",value:function(e){var t=e.activePage,a=this.state.pageSize,n=this.state.all_issues.slice(a*(t-1),a*t);this.setState({issues:n})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={project:"",projectList:[],nm:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){var t=p.projects;t&&e.setState({projectList:t,project:t[0]})},1e3)}},{key:"render",value:function(){var e=this,t=this.state,a=t.nm,n=t.projectList,r=t.project;return s.a.createElement("div",null,s.a.createElement(h,{night:function(t){return e.setState({nm:t})}}),s.a.createElement("div",{id:"projects-off-canvas-slide","data-uk-offcanvas":!0},s.a.createElement("div",{className:"uk-offcanvas-bar"},s.a.createElement("ul",{className:"uk-nav uk-nav-default"},s.a.createElement("li",{className:"uk-nav-header"},"Projects"),n.length&&n.map(function(t){return s.a.createElement("li",{key:t,onClick:function(){return function(t){t?e.setState({project:t,visible:!1}):e.setState({visible:!1})}(t)}},s.a.createElement("a",{className:t===r?" uk-active":""},t))})||s.a.createElement("li",null," Loading... ")))),s.a.createElement("div",{className:""},s.a.createElement("div",{className:""},r&&s.a.createElement(E,{project:r,nm:a})||s.a.createElement("div",{className:"has-text-grey-light"}," Loading... "))))}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={visible:!0,showICMS:!1},n.openICMS=n.openICMS.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"openICMS",value:function(){this.setState({showICMS:!0})}},{key:"render",value:function(){return this.state.showICMS?s.a.createElement(v,null):s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"uk-heading-medium"},"ICMS"),s.a.createElement("h2",{className:"uk-heading-small"},"Code Name: Uranium"),s.a.createElement("h3",null,"Let's see what this CSS framework has for you"),s.a.createElement("button",{className:"uk-button",onClick:this.openICMS},"Open ICMS"))}}]),a}(n.Component),f=document.getElementById("root");l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),f)}},[[18,1,2]]]);
//# sourceMappingURL=main.bfb230c9.chunk.js.map