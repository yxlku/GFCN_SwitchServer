/*
「少女前线」跨服 Temp（iOS客户端 → 安卓国服）
By: Mornwind

README:
https://github.com/Mornwind/GF_Region_Switcher/blob/master/README.md
*/

let body = $response.body;

body = body.replace(/<client_version>20501<\/client_version>/,"<client_version>20500</client_version>").replace(/<top_client_version>20221<\/top_client_version>/,"<top_client_version>2011</top_client_version>");

$done({
	body: body
});