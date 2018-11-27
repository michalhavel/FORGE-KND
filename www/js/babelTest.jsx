var lmvDoc;
var viewables;
var indexViewable;
var documentId;
// // var options = {
// //     env: 'AutodeskProduction',
// //     getAccessToken: getForgeToken
// // }

function getElById(name) {
    return document.getElementById(name);
}
var viewerDiv = getElById('forgeViewer');
var property
var modelData
try {

} catch (TypeError) {
    console.log("Zatím nemám načtený model")
}
if(MyVars.viewer){
    property = showAllProperties(MyVars.viewer);
    modelData = MyVars.viewer.model.getData();
}
else
{
    console.log("Ještě se viewer nenačetl")
}

function addMyButton (viewer){
    var btn = new Autodesk.Viewing.UI.Button('toolbarFusion');

    button.addClass('toolbarFusionButton');
    btn.setToolTip('Zatím nic nedělám');

    var subToolbar = new Autodesk.Viewing.UI.ControlGroup('myFusionAppGroup');
    subToolbar.addControl(btn);

    viewer.toolbar.addControl(subToolbar);
}
