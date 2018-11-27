
let viewer;
let lmvDoc;
let viewables:Object[];
let indexViewable:Number;
let documentId:string;

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


function getProperty(selection:Object[],name:string) {
    for (let i = 0; i < selection.length; i++) {
        const element = selection[i];
       
    }
}
// import './extensions/Autodesk.ADN.Viewing.Extension'
// let myButton = new Autodesk.Viewing.UI.Button('toobar-markup')

//Konec FORGE-KND.TS------------------------------------------------------------------------
//------------------------------------------------
//............................................
//..............................................
