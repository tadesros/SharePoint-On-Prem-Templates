//Format for JS-Link: ~site/SiteAssets/PdrModListView/createViewBtn.js
(function () {
	var overrideCtx = {};
	overrideCtx.Templates = {};
	overrideCtx.OnPostRender = [];
	//Set what we are rendering and how
	overrideCtx.Templates.Fields = {
		View: { View: renderViewButton },
	};
	//Call the function to adjust the rendering on each list item in the view
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();
//Render View Button
function renderViewButton(ctx) {
	var btnTxt = ctx.CurrentItem["Button"];
	var id = ctx.CurrentItem.ID;

	return (
		"<input type='button' class='btnView' onclick='btnClickView(" +
		id +
		")' value='View'" +
		btnTxt +
		"'></input>"
	);
}
//CLICK EVENT FOR THE VIEW BUTTON
function btnClickView(id) {
	ShowDialogView(id);
}
//View the URL for this Button pass in the id of the item
function ShowDialogView(id) {
	var options = {
		autoSize: true,
		allowMaximize: true,
		title: " ",
		showClose: true,
		url:
			"http://rocsps/sites/GSTIntranet/QUALITY/Lists/QalertS/DispForm.aspx?ID=" +
			id +
			"",
		// url:weburl+'/_layouts/15/Versions.aspx?list=' + currentListGUID + '&ID='+item1+'&Source='+weburl+'/Lists/'+title+'/AllItems.aspx',
	};
	SP.UI.ModalDialog.showModalDialog(options);
}
//CREATE VERSION BUTTON
function renderVersionButton(ctx) {
	var btnTxt = ctx.CurrentItem["Version_x0020_History"];
	var id = ctx.CurrentItem.ID;

	return (
		"<input type='button' class='btnView' onclick='btnClickVersion(" +
		id +
		")' value='View'" +
		btnTxt +
		"'></input>"
	);
}
//CLICK EVENT FOR THE VERSION BUTTON
function btnClickVersion(id) {
	ShowDialogVersion(id);
}
//View the URL for this Button pass in the id of the item
function ShowDialogVersion(id) {
	var options = {
		autoSize: true,
		allowMaximize: true,
		title: "Version History",
		showClose: true,
		url:
			"http://rocsps/sites/GSTIntranet/PRODDEV/PDR/_layouts/15/Versions.aspx?list=%7B91FD3538%2D7B36%2D4CDE%2DAC61%2D4528F1488A05%7D&ID=" +
			id +
			"",
		// url:weburl+'/_layouts/15/Versions.aspx?list=' + currentListGUID + '&ID='+item1+'&Source='+weburl+'/Lists/'+title+'/AllItems.aspx',
	};
	SP.UI.ModalDialog.showModalDialog(options);
}
