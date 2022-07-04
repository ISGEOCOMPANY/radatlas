window.onload = function () {
    SetContentsHeight();
};
window.onresize = function () {
    SetContentsHeight();
};

function SetContentsHeight() {
    try {

        if ($("#TextName-div").length == 0) {
            return;
        }

        var lTextNameHeight = $("#TextName-div").height();

        var lHeightContentPage = document.body.clientHeight - lTextNameHeight - 50;
        $("#div2Wrapper").each(function () {
            this.style.setProperty('height', lHeightContentPage + 'px', 'important');
        });
    }
    catch (Eroor) {
        return;
    }
}

var openImg = new Image();
var openIcon = "images/ico_02.gif";
openImg.src = openIcon;
var closedImg = new Image();
closedImg.src = "images/ico_01.gif";

function GetCurrMapSettings() {
    try {
        var lMap = parent.frames['contents'].MAP || parent.frames['contents'].contentWindow.MAP;
        if (lMap == null || lMap._map == null) {
            return "";
        }
        var lLegend = "legend=" + lMap._mapSettings.WindowLegend.closed;
        var lDescr = "descr=" + lMap._mapSettings.WindowDescr.closed;
        if (lMap._mapSettings.WindowDescr.closed == false) {
            lMap._mapSettings.WindowDescr.close();
        }
        if (lMap._mapSettings.WindowLegend.closed == false) {
            lMap._mapSettings.WindowLegend.close();
        }

        var lCurZoom = "zoom=" + lMap._map.getZoom();
        var lCurLngLat = "centerlng=" + lMap._map.getCenter().lng + "&centerlat=" + lMap._map.getCenter().lat;
        var lMapZone = "mapzone=" + lMap._mapSettings.MapZone;
        return "?" + lLegend + "&" + lDescr + "&" + lCurZoom + "&" + lCurLngLat + "&" + lMapZone;
    }
    catch (Error) {
        return "";
    }
}

function showBranch(branch) {

    var objBranch = document.getElementById(branch).style;
    if (objBranch.display == "block")
        objBranch.display = "none";
    else
        objBranch.display = "block";
    swapFolder('I' + branch);
    //parent.frames['navigation'].mapname.innerHTML = window.document.title;
    if (window.document.title != "") {
        parent.parent.frames['navigation'].mapname.innerHTML = window.document.title;
    }
}

function swapFolder(img) {
    objImg = document.getElementById(img);
    if (objImg.src.indexOf('images/ico_01.gif') > -1)
        objImg.src = openImg.src;
    else
        objImg.src = closedImg.src;
}

//--------------OPEN CONTENTS WHEN YOU CLICK MENU-----------------
function TreeViewAtlas1_OnChange(aFrame, aUrl) {
    if (aUrl != "") {

        try {
            //Для адаптивного дизайна
            window.parent.document.getElementById('contents').src = aUrl + GetCurrMapSettings();
        }
        catch (Error) {
            //Для фреймсетов
            parent.frames['contents'].location = ('../../' + aUrl + GetCurrMapSettings());
        }
    }
}

//------------OPEN ITEM MENU--------------------
function openItemMenu(aUrlName) {

    var currentElement;
    try {
        //Для адаптивного дизайна
        currentElement = window.parent.document.getElementById('menu').contentDocument.getElementsByTagName('a');
    }
    catch (Error) {
        //Для фреймсетов
        currentElement = parent.frames['toc'].document.getElementsByTagName('a');
    }

    for (var i = 0; i < currentElement.length; i++) {
        if (currentElement[i].getAttribute('name').toLowerCase() == aUrlName.toLowerCase()) {
            currentElement[i].classList.add('activeItemMenu');
            getParent(currentElement[i], 'HTML');
            //currentElement[i].scrollIntoView(false);
        }
        else currentElement[i].classList.remove('activeItemMenu');
    }
}

//------------OPEN ITEM MENU FOR MOBILE--------------------
function openItemMenuForMobileVer(aUrlName) {
    var currentElement = window.parent.document.getElementById('menu').contentDocument.getElementsByTagName('a');

    for (var i = 0; i < currentElement.length; i++) {
        if (currentElement[i].getAttribute('name').toLowerCase() == aUrlName.toLowerCase()) {
            currentElement[i].classList.add('activeItemMenu');
            getParent(currentElement[i], 'HTML');
            //currentElement[i].scrollIntoView();
        }
        else currentElement[i].classList.remove('activeItemMenu');
    }
}

//-----------SEARCH IN MENU------------------
function searchInMenu(searchText, event) {
    var currentElementA = document.getElementsByTagName('a');
    var currentElementLabel = document.getElementsByTagName('label');
    var array_a = Array.prototype.slice.call(currentElementA);    // Array
    var array_form = Array.prototype.slice.call(currentElementLabel); // Array
    var currentElement = array_a.concat(array_form);

    for (var i = 0; i < currentElement.length; i++) {
        currentElement[i].classList.remove('searchItemMenu');
    }
    if (searchText.length > 2) {

        searchText = searchText.toLowerCase();
        var k = 0;//count item menu
        for (var i = 0; i < currentElement.length; i++) {
            currentSearchText = currentElement[i].getAttribute('indexedwords') != null ? currentElement[i].getAttribute('indexedwords').toLowerCase() : "";//alert(currentSearchText);
            currentSearchText2 = currentElement[i].innerHTML.toLowerCase();//alert(currentSearchText2);
            if (currentSearchText != "" || currentSearchText2 != "") {
                if (currentSearchText.indexOf(searchText) != -1 || currentSearchText2.indexOf(searchText) != -1) {
                    k++;
                    //--------------Open menu that is found--------------
                    //background active element
                    currentElement[i].classList.add('searchItemMenu');
                    // open tree link 
                    if (currentElement[i].parentNode.parentNode.tagName == 'HTML' && currentElement[i].parentNode.className == 'trigger') {
                        //alert('NOT START GETPARENT');
                        break;
                    }
                    else {
                        getParent(currentElement[i], 'HTML');
                        currentElement[i].scrollIntoView(false);
                        continue;//continue search others items
                    }
                    //-------------------------------------------------
                }
            }
        }
        if (k == 0) {
            alert(noSearchResults[Language]);
            clearMenuSearch();
        }
    }
    else {
        alert(errorSearch[Language]);
        clearMenuSearch();
    }
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
}

function getParent(obj, parentTagName) {
    if (obj.parentNode.previousSibling != null && obj.parentNode.previousSibling.childNodes[0] != null) {
        obj.parentNode.style.display = 'block';
        if (obj.parentNode.className == 'trigger') { obj.parentNode.style.display = 'block'; }
        else obj.parentNode.previousSibling.childNodes[0].src = openIcon;
    }
    return (obj.tagName == parentTagName) ? obj : getParent(obj.parentNode, parentTagName);
}

function clearMenuSearch() {
    var searchForMenuInput = document.getElementById('searchForMenuInput');
    clearItemsMenu('searchItemMenu');
    searchForMenuInput.value = "";
    searchForMenuInput.focus();
    //inputsForSearch.searchForMenuInput.value = '';
}

function clearItemsMenu(nameClass) {
    var currentElementA = document.getElementsByTagName('a');
    var currentElementLabel = document.getElementsByTagName('label');
    var array_a = Array.prototype.slice.call(currentElementA);
    var array_form = Array.prototype.slice.call(currentElementLabel);
    var currentElement = array_a.concat(array_form);

    for (var i = 0; i < currentElement.length; i++) {
        currentElement[i].classList.remove(nameClass);
    }
}