var random_id = new Date().valueOf();
if (version.length > 0)
  {var external_path = 'https://cdn.jsdelivr.net/gh/peak-now/domea@' + version + '/webapp'}
else
  {var external_path = 'https://cdn.jsdelivr.net/gh/peak-now/domea@' + 'latest' + '/webapp/'}
var purge_path = 'https://cdn.jsdelivr.net/gh/peak-now/domea/'
var v_style1 = external_path + 'base-cbb.css' + '?' + random_id;
var v_style2 = external_path + 'style.css' + '?' + random_id;
var v_js1 = external_path + 'js-scripts.js'; //+ '?' + random_id;
var v_js2 = external_path + 'vue-scripts.js'; //+ '?' + random_id;
var v_js3 = external_path + 'server.js'; //+ '?' + random_id;
var v_html = external_path +'main.html' + '?' + random_id;

  $('head').append('<link rel="stylesheet" href="'+ v_style1 +'" type="text/css" />');
  $('head').append('<link rel="stylesheet" href="'+ v_style2 +'" type="text/css" />');
  $("#c_body").load(v_html);
  $.getScript(v_js1, function () { });
  $.getScript(v_js2, function () { });

