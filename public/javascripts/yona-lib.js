yobi.Attachments=function(g){function n(r){p({vFile:r.oFile.files?r.oFile.files[0]:r.oFile,bTemporary:!0})}function p(r){if("undefined"===typeof r.vFile)return 0;var a,b=0,d=[];(r.vFile instanceof Array?r.vFile:[r.vFile]).forEach(function(e){var f=r.bTemporary,h=$.tmpl(m.sTplFileItem,{fileId:e.id,fileName:e.name,fileHref:e.url,fileSize:e.size,fileSizeReadable:humanize.filesize(e.size),mimeType:e.mimeType});u(h,e.mimeType);f&&h.addClass("temporary");a=h;"undefined"!==typeof e.id&&""!==e.id?(a.addClass("complete"),
0<k.welTextarea.length&&a.click(c)):(a.attr("id",e.nSubmitId),a.css("opacity","0.2"),a.data("progressBar",a.find(".progress > .bar")));d.push(a);b+=parseInt(e.size,10)});0<d.length&&(0===k.welFileList.length&&(k.welFileList=$(m.sTplFileList),k.welContainer.append(k.welFileList)),k.welFileList.show(),k.welFileListHelp.show(),k.welFileList.append(d));return b}function q(r,a){var k;a=a||"#f36c22";k=r.css("background");r.css("background",a);setTimeout(function(){r.css("background",k)},500)}function l(r){var a=
r.oRes,b=r.nSubmitId,d=r.oRes.id;-1===m.aTemporaryFileIds.indexOf(d)&&(m.aTemporaryFileIds.push(d),k.welTemporaryUploadFileList.val(m.aTemporaryFileIds.join(",")));if(!(a instanceof Object&&a.name&&a.url))return e(b,a);var d=$("#"+b),f=k.welFileList.find('[data-id="'+a.id+'"]');0<f.length?(d.remove(),q(f),a=!1):(d.attr({"data-id":a.id,"data-href":a.url,"data-name":a.name,"data-mime":a.mimeType}),d.find(".name").html(a.name),d.find(".size").html(humanize.filesize(a.size)),d.click(c),a=void 0);!1!==
a&&h(b,100);b=$(["#"+r.nSubmitId,'.attached-file[data-id="'+r.oRes.id+'"]'].join(", "));a=y(r.nSubmitId);d=w(b);f=k.welTextarea;if(0!==f.length){var l=f.prop("selectionStart"),g=d.length-a.length-1;f.val(f.val().split(a).join(d));0<g&&z(f,l+g)}u(b,r.oRes.mimeType)}function f(a){h(a.nSubmitId,a.nPercentComplete)}function h(a,k){var b=$("#"+a);b.data("progressBar").css("width",k+"%");100===1*k&&(b.css("opacity","1"),setTimeout(function(){b.addClass("complete")},1E3))}function e(a){$("#"+a.nSubmitId).remove();
0===k.welFileList.children().length&&(k.welFileList.hide(),k.welFileListHelp.hide());$yobi.notify(Messages("common.attach.error.upload",a.oRes.status,a.oRes.statusText));B(y(a.nSubmitId+".png"))}function c(r){var k=$(r.target);r=$(r.currentTarget);k.hasClass("btn-delete")?b(r):a(r)}function b(a){var b=a.attr("data-href");yobi.Files.deleteFile({sURL:b,fOnLoad:function(){var b=a.data("id"),b=m.aTemporaryFileIds.indexOf(b.toString());-1!==b&&(m.aTemporaryFileIds.splice(b,1),k.welTemporaryUploadFileList.val(m.aTemporaryFileIds.join(",")));
B(a);a.remove();0===k.welFileList.children().length&&(k.welFileList.hide(),k.welFileListHelp.hide())},fOnError:function(a){$yobi.notify(Messages("common.attach.error.delete",a.status,a.statusText))}})}function a(a){var b=k.welTextarea;if(0===b.length)return!1;var m=b.prop("selectionStart"),c=b.val();a="string"===typeof a?a:w(a);b.val(c.substring(0,m)+a+c.substring(m));z(b,m+a.length)}function d(a){return 0<=["video/mp4","video/ogg","video/webm"].indexOf($.trim(a).toLowerCase())}function u(a,b){d(b)&&
a.children("i.mimetype").addClass("yobicon-video2").show()}function w(a){var b=a.attr("data-mime"),k=a.attr("data-name");a=a.attr("data-href");k="["+k+"]("+a+") ";return"image"===b.substr(0,5)?"!"+k:d(b)?$("<div>").append($("<video>").attr("controls",!0).append($("<source>").attr("src",a)).append(k)).html():k}function y(a){return"\x3c!--_"+a+"_--\x3e"}function B(a){var b=k.welTextarea;if(0===b.length)return!1;a="string"===typeof a?a:w(a);var m=b.val().split(a).join(""),m=m.split(a.trim()).join("");
b.val(m)}function z(a,b){var k=a.get(0);k.setSelectionRange?k.setSelectionRange(b,b):k.createTextRange&&(k=k.createTextRange(),k.collapse(!0),k.moveEnd("character",b),k.moveStart("character",b),k.select())}function A(b){a(y(b.nSubmitId))}function t(a){var b=k.welTextarea;if(0===b.length)return!1;var m=b.prop("selectionStart"),c=b.val();b.val(c.substring(0,m)+a.markdownTableText+c.substring(m));z(b,m+a.markdownTableText.length)}function v(b){var k=b.oFiles,m=k.length;if("textarea"===b.weEvt.target.tagName.toLowerCase())for(b=
0;b<m;b++)a(y(k[b].nSubmitId))}function x(a){p({vFile:a.attachments,bTemporary:!1});"undefined"===typeof m.sResourceId&&p({vFile:a.tempFiles,bTemporary:!0})}var m={},k={};(function(a){var b=a=a||{},c='<a href="${fileHref}?action=download" class="download ybtn ybtn-mini" title="'+Messages("button.download")+' ${fileName}"><i class="yobicon-download"></i></a>';m.sTplFileList=b.sTplFileList||'<ul class="attaches wm">';m.sTplFileItem=b.sTplFileItem||'<li class="attach"><a href="${fileHref}" class="vmiddle" target="_blank"><i class="yobicon-paperclip"></i><span class="filename">${fileName}</span><span class="filesize">(${fileSizeReadable})</span></a>'+
c+"</li>";m.sResourceId=b.sResourceId;m.sResourceType=b.sResourceType;b=a;k.welToAttach=b.targetFormId||$(b.elContainer);k.welTemporaryUploadFileList=$('<input type="hidden" name="'+(b.sTagNameForTemporaryUploadFiles||"temporaryUploadFiles")+'">');k.welToAttach.prepend(k.welTemporaryUploadFileList);m.aTemporaryFileIds=[];k.welContainer=$(b.elContainer);k.welContainer.data("isYobiAttachment",!0);m.sResourceId=m.sResourceId||k.welContainer.data("resourceId");m.sResourceType=m.sResourceType||k.welContainer.data("resourceType");
m.attachments||(m.attachments=k.welContainer.data("attachments"));k.welTextarea=$(b.elTextarea);k.welFileList=k.welContainer.find("ul.attached-files");k.welFileListHelp=k.welContainer.find("p.help");b=yobi.Files.getEnv();k.welHelpDroppable=k.welContainer.find(".help-droppable");k.welHelpPastable=k.welContainer.find(".help-pastable");k.welHelpDroppable[b.bDroppable?"show":"hide"]();k.welHelpPastable[b.bPastable?"show":"hide"]();m.attachments?x(m.attachments):(m.sResourceType&&m.sResourceId||m.attachments)&&
yobi.Files.getList({fOnLoad:x,sResourceType:m.sResourceType,sResourceId:m.sResourceId});a.sUploaderId&&yobi.Files.attach({beforeUpload:n,uploadProgress:f,successUpload:l,errorUpload:e,pasteFile:A,pasteMarkdownTable:t,dropFile:v},a.sUploaderId)})(g||{});return{destroy:function(){g.sUploaderId&&yobi.Files.detach({beforeUpload:n,uploadProgress:f,successUpload:l,errorUpload:e,pasteFile:A,dropFile:v},g.sUploaderId);for(var a in k)k[a]=null;k=null}}};yobi.Files=function(){function g(a,b){if(a&&a.length)for(var c=0;c<a.length;c++)n(a[c],z(),b);else n(a,z(),b)}function n(a,b,c){a&&(a.nSubmitId=b||z());return!1===A("beforeUpload",{oFile:a,nSubmitId:a?a.nSubmitId:b},c)?!1:t.bXHR2?p(b,a,c):q(b,a,c)}function p(a,b,c){if(b.size&&b.size>t.nMaxFileSize)return h(a,{status:humanize.filesize(b.size),statusText:Messages("error.toolargefile",humanize.filesize(t.nMaxFileSize))},c);var d=new FormData;d.append("filePath",b,"image.png"===b.name?a+".png":b.name);
$.ajax({type:"post",url:t.sUploadURL,data:d,cache:!1,processData:!1,contentType:!1,success:function(b){f(a,b,c)},error:function(b){h(a,b,c)},xhr:function(){var b=$.ajaxSettings.xhr();b.upload&&b.upload.addEventListener("progress",function(b){b.lengthComputable&&l(a,Math.ceil(b.loaded/b.total*100),c)},!1);return b}})}function q(a,b,c){var d=v[c];if(!d.welInputFile&&!b)return!1;var e=d.welInputFile||$(b);b=e.clone();var u=$('<form method="post" enctype="multipart/form-data" style="display:none">');
b.insertAfter(e);b.on("change",$.proxy(w,this,c));d.welInputFile=b;u.attr("action",t.sUploadURL);u.append(e).appendTo(document.body);var g=function(){e.remove();u.remove();u=e=null},d=t.htUploadOpts;d.success=function(b){f(a,b,c);g();g=null};d.uploadProgress=function(b,k,d,e){l(a,e,c);g();g=null};d.error=function(b){h(a,b,c);g();g=null};u.ajaxForm(d);u.submit()}function l(a,b,c){A("uploadProgress",{nSubmitId:a,nPercentComplete:b},c)}function f(a,b,c){if(!(b instanceof Object&&b.name&&b.url))return h(a,
b);c&&v[c]&&v[c].welInputFile&&v[c].welInputFile.val("");A("successUpload",{nSubmitId:a,oRes:b},c)}function h(a,b,c){A("errorUpload",{nSubmitId:a,oRes:b},c)}function e(b){var c=v[b];c.welInputFile.on("change",$.proxy(w,this,b));if(t.bDroppable){c.welContainer.on({dragover:$.proxy(a,this,b),drop:$.proxy(y,this,b)});var e=$("#tplDropFilesHere").text().trim()||'<div class="upload-drop-here"><div class="msg-wrap"><div class="msg">'+Messages("common.attach.dropFilesHere")+"</div></div></div>";c.welDropper=
$(e);c.welTextarea.before(c.welDropper);c.welTextarea.on({dragover:$.proxy(a,this,b),dragenter:$.proxy(d,this,b),dragleave:$.proxy(u,this,b),drop:$.proxy(y,this,b)})}if(t.bPastable&&c.welTextarea)c.welTextarea.on("paste",$.proxy(B,this,b));c.welContainer.data("isYobiUploader",!0);c.welTextarea.data("isYobiUploader",!0)}function c(){$(document.body).addClass("dragover")}function b(){$(document.body).removeClass("dragover")}function a(a,b){c();b.stopPropagation();b.preventDefault();return!1}function d(a,
b){c();var d=b.originalEvent.dataTransfer,e;e=b.originalEvent.dataTransfer;e=e.types?-1<e.types.indexOf("text/uri-list")?"link":-1<e.types.indexOf("Files")||-1<e.types.indexOf("text/plain")?"copy":"none":"none";d.dropEffect=e;b.stopPropagation();b.preventDefault()}function u(a,c){b();c.originalEvent.dataTransfer.dropEffect="none";c.stopPropagation();c.preventDefault()}function w(a){var b=v[a],c;c=b.welInputFile.val();var d=c.indexOf("fakepath");(c=-1<d?c.substring(d+8+1):c)&&""!==c&&g(b.welInputFile[0].files||
b.welInputFile[0],a)}function y(a,c){b();var d=c.originalEvent.dataTransfer.files;if(d&&0!==d.length)return g(d,a),A("dropFile",{weEvt:c,oFiles:d},a),c.stopPropagation(),c.preventDefault(),!1}function B(a,b){function c(a){var b=!1,d=!1;if(a&&1<a.length)for(var e=0,k=a.length;e<k;e++)"string"===a[e].kind&&a[e].type.match("^text/plain")?b=!0:"file"===a[e].kind&&a[e].type.match("^image/")&&(d=!0);return b&&d}function d(a){var c;if(a&&1<a.length)for(var m=0,f=a.length;m<f;m++)if("string"===a[m].kind&&
a[m].type.match("^text/plain")){var h=b.originalEvent.clipboardData.getData("text/plain").trim().split(/[\n\u0085\u2028\u2029]|\r\n?/g).map(function(a){return a.split("\t")}),u=h[0].map(function(a,b){return e(h,b)});c=h.map(function(a,b){return"| "+a.map(function(a,b){return a+Array(u[b]-a.length+1).join(" ")}).join(" | ")+" |"});c.splice(1,0,"|"+u.map(function(a,b){return Array(u[b]+3).join("-")}).join("|")+"|");c=c.join("\n")}return c}function e(a,b){return Math.max.apply(null,a.map(function(a){return a[b].length}))}
var f=b.originalEvent.clipboardData;if(f&&f.items){var h,u;if(c(f.items))return A("pasteMarkdownTable",{nSubmitId:z(),markdownTableText:d(f.items)},a),b.preventDefault();for(var l=0,g=f.items.length;l<g;l++)h=f.items[l],(u=h.getAsFile())&&0===u.type.indexOf("image/")&&(h=z(),u.name=h+".png",n(u,h,a),A("pasteFile",{nSubmitId:h,oFile:u},a),b.preventDefault())}}function z(){var a=new Date;return a.getMilliseconds()+"-"+a.getFullYear()+""+(a.getMonth()+1)+"-"+a.getDate()+"-"+a.getHours()+""+a.getMinutes()+
"-"+a.getSeconds()}function A(a,b,c){a=(x[a]||[]).concat(x[(c?c+".":"")+a]||[]);if(!1!==a instanceof Array){var d;a.forEach(function(a){d=d||a(b)});return d}}var t={},v={},x={};return{init:function(a){a=a||{};t.sListURL=a.sListURL;t.sUploadURL=a.sUploadURL;t.htUploadOpts=a.htUploadOpts||{dataType:"json"};t.bXHR2=!(!window.ProgressEvent||!window.FileReader)&&!!window.FormData;-1<navigator.userAgent.toLowerCase().indexOf("trident")&&(t.bXHR2=t.bXHR2&&-1<location.protocol.toLowerCase().indexOf("https"));
t.bDroppable="undefined"!=typeof window.File&&t.bXHR2;t.bPastable="undefined"!=typeof document.onpaste&&t.bXHR2&&-1===navigator.userAgent.indexOf("FireFox");t.nMaxFileSize=a.maxFileSize||2147483454},getEnv:function(){return t},getUploader:function(a,b,c){c=c||z();if($(a).data("isYobiUploader")||$(b).data("isYobiUploader"))return!1;var d=c;v[d]={};v[d].welContainer=$(a);v[d].welTextarea=$(b);v[d].welInputFile=v[d].welContainer.find("input[type=file]");v[d].welContainer.attr("data-namespace",d);t.bXHR2||
v[d].welInputFile.attr("multiple",null);e(c);return v[c].welContainer},destroyUploader:function(a){if(a&&v[a]){var b=v[a];b.welInputFile.off();b.welContainer.off();b.welTextarea.off();b.welContainer.data("isYobiUploader",!1);b.welTextarea.data("isYobiUploader",!1);delete v[a]}},attach:function(a,b,c){if("object"===typeof a){c=b?b+".":"";for(var d in a)x[c+d]=x[c+d]||[],x[c+d].push(a[d])}else c=c?c+".":"",x[c+a]=x[c+a]||[],x[c+a].push(b)},detach:function(a,b,c){c=c?c+".":"";if(b){var d=x[c+a];b=d?
d.indexOf(b):-1;-1<b&&x[c+a].splice(b,1)}else x[c+a]=[]},getList:function(a){$.ajax({type:"get",url:t.sListURL,success:a.fOnLoad,error:a.fOnError,data:{containerType:a.sResourceType,containerId:a.sResourceId}})},uploadFile:g,deleteFile:function(a){$yobi.sendForm({sURL:a.sURL,fOnLoad:a.fOnLoad,fOnError:a.fOnError,htData:{_method:"delete"},htOptForm:{method:"post",enctype:"multipart/form-data"}})}}}();yobi.Markdown=function(g){var n,p;function q(e){n=e.sMarkdownRendererUrl;p={gfm:!0,tables:!0,pedantic:!1,sanitize:!1,smartLists:!0,langPrefix:"",highlight:function(c,b){if(b)try{return hljs.highlight(b.toLowerCase(),c).value}catch(a){console.log(a.message)}}}}function l(e,c){var b={body:c,breaks:e.hasClass("readme-body")?!1:!0};$.ajax(n,{type:"post",contentType:"application/json; charset=utf-8",data:JSON.stringify(b),success:function(a){e.html(a);$("pre code").each(function(a,b){hljs.highlightBlock(b)})}})}
function f(e){var c=e.parents('[data-toggle="markdown-editor"]').get(0);if(!c)return!1;$(c).on("click",'a[data-mode="preview"]',function(b){b=$(b.delegateTarget).find("div.markdown-preview");var a=e.val();n&&l(b,a);b.css({"min-height":e.height()+"px"})});e.on("keydown.tabkey-event-handler",function(b){if(9===b.keyCode){b.preventDefault();b=this.selectionStart;var a=this.selectionEnd;this.value=this.value.substring(0,b)+"\t"+this.value.substring(a);this.selectionEnd=b+1}})}function h(e){$(e||"[markdown]").each(function(c,
b){var a=b.tagName.toUpperCase();if("TEXTAREA"===a||"INPUT"===a||"true"==b.contentEditable)f($(b));else{var a=$(b),d=a.text(),d=d?$yobi.xssClean(marked(d,p)):a.html();$(".markdown-loader").remove();a.html(d).removeClass("markdown-before")}})}p=n=void 0;return{init:function(e){e=e||{};q(e);h(e.aTarget)},enableMarkdown:h,render:l}}();yobi.Mention=function(g){function n(e){e=e||window.event;e=e.which||e.keyCode;(64===e||35===e)&&f.doesNotDataLoaded&&l()}function p(){f.nKeyupEventGenerator&&clearInterval(f.nKeyupEventGenerator);f.nKeyupEventGenerator=setInterval(function(){f.sMentionText!=h.welTarget.val()&&(h.welTarget.trigger("keyup"),f.sMentionText=h.welTarget.val())},100)}function q(){f.nKeyupEventGenerator&&(clearInterval(f.nKeyupEventGenerator),f.nKeyupEventGenerator=null)}function l(){f.doesNotDataLoaded=!1;var e;h.welTarget.atwho({at:"@",
limit:10,displayTpl:"<li data-value='@${loginid}'><img style='width:20px;height:20px;' src='${image}'> ${name} <small>${loginid}</small></li>",suspendOnComposing:!1,searchKey:"searchText",insertTpl:"@${loginid}",callbacks:{remoteFilter:function(c,b){NProgress.start();clearTimeout(e);e=setTimeout(function(){$.getJSON(f.url,{query:c,mentionType:"user"},function(a){NProgress.done();b(a.result)})},300)}}}).atwho({at:"#",limit:10,displayTpl:"<li data-value='#${issueNo}'><small>#${issueNo}</small> ${title}</li>",
suspendOnComposing:!1,insertTpl:"#${issueNo}",callbacks:{remoteFilter:function(c,b){NProgress.start();$.getJSON(f.url,{query:c,mentionType:"issue"},function(a){NProgress.done();b(a.result)})},sorter:function(c,b,a){var d,e,f;if(!c)return b;f=[];d=0;for(e=b.length;d<e;d++){a=b[d];if(a.issueNo===c)a.atwhoOrder=0;else{var h=a.issueNo.toLowerCase().indexOf(c.toLowerCase());a.atwhoOrder=d+1+Math.pow(10,h)+(-1<h?0:Math.pow(100,a.title.toLowerCase().indexOf(c.toLowerCase())))}f.push(a)}return f.sort(function(a,
b){return a.atwhoOrder-b.atwhoOrder})}}}).atwho("run")}var f={},h={};(function(e){f=e||{};f.doesNotDataLoaded=!0;f.nKeyupEventGenerator=null;f.sMentionText=null;f.target?h.welTarget=$(f.target):window.console&&console.error("mention form element targeting doesn't exist!");h.welTarget.on("keypress",n);jQuery.browser.mozilla&&(h.welTarget.on("focus",p),h.welTarget.on("blur",q))})(g||{})};yobi.OriginalMessage=function(g){function n(g,n,l){var f,h;f=function(){n();g.click(h)};h=function(){l();g.click(f)};g.click(f)}return{hide:function(g){$.each(g,function(g,l){var f,h,e,c=$(l);c.find(":contains('---')").each(function(){var b=$(this).html();return b&&!$(this).is(c.children(":first"))&&b.match(/(^|^<[^>]+>)---+[^-]*---+/)?(f=$(this),!1):!0});f&&(h=f.add(f.nextAll()).add(f.parents().filter(function(b,a){return 0<c.has(a).length}).nextAll()).hide(),e=$("<button>").css("border",0).css("padding-left",
"5px").css("padding-right","5px").attr("type","button").text("..."),n(e,function(){h.show()},function(){h.hide()}),f.before(e))})}}}();yobi.Pagination=function(g,n){function p(c){var b=n.createElement("a");b.href=c.replace("&amp;","&");return b.search}function q(c,b,a){var d=p(c),e=new RegExp("(^|&|\\?)"+a+"=[^&]+"),f=e.exec(d);b=d=f?d.replace(e,f[1]+a+"="+b):d+"&"+a+"="+b;a=n.createElement("a");a.href=c;a.search="?"==b[0]?b:"?"+b;return a.href}function l(c){var b=$('<input type="number" pattern="[0-9]*" class="input-mini nospinner">');b.prop({name:c.paramNameForPage,max:c.totalPages,min:1});b.val(c.current);b.on("keydown",function(a){var d;
d=c.current;if(!1===e.test(b.val()))b.val(d),d=!1;else{d=parseInt(b.val(),10);var f=parseInt(b.attr("min"),10),h=parseInt(b.attr("max"),10);d<f?b.val(f):d>h&&b.val(h);d=!0}d&&(d=b.val(),"function"===typeof c.submit?c.submit(d):13===a.which&&(n.location.href=q(c.url,d,c.paramNameForPage)))});return b}function f(c){var b=$('<li class="page-num ikon">');if(c.bActive){var a=$("<a pjax-page>");a.html(c.sLinkHTMLOn);"function"===typeof c.submit?(a.attr("href","javascript: void(0);"),a.on("click",function(){c.submit(c.nSubmitPageNum)})):
a.attr("href",c.sLinkHref);b.append(a)}else b.html(c.sLinkHTMLOff);yobi.ShortcutKey&&(a={},a[c.sShortcutKey]=c.sLinkHref,yobi.ShortcutKey.setKeymapLink(a));return b}var h={},e=/^.[0-9]*$/;return{update:function(c,b,a){if(!(0>=b)){c=$(c);a=a||{};a.url=a.url||n.URL;a.firstPage=a.firstPage||1;a.totalPages=b;a.paramNameForPage=a.paramNameForPage||"pageNum";var d;if(e.test(a.current))d=a.current;else{var g=p(a.url);d=parseInt;var w=a.paramNameForPage;h[w]=h[w]||new RegExp("(^|&|\\?)"+w+"=([^&]+)");g=h[w].exec(g);
d=d(g?g[2]:null,10)||a.firstPage}a.current=d;a.hasPrev="undefined"===typeof a.hasPrev?a.current>a.firstPage:a.hasPrev;a.hasNext="undefined"===typeof a.hasNext?a.current<a.totalPages:a.hasNext;if(!$.isNumeric(a.current))throw Error("options.current is not valid: "+a.current);c.html("");c.addClass("page-navigation-wrap");g=Messages("button.prevPage")||"PREV";d='<i class="ico btn-pg-prev"></i><span>'+g+"</span>";g='<i class="ico btn-pg-prev off"></i><span class="off">'+g+"</span>";d=$.extend(a,{bActive:a.hasPrev,
sLinkHref:a.hasPrev?q(a.url,a.current-1,a.paramNameForPage):"",sLinkHTMLOn:d,sLinkHTMLOff:g,sShortcutKey:"LEFT",nSubmitPageNum:a.current-1});d=f(d);w=Messages("button.nextPage")||"NEXT";g="<span>"+w+'</span><i class="ico btn-pg-next"></i>';w='<span class="off">'+w+'</span><i class="ico btn-pg-next off"></i>';g=$.extend(a,{bActive:a.hasNext,sLinkHref:a.hasNext?q(a.url,a.current+1,a.paramNameForPage):"",sLinkHTMLOn:g,sLinkHTMLOff:w,sShortcutKey:"RIGHT",nSubmitPageNum:a.current+1});g=f(g);a=l(a);a=$('<li class="page-num">').append(a);
w=$('<li class="page-num delimiter">').text("/");b=$('<li class="page-num">').text(b);var y=$('<ul class="page-nums">');y.append([d,a,w,b,g]);c.append(y)}}}}(window,document);$(document).on("click.pagination.number-api",'input[name="pageNum"][type="number"]',function(){$(this).select()});yobi.ShortcutKey=function(g){function n(c){var b;var a=h.htKeycodeMap[c.keyCode];if("undefined"===typeof a)b=void 0;else{b=[];var d="";c.altKey&&b.push("ALT");(c.ctrlKey||c.metaKey)&&b.push("CTRL");c.shiftKey&&b.push("SHIFT");b.push(a);b=d=b.join("+").toUpperCase()}a=e[b];if("function"===typeof a){d=c.target.tagName.toUpperCase();c={weEvt:c,welTarget:$(c.target),sTagName:d,sKeyInput:b,bFormInput:-1<h.aFormTags.indexOf(d)};try{a(c)}catch(f){}finally{}}}function p(c,b){if("string"===typeof c){var a,
d=b;a=l(c);e[a]=d}else for(a in c){b=c[a];var d=a,f=b,d=l(d);e[d]=f}}function q(c){c=l(c);delete e[c]}function l(c){c=c.toUpperCase()||"";c=c.replace(h.rxTrim,"");return c=c.split("+").sort(function(b){return-1*h.aCombinationKeys.indexOf(b)}).join("+")}function f(){$(window).off({keydown:n,beforeunload:f});e=h=null}var h={},e={};h.rxTrim=/\s+/g;h.aFormTags=["INPUT","TEXTAREA"];h.aCombinationKeys=["CTRL","ALT","SHIFT"];h.htKeycodeMap={13:"ENTER",38:"UP",40:"DOWN",37:"LEFT",39:"RIGHT",13:"ENTER",27:"ESC",
32:"SPACE",8:"BACKSPACE",9:"TAB",46:"DELETE",33:"PAGEUP",34:"PAGEDOWN",36:"HOME",35:"END",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",219:"[",221:"]",186:";",222:"'",188:",",190:".",191:"/",189:"-",187:"=",220:"\\",192:"`",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",
120:"F9",121:"F10",122:"F11",123:"F12"};$(window).on({keydown:n,beforeunload:f});return{attach:p,detach:q,getHandlers:function(){return e},setKeymapLink:function(c){var b,a=function(a){a.bFormInput||(document.location.href=c[a.sKeyInput])};for(b in c)c[b]?p(b,a):q(b)}}}();(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function q(b){if("function"===typeof e.fOnClickButton&&!1===e.fOnClickButton({weEvt:b,nButtonIndex:$(this).index()}))return!1;l()}function l(){c.welContainer.modal("hide")}function f(){"function"==typeof e.fOnAfterShow&&e.fOnAfterShow();e.bAutoFocusOnLastButton&&c.welButtons.find(".ybtn-primary:last,button:last").focus()}function h(){c.welMessage.html("");"function"==typeof e.fOnAfterHide&&e.fOnAfterHide()}var e={},c={};(function(b,
a){e.sDefaultButton='<button type="button" class="ybtn ybtn-info" data-dismiss="modal">'+Messages("button.confirm")+"</button>";e.sTplCustomButton='<button type="button" class="ybtn ${class}">${text}</button>';e.bAutoFocusOnLastButton="undefined"!==typeof a.bAutoFocusOnLastButton?a.bAutoFocusOnLastButton:!0;c.welContainer=$(b).clone();c.welMessage=c.welContainer.find(".msg");c.welDescription=c.welContainer.find(".desc");c.welButtons=c.welContainer.find(".buttons");c.welContainer.modal({show:!1});
c.welContainer.on("shown",f);c.welContainer.on("hidden",h);c.welContainer.on("click","button.ybtn",q)})(g,p||{});return{show:function(b,a,d){e.fOnAfterShow=d.fOnAfterShow;e.fOnAfterHide=d.fOnAfterHide;e.fOnClickButton=d.fOnClickButton;var f;if(d.aButtonLabels){f=[];var h=d.aButtonLabels;d=d.aButtonStyles||[];for(var g=0,l=h.length;g<l;g++)f.push($yobi.tmpl(e.sTplCustomButton,{text:h[g],"class":d[g]||(0===d.length&&g===l-1?"ybtn-primary":"ybtn-default")}));f=f.join("")}else f=e.sDefaultButton;c.welButtons.html(f);
c.welMessage.html($yobi.nl2br(b));c.welDescription.html($yobi.nl2br(a||""));c.welContainer.modal("show")},hide:l}}})("yobi.ui.Dialog");(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g){function p(b){if(0<b.originalEvent.deltaY&&a.welList.scrollTop()+a.welList.height()===a.welList.get(0).scrollHeight||0>b.originalEvent.deltaY&&0===a.welList.scrollTop())return b.preventDefault(),b.stopPropagation(),!1}function q(a){var b=$(a.target),b="LI"===a.target.tagName?b:$(b.parents("li")[0]);if(0===b.length||"undefined"===typeof b.attr("data-value"))return a.stopPropagation(),a.preventDefault(),!1;l(b);f(b);h()}function l(b){a.welSelectedLabel.html(b.html());
a.waItems.removeClass("active");b.addClass("active")}function f(c){c=c.attr("data-value");var e=a.welContainer.attr("data-name");b.sName=e;b.sValue=c;if("undefined"!==typeof e){var f=a.welContainer.find("input[name='"+e+"']");0===f.length&&(f=$('<input type="hidden" name="'+e+'">'),a.welContainer.append(f));f.val(c)}}function h(){"function"==typeof b.fOnChange&&setTimeout(function(){b.fOnChange(e())},0)}function e(){return b.sValue}function c(b){b=a.welContainer.find(b);if(0>=b.length)return!1;b=
$(b[0]);l(b);f(b);return!0}var b={sValue:""},a={};(function(d){a.welContainer=$(d.elContainer);a.welSelectedLabel=a.welContainer.find(".d-label");a.welList=a.welContainer.find(".dropdown-menu");a.waItems=a.welList.find("li");a.welList.on("click","li",q);a.welList.on("mousewheel",p);b.fOnChange=d.fOnChange;c("li[data-selected=true]")})(g);return{getValue:e,onChange:function(a){b.fOnChange=a;return!0},selectByValue:function(a){return c("li[data-value='"+a+"']")},selectItem:c}}})("yobi.ui.Dropdown");$(document).ready(function(){function g(g,f){var h;f=$("#"+g).find("li > a");(h=localStorage.getItem("yobitab-"+g))&&f[h]&&(h=$(f[h]))&&h.data(!1)&&h.tab("show")}var n,p,q;$(".nav-tabs[id]").each(function(l,f){p=$(f);q=p.attr("id");"undefined"!=typeof q&&(n=p.find("li"),n.click(function(){localStorage.setItem("yobitab-"+q,$(this).index())}),g(q,n))})});(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function q(c){$(this).remove()}function l(c,b){c.bind("webkitTransitionEnd",function(){c.remove()});setTimeout(function(){c.css("opacity",0)},b)}var f,h,e;(function(c,b){b.sTplToast=b.sTplToast.replace("\n","");f=b.sTplToast||'<div class="toast" tabindex="-1">            <div class="btn-dismiss"><button type="button" class="btn-transparent">&times;</button></div>            <div class="center-text msg"></div></div>';h=$(c);
e=$(f)})(g,p||{});return{push:function(c,b){var a=e.clone(),d=a.find(".msg");a.css("opacity","0");a.click(q);d.html($yobi.nl2br(c));h.prepend(a);a.css("opacity","1");b&&0<b&&l(a,b)},clear:function(){h.empty()}}}})("yobi.ui.Toast");(function(g){g=$yobi.createNamespace(g);g.container[g.name]=function(g,p){function q(f,e){f.match(l.sLastQuery)&&l.bIsLastRangeEntire?e(l.htCachedUsers):(l.htData.query=f,$yobi.sendForm({sURL:l.sActionURL,htOptForm:{method:"get"},htData:l.htData,sDataType:"json",fOnLoad:function(c,b,a){b=a.getResponseHeader("Content-Range");console.log(c);b=(b=l.rxContentRange.exec(b||""))?!(parseInt(b[1],10)<parseInt(b[2],10)):!0;l.bIsLastRangeEntire=b;l.sLastQuery=f;l.htCachedUsers=c;e(c)}}))}var l={},f;(function(g,
e){l.sActionURL=e.sActionURL||"/users";l.rxContentRange=/items\s+([0-9]+)\/([0-9]+)/;l.htData=e.htData||{};try{f=$(g);f.typeahead({minLength:l.htData.minLength||0,items:10});var c=f.data("typeahead")||{};c.items=l.htData.limit||10;c.source=l.htData.source||q;"function"===typeof l.htData.updater&&(c.updater=l.htData.updater);"function"===typeof l.htData.render&&(c.render=l.htData.render);c.minLength=l.htData.minLength||0;f.typeahead(c)}catch(b){"object"==typeof console&&console.log(b)}})(g,p||{})}})("yobi.ui.Typeahead");function temporarySaveHandler(g,n){var p=$(".editor-notice-label");window.draftSavingTimeout||(window.draftSavingTimeout=0);g.on("keyup",function(){g.val()!==localStorage.getItem(location.pathname)&&(clearTimeout(window.draftSavingTimeout),""===g.val()?localStorage.removeItem(location.pathname):(p.children().fadeOut(),window.draftSavingTimeout=setTimeout(function(){"update-comment-body"===g.data("editorMode")?localStorage.setItem(location.pathname+"-last-comment-update-draft",g.val()):(localStorage.setItem(location.pathname,
g.val()),p.html('<span class="saved">Draft saved</span>'))},5E3)))});if(void 0===n||!0===n){var q=$("textarea.content[data-editor-mode='update-comment-body']").last().val(),l=localStorage.getItem(location.pathname);l&&q&&l.trim()===q.trim()?removeCurrentPageTemprarySavedContent():l&&g.val(l)}}function removeCurrentPageTemprarySavedContent(){localStorage.removeItem(location.pathname);localStorage.removeItem(location.pathname+"-last-comment-update-draft")};
