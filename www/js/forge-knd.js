var viewer;
var lmvDoc;
var viewables;
var indexViewable;
var documentId;
var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
};
function getElById(name) {
    return document.getElementById(name);
}
var viewerDiv = getElById('forgeViewer');
viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
function onDocumentLoadSuccess(doc) {
    viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
        'type': 'geometry',
        'role': '3d'
    }, true);
    if (viewables.length === 0) {
        console.error('Document contains no viewables.');
    }
}
var test = "neco";
function getForgeToken(callback) {
    jQuery.ajax({
        url: '/user/token',
        success: function (res) {
            console.log('res de token client', res);
            callback(res.access_token, res.expires_in);
        }
    });
}
