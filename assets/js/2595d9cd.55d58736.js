"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<n;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9002:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>h,toc:()=>p,default:()=>u});var r=a(3117),o=a(102),n=(a(7294),a(3905));const i=["components"],s={slug:"/unshared-projects",sidebar_label:"Unshared Projects"},l="Unshared projects will be actually private eventually",h={unversionedId:"website/unshared-projects",id:"website/unshared-projects",title:"Unshared projects will be actually private eventually",description:"\x3c!--",source:"@site/docs/website/unshared-projects.md",sourceDirName:"website",slug:"/unshared-projects",permalink:"/unshared-projects",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/website/unshared-projects.md",tags:[],version:"current",frontMatter:{slug:"/unshared-projects",sidebar_label:"Unshared Projects"},sidebar:"sidebar",previous:{title:"Intro",permalink:"/"},next:{title:"Cloud Variables",permalink:"/cloud-variables"}},p=[{value:"June 1 Update",id:"june-1",children:[],level:2},{value:"What&#39;s actually happening",id:"whats-happening",children:[],level:2},{value:"This is a good thing",id:"good-thing",children:[],level:2},{value:"Workarounds",id:"workarounds",children:[],level:2},{value:"Original page",id:"original",children:[{value:"Why doesn&#39;t TurboWarp refuse to load unshared projects?",id:"why-not-fix",children:[],level:3},{value:"How to protect your unshared projects",id:"prevention",children:[],level:3},{value:"What is project ID 1?",id:"what-is-1",children:[],level:3}],level:2}],c={toc:p};function u(e){let{components:t}=e,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"unshared-projects-will-be-actually-private-eventually"},"Unshared projects will be actually private eventually"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Updated June 1, 2022")," - Loading unshared projects in TurboWarp, forkphorus, the packager, and other third-party site will no longer be possible ",(0,n.kt)("strong",{parentName:"p"},"at some point in the future")," due to upcoming changes to the Scratch API that will make unshared projects actually private."),(0,n.kt)("p",null,"We think this is a ",(0,n.kt)("a",{parentName:"p",href:"#good-thing"},"good thing"),", but you may have to find ",(0,n.kt)("a",{parentName:"p",href:"#workarounds"},"workarounds")," depending on your workflow."),(0,n.kt)("h2",{id:"june-1"},"June 1 Update"),(0,n.kt)("p",null,"A Scratch Team forum post confirms what we've been speculating for a while: these changes will make unshared projects actually private as they should've been from the start. This rest of this page has been updated to reflect this."),(0,n.kt)("p",null,"When the changes will happen remains unknown. We will not provide time estimates beyond \"at some point in the future\". Blind guesses won't help. Angrily venting about your disagreement on the forums also won't help."),(0,n.kt)("p",null,"There are ",(0,n.kt)("a",{parentName:"p",href:"#good-thing"},"good reasons")," for this change to be made."),(0,n.kt)("p",null,"Consider directing people to this page instead of just paraphrasing to reduce confusion."),(0,n.kt)("h2",{id:"whats-happening"},"What's actually happening"),(0,n.kt)("p",null,'Scratch is changing how project loading works to use a "project token". For unshared projects, this token can only be accessed by the owner of the project.'),(0,n.kt)("p",null,"Access to this token will be required to download a project, which will make it will be impossible to load an unshared project in TurboWarp, forkphorus, scratch-gui, or any other third-party site by knowing just the project ID. These changes will affect your own unshared projects even if you are signed into Scratch in the same browser."),(0,n.kt)("h2",{id:"good-thing"},"This is a good thing"),(0,n.kt)("p",null,"Securing unshared projects is a decade overdue."),(0,n.kt)("p",null,"Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says \"only you can see it\". Many unshared projects include pictures and videos of children, their friends, their family, and other personal information under the assumption that unshared projects are actually private."),(0,n.kt)("p",null,'In most other large websites, "unshared" or "private" things actually being effectively public would be considered a critical security bug and would usually be eligible for a very large bug bounty. (',(0,n.kt)("a",{parentName:"p",href:"https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/"},"example"),")"),(0,n.kt)("p",null,"We've always had the stance that if people want unshared projects to actually be private, they should talk to the Scratch Team, and perhaps enough people did that for the Scratch Team to listen."),(0,n.kt)("h2",{id:"workarounds"},"Workarounds"),(0,n.kt)("p",null,"Our first priority is making sure that shared projects continue to work with minimal interruption. Anything else related to unshared projects will happen later if at all."),(0,n.kt)("p",null,"You should assume that existing links relying on viewing unshared projects, including embeds, will not work in the future without changes."),(0,n.kt)("p",null,"Here's our current list of suggested workarounds:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The best way to share a project with other people is to share it on the Scratch website. The Scratch community is really nice. This is what Scratch encourages you to do."),(0,n.kt)("li",{parentName:"ol"},"If you just want to test your project in a third-party site without sharing it, you can download the project to your computer (File > Save to your computer) and load the downloaded file. Most tools support this."),(0,n.kt)("li",{parentName:"ol"},"For embedding Scratch projects into other sites without sharing them on Scratch, use ",(0,n.kt)("a",{parentName:"li",href:"https://packager.turbowarp.org/"},"TurboWarp Packager"),", ",(0,n.kt)("a",{parentName:"li",href:"https://forkphorus.github.io/packager/"},"forkphorus packager"),", or ",(0,n.kt)("a",{parentName:"li",href:"https://sheeptester.github.io/htmlifier/"},"HTMLifier")," (",(0,n.kt)("a",{parentName:"li",href:"/packager/embedding"},"guide on embedding"),"). These could be an alternative to sharing your projects on Scratch if you find a place to upload the generated files.")),(0,n.kt)("p",null,"More workarounds for things like collaborations may or may not be being looked into, but no promises can be made. Assume that nothing will happen. Scratch is 15 years old while TurboWarp is two years old. Collaborations happened just fine during the 13 years without TurboWarp and will continue just fine."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"We've seen a couple people suggesting this so we want to be clear: ",(0,n.kt)("strong",{parentName:"p"},"ANY site other than scratch.mit.edu that asks you for your Scratch password is a SCAM. You WILL lose your entire account and all of your projects irrecoverably. Legitimate sites will NEVER ask you for your Scratch password. ",(0,n.kt)("span",{style:{textDecoration:"underline"}},"No exceptions"),".")))),(0,n.kt)("h2",{id:"original"},"Original page"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This section will remain accurate until the changes are implemented."))),(0,n.kt)("p",null,"You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you may be concerned about that."),(0,n.kt)("h3",null,"This is a problem with the Scratch API that's been around for nine years. It's not a TurboWarp bug."),(0,n.kt)("p",null,"Even the official Scratch development builds maintained by the Scratch Team can view unshared projects (example: ",(0,n.kt)("a",{parentName:"p",href:"https://llk.github.io/scratch-gui/develop/#1"},"https://llk.github.io/scratch-gui/develop/#1"),") which implies to us that the Scratch Team does not consider this a serious issue. As TurboWarp loads projects the same way as scratch-gui, it's also able to load unshared projects. This problem can only be properly solved by the Scratch Team."),(0,n.kt)("h3",{id:"why-not-fix"},"Why doesn't TurboWarp refuse to load unshared projects?"),(0,n.kt)("p",null,"Even if TurboWarp refused to load unshared projects, the root cause is still the Scratch API. Unshared projects could still be easily viewed using the official Scratch development builds or many other tools. TurboWarp is fully open source, so someone could easily make their own version without the code to check if a project is unshared. Unshared projects would not be any safer."),(0,n.kt)("p",null,"This is a problem that can only be fixed by the Scratch Team implementing access control for projects.scratch.mit.edu (where project data is downloaded from) as they've already done for api.scratch.mit.edu (where project titles and descriptions are loaded from). If you think this is important, let the Scratch Team know."),(0,n.kt)("h3",{id:"prevention"},"How to protect your unshared projects"),(0,n.kt)("p",null,"Don't share the project ID (the numbers in the URL to your project) with others. That includes links to your project and screenshots/videos that include your browser's URL bar."),(0,n.kt)("p",null,"If the project ID has already been leaked, and you don't want people to see the project, DO NOT delete it through the My Stuff page as that won't actually delete the project data. Instead, you should:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Save a copy of the project through the File > Save as a copy menu."),(0,n.kt)("li",{parentName:"ol"},"Wait for the copy to finish saving. Refresh the copied project to make sure that it saved correctly."),(0,n.kt)("li",{parentName:"ol"},"Go back to the original project and manually delete everything from the original project. Manually remove all sprites, sounds, costumes, and scripts that you don't want other people to find, then save the project again to overwrite the project. Deleting a project through the My Stuff page, even emptying the trash, is not enough because Scratch won't actually delete the project data."),(0,n.kt)("li",{parentName:"ol"},"Do all future work on the copy you created in step 1.")),(0,n.kt)("p",null,"If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that. If someone has stolen one of your unshared projects and released it as-if they made it, contact the Scratch Team."),(0,n.kt)("p",null,"Another way to keep your project safe would be to use an offline editor such as ",(0,n.kt)("a",{parentName:"p",href:"https://scratch.mit.edu/download"},"Scratch Desktop")," or ",(0,n.kt)("a",{parentName:"p",href:"https://desktop.turbowarp.org/"},"TurboWarp Desktop"),"."),(0,n.kt)("p",null,"This is also a good opportunity to save a backup of your project to somewhere safe on your computer so that you don't have to learn the importance of backups the ",(0,n.kt)("a",{parentName:"p",href:"https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance"},"hard way"),"."),(0,n.kt)("h3",{id:"what-is-1"},"What is project ID 1?"),(0,n.kt)("p",null,"Curious people have visited ",(0,n.kt)("a",{parentName:"p",href:"https://turbowarp.org/1"},"https://turbowarp.org/1")," or ",(0,n.kt)("a",{parentName:"p",href:"https://llk.github.io/scratch-gui/develop/#1"},"https://llk.github.io/scratch-gui/develop/#1")," and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1."))}u.isMDXComponent=!0}}]);