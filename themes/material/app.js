// 在head 中 加载 必要静态
document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@0.4.3/dist/css/mdui.min.css">');
//document.write('<script src="//cdn.jsdelivr.net/npm/mdui@0.4.3/dist/js/mdui.js"></script>');
document.write('<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>');
// 初始化页面，并载入必要资源
function init(){
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
<header class="mdui-appbar mdui-color-theme"> 
   <div id="nav" class="mdui-toolbar mdui-container"> 
   </div> 
</header>
<div class="mdui-container"> 
	<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>

	 <div class="mdui-row"> 
	  <ul class="mdui-list"> 
	   <li class="mdui-list-item th"> 
	    <div class="mdui-col-xs-12 mdui-col-sm-7">
	     文件
	    </div> 
	    <div class="mdui-col-sm-3 mdui-text-right">
	     修改时间
	    </div> 
	    <div class="mdui-col-sm-2 mdui-text-right">
	     大小
	    </div> 
	    </li> 
	  </ul> 
	 </div> 
	 <div class="mdui-row"> 
	  <ul id="list" class="mdui-list"> 
	  </ul> 
	 </div>

	 <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>
</div>

`;
    $('body').html(html);
}

function render(path){
    title(path);
    nav(path);
    list(path);
}


// 渲染 title
function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName+' - '+path);
}

// 渲染导航栏
function nav(path){
    var html = `<div id="nav" class="mdui-toolbar mdui-container">`;
    html += `<a href="/" class="mdui-typo-headline folder">${document.siteName}</a>`;
    var arr = path.trim('/').split('/');
    var p = '/';
    if(arr.length > 0){
        for(i in arr){
            var n = arr[i];
            n = decodeURI(n);
            p += n+'/';
            if(n == ''){
                break;
            }
            html += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a href="${p}">${n}</a>`;
        }
    }
    html += `</div>`;
    $('#nav').html(html);
}

// 文件预览
var previewDom, previewUrl;
function file_preview(a) {
    var fileUrl = a.href;
    if(fileUrl == previewUrl) {
        previewDom.remove();
        previewUrl = "";
        return false;
    }
    if(previewDom !== undefined)
    {
        previewDom.remove();
    }
    var preview = `<div class="mdui-card">
        <div class="mdui-card-media">
            previewHtml
            <div class="mdui-card-menu">
              <button id="fileDownload" class="mdui-btn mdui-btn-icon mdui-text-color-white"><i class="mdui-icon material-icons">file_download</i></button>
              <button id="previewClose" class="mdui-btn mdui-btn-icon mdui-text-color-white"><i class="mdui-icon material-icons">close</i></button>
            </div>
        </div>
    </div>`;

    var fileType = $(a).attr("gd-type");
    var isPreview;
    switch (fileType){
        case "video/mp4":
        case "video/x-matroska": // .mkv
        case "video/quicktime": // .mov
            isPreview = true;
            preview = preview.replace("previewHtml", `<video class="mdui-video-fluid" controls src="${fileUrl}"></video>`);
            break;
        case "image/jpeg":
        case "image/gif":
        case "image/png":
            isPreview = true;
            preview = `<div id="progressBar" class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>` + preview;
            preview = $(preview.replace("previewHtml", `<img class="mdui-img-fluid" src="${fileUrl}"/>`));
            preview.find("img")[0].onload = function(){
                $("#progressBar").remove();
            }
            break;
        case "text/markdown":
        case "text/plain":
            var mdName = fileUrl.split('/').pop();
            if(mdName !== "HEAD.md" && mdName !== "README.md") {
                isPreview = true;
                preview = `<div id="progressBar" class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>` + preview;
                preview = $(preview.replace("previewHtml", `<div id="markdownShow" class="mdui-typo" style="padding: 20px;"></div>`));
                $.get(fileUrl, function(data){
                    markdown("#markdownShow",data);
                    $("#progressBar").remove();
                });
            }
            break;
    }
    if(isPreview) {
        previewUrl = fileUrl;
        previewDom = $(preview);
        previewDom.on("click", "#fileDownload", function () {
            var downForm = $('<form method="GET"></form>');
            downForm.attr('action', fileUrl);
            downForm.appendTo(previewDom);
            downForm.submit();
        });
        previewDom.on("click", "#previewClose", function () {
            if(previewDom !== undefined)
            {
                previewDom.remove();
            }
            previewUrl = "";
        });
        $(a).parent().after(previewDom);
        return false;
    }
    return true;
}

// 渲染文件列表
function list(path){
    var password = localStorage.getItem('password'+path);
    $('#list').html(`<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>`);
    $('#readme_md').hide().html('');
    $('#head_md').hide().html('');
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("目录加密，请输入密码","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                alert("输入密码为空!");
            }
        }else if(typeof obj != 'null'){
            list_files(path,obj.files);
        }
    });
}

function list_files(path,files){
    html = "";
    for(i in files){
        var item = files[i];
        var p = path+item.name+'/';
        if(item['size']==undefined){
            item['size'] = "";
        }

        item['modifiedTime'] = utc2beijing(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
            html +=`<li class="mdui-list-item mdui-ripple"><a href="${p}" class="folder">
	            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	            <i class="mdui-icon material-icons">folder_open</i>
	              ${item.name}
	            </div>
	            <div class="mdui-col-sm-3 mdui-text-right">${item['modifiedTime']}</div>
	            <div class="mdui-col-sm-2 mdui-text-right">${item['size']}</div>
	            </a>
	        </li>`;
        }else{
            var p = path+item.name;
            if(item.name == "README.md"){
                $.get(p, function(data){
                    markdown("#readme_md",data);
                });
            }
            if(item.name == "HEAD.md"){
                $.get(p, function(data){
                    markdown("#head_md",data);
                });
            }
            html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}">
	          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	          <i class="mdui-icon material-icons">insert_drive_file</i>
	            ${item.name}
	          </div>
	          <div class="mdui-col-sm-3 mdui-text-right">${item['modifiedTime']}</div>
	          <div class="mdui-col-sm-2 mdui-text-right">${item['size']}</div>
	          </a>
	      </li>`;
        }
    }
    $('#list').html(html);
    $("body").off("click").on("click", "a", function() {
        return file_preview(this);
    });
}


//时间转换
function utc2beijing(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0,T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    var unixtimestamp = timestamp+8*60*60;

    // 时间戳转为时间
    var unixtimestamp = new Date(unixtimestamp*1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
}

// bytes自适应转换到KB,MB,GB
function formatFileSize(bytes) {
    if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
    else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
    else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
    else if (bytes>1)           {bytes=bytes+' bytes';}
    else if (bytes==1)          {bytes=bytes+' byte';}
    else                        {bytes='';}
    return bytes;
}

String.prototype.trim = function (char) {
    if (char) {
        return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};

$(function(){
    init();
    var path = window.location.pathname;
    $("body").on("click",'.folder',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });
    render(path);
});

// README.md HEAD.md 支持
function markdown(el, data){
    if(window.md == undefined){
        $.getScript('https://cdn.jsdelivr.net/npm/markdown-it@9.1.0/dist/markdown-it.min.js',function(){
            window.md = window.markdownit();
            markdown(el, data);
        });
    }else{
        var html = md.render(data);
        $(el).show().html(html);
    }
}

// 监听回退事件
window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}
