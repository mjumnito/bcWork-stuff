// ==UserScript==
// @name         bowie stuff 2.0
// @namespace    MJHighjack
// @version      0.4.7
// @description  try to take over the world!
// @author       Mjumnito
// @match        https://bowiecountytx-web.tdr.tylerhosting.cloud/web/document/*
// @match        https://bowiecountytx-web.tylerhost.net/web/*
// @match        https://bowiecountytx-web.tylerhost.net/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_log
// @grant unsafeWindow
// @run-at       document-start

// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

'use strict';
waitForKeyElements(".ss-pdfjs-lviewer", BRunner, true);
// waitForKeyElements("primaryPdfViewerDiv", BRunner, true);

function BRunner(jNode) {
    var classToLookFor = "'ss-pdfjs-lviewer'"
    var altclassToLookFor = "'.ss-pdfjs-lviewer'"
    var myNodelist = document.getElementsByClassName(classToLookFor')
    console.log('First Log: ' + myNodelist);
    console.log(myNodelist)
    var mySource = document.getElementsByClassName(classToLookFor)[0].src//contentDocument.location
    console.log('Second Log');
    console.log(mySource)
    //var mySource2 = document.activeElement.getAttribute('src')
    var fixedName = mySource.replace('allowDownload=false', 'allowDownload=true')
    //var fixedName2 = mySource2.replace('allowDownload=false', 'allowDownload=true')
    document.activeElement.setAttribute('src',fixedName)
    console.log('Third Log');
    if (fixedName.includes("http")) {
        console.log(fixedName)
        document.getElementsByClassName("ss-button-holder")[0].hidden = true
    } else {
        console.log("File didn't load correctly,reloading")
        document.getElementById(altclassToLookFor).contentDocument.location.reload(true)
    }
    document.getElementsByClassName(classToLookFor)[0].contentDocument.location = fixedName
    console.log('Name Fixed');
    console.log(fixedName)
}
window.addEventListener("pdfViewer", function (event) {
    console.log("All resources finished loading!");

});
