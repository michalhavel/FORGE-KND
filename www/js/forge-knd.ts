
let viewer;
let lmvDoc;
let viewables:Object[];
let indexViewable;
let documentId;

function getForgeToken(callback) {
    jQuery.ajax({
      url: '/user/token',
      success: function (res) {
        console.log('res de token client', res);
        callback(res.access_token, res.expires_in)
      }
    });
  
  }

let options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
};

function getElById(name:string) {
    return document.getElementById(name);
}

let viewerDiv = getElById('forgeViewer');
viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);

function onDocumentLoadSuccess(doc:Autodesk.Viewing.Document) {
    viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(),
    {
        'type':'geometry',
        'role':'3d'
    },true);
    if (viewables.length === 0) {
        console.error('Document contains no viewables.');
    }
}

let test:string="neco";

