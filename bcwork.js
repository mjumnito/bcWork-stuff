// ==UserScript==
// @name         bowie stuff 2.0
// @namespace    MJHighjack
// @version      0.4
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
waitForKeyElements(".ss-pdfjs-viewer", BRunner, true);

function BRunner(jNode) {
    var myNodelist = document.getElementsByClassName('ss-pdfjs-viewer')
    console.log('First Log: ' + myNodelist);
    console.log(myNodelist)
    var mySource = document.getElementsByClassName('ss-pdfjs-viewer')[0].contentDocument.location
    console.log('Second Log');
    console.log(mySource)
    var fixedName = mySource.href.replaceAll('allowDownload=false', 'allowDownload=true')
    console.log('Third Log');
    if (fixedName.includes("http")) {
        console.log(fixedName)
        document.getElementsByClassName("ss-button-holder")[0].hidden = true
    } else {
        console.log("File didn't load correctly,reloading")
        document.getElementById('.ss-pdfjs-viewer').contentDocument.location.reload(true)
    }
    document.getElementsByClassName('ss-pdfjs-viewer')[0].contentDocument.location = fixedName
    console.log('Name Fixed');
    console.log(fixedName)
}
window.addEventListener("pdfViewer", function (event) {
    console.log("All resources finished loading!");

});

