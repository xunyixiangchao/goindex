document.write('<style>*{box-sizing:border-box}h1{border-bottom:1px solid silver;margin-bottom:10px;padding-bottom:10px;white-space:nowrap}table{border-collapse:collapse;font-family:Consolas,monaco,monospace}th{font-weight:700}.file-name{text-align:left}.file-size{padding-left:4em}.file-date-created,.file-date-modified{padding-left:2em}.file-date-created,.file-date-modified,.file-size{text-align:end;white-space:nowrap}.icon{padding-left:1.5em;text-decoration:none}.icon:hover{text-decoration:underline}.icon-file{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABHUlEQVR42o2RMW7DIBiF3498iHRJD5JKHurL+CRVBp+i2T16tTynF2gO0KSb5ZrBBl4HHDBuK/WXACH4eO9/CAAAbdvijzLGNE1TVZXfZuHg6XCAQESAZXbOKaXO57eiKG6ft9PrKQIkCQqFoIiQFBGlFIB5nvM8t9aOX2Nd18oDzjnPgCDpn/BH4zh2XZdlWVmWiUK4IgCBoFMUz9eP6zRN75cLgEQhcmTQIbl72O0f9865qLAAsURAAgKBJKEtgLXWvyjLuFsThCSstb8rBCaAQhDYWgIZ7myM+TUBjDHrHlZcbMYYk34cN0YSLcgS+wL0fe9TXDMbY33fR2AYBvyQ8L0Gk8MwREBrTfKe4TpTzwhArXWi8HI84h/1DfwI5mhxJamFAAAAAElFTkSuQmCC) left top no-repeat}.icon-dir{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAd5JREFUeNqMU79rFUEQ/vbuodFEEkzAImBpkUabFP4ldpaJhZXYm/RiZWsv/hkWFglBUyTIgyAIIfgIRjHv3r39MePM7N3LcbxAFvZ2b2bn22/mm3XMjF+HL3YW7q28YSIw8mBKoBihhhgCsoORot9d3/ywg3YowMXwNde/PzGnk2vn6PitrT+/PGeNaecg4+qNY3D43vy16A5wDDd4Aqg/ngmrjl/GoN0U5V1QquHQG3q+TPDVhVwyBffcmQGJmSVfyZk7R3SngI4JKfwDJ2+05zIg8gbiereTZRHhJ5KCMOwDFLjhoBTn2g0ghagfKeIYJDPFyibJVBtTREwq60SpYvh5++PpwatHsxSm9QRLSQpEVSd7/TYJUb49TX7gztpjjEffnoVw66+Ytovs14Yp7HaKmUXeX9rKUoMoLNW3srqI5fWn8JejrVkK0QcrkFLOgS39yoKUQe292WJ1guUHG8K2o8K00oO1BTvXoW4yasclUTgZYJY9aFNfAThX5CZRmczAV52oAPoupHhWRIUUAOoyUIlYVaAa/VbLbyiZUiyFbjQFNwiZQSGl4IDy9sO5Wrty0QLKhdZPxmgGcDo8ejn+c/6eiK9poz15Kw7Dr/vN/z6W7q++091/AQYA5mZ8GYJ9K0AAAAAASUVORK5CYII=) left top no-repeat}.icon-up{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmlJREFUeNpsU0toU0EUPfPysx/tTxuDH9SCWhUDooIbd7oRUUTMouqi2iIoCO6lceHWhegy4EJFinWjrlQUpVm0IIoFpVDEIthm0dpikpf3ZuZ6Z94nrXhhMjM3c8895977BBHB2PznK8WPtDgyWH5q77cPH8PpdXuhpQT4ifR9u5sfJb1bmw6VivahATDrxcRZ2njfoaMv+2j7mLDn93MPiNRMvGbL18L9IpF8h9/TN+EYkMffSiOXJ5+hkD+PdqcLpICWHOHc2CC+LEyA/K+cKQMnlQHJX8wqYG3MAJy88Wa4OLDvEqAEOpJd0LxHIMdHBziowSwVlF8D6QaicK01krw/JynwcKoEwZczewroTvZirlKJs5CqQ5CG8pb57FnJUA0LYCXMX5fibd+p8LWDDemcPZbzQyjvH+Ki1TlIciElA7ghwLKV4kRZstt2sANWRjYTAGzuP2hXZFpJ/GsxgGJ0ox1aoFWsDXyyxqCs26+ydmagFN/rRjymJ1898bzGzmQE0HCZpmk5A0RFIv8Pn0WYPsiu6t/Rsj6PauVTwffTSzGAGZhUG2F06hEc9ibS7OPMNp6ErYFlKavo7MkhmTqCxZ/jwzGA9Hx82H2BZSw1NTN9Gx8ycHkajU/7M+jInsDC7DiaEmo1bNl1AMr9ASFgqVu9MCTIzoGUimXVAnnaN0PdBBDCCYbEtMk6wkpQwIG0sn0PQIUF4GsTwLSIFKNqF6DVrQq+IWVrQDxAYQC/1SsYOI4pOxKZrfifiUSbDUisif7XlpGIPufXd/uvdvZm760M0no1FZcnrzUdjw7au3vu/BVgAFLXeuTxhTXVAAAAAElFTkSuQmCC) left top no-repeat}</style>');
// 初始化页面，并载入必要资源
function init(){
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
<h1 id="heading">Index of <?php echo urldecode($path);?></h1>
<table id="table">
</table>
	`;
    $('body').html(html);
}

function render(path){
	if(path.indexOf("?") > 0){
		path = path.substr(0,path.indexOf("?"));
	}
    title(path);
    nav(path);
    if(path.substr(-1) == '/'){
    	list(path);
    }else{
	    file(path);
    }
}


// 渲染 title
function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName+' - '+path);
}

// 渲染导航栏
function nav(path){
	path = decodeURI(path);
    $('#heading').html('Index of '+path);
}

// 渲染文件列表
function list(path){
	var content = `
<tr><th class="file-name">Name</th><th class="file-size">Size</th><th class="file-date-modified">Date Modified</th></tr>
	`;

	if(path != '/'){
		var up = path.split('/');
		up.pop();up.pop();
		up = up.join('/')+'/';
		content += `
<tr>
	<td class="file-name">
		<a class="icon icon-up folder" href="${up}">..</a>
	</td>
	<td class="file-size"></td>
	<td class="file-date-modified"></td>
</tr>
		`;	
	}
	$('#table').html(content);
	
    var password = localStorage.getItem('password'+path);
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("password","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                history.go(-1);
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
        if(item['size']==undefined){
            item['size'] = "";
        }
        item['modifiedTime'] = utc2beijing(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
        	var p = path+item.name+'/';
            html +=`
				<tr>
					<td class="file-name"><a class="icon icon-dir folder" href="${p}">${item.name}/</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        }else{
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-file" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        }
    }
    $('#table').append(html);
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

// 监听回退事件
window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}


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
