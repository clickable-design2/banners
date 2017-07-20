window.createControls;
window.imgDataUrl = [];

var zipContent = new JSZip();
var exportManifest = imgDataUrl;
var imgFolder;
var body = document.body, exportTemplate, setImgFunc,
    contRols, controlsBox, prefTitle, zipName, zipInput, 
    clearDiv, centerX, centerY, scaleContent, fullWidth, fullHeight, 
    baseTitle, useBase, setImgOption, 
    deviderTag, exOpt, hideControls, 
    previewBtn, adwiseBtn, mixTraffBtn, googleBtn, adFoxBtn, mobsterBtn;

// Image Export Preferences ========================================>

function setImg(path, ident){
    var name = path.replace("images/", "");
    var imgData;
    var xhr = new XMLHttpRequest();
    var reader = new FileReader();
    xhr.addEventListener('load', () => {
        reader.readAsDataURL(xhr.response); 
    });
    reader.addEventListener('load', () => {
        imgData = reader.result;
        formatMatch = ((imgData.match('data:image/jpeg;base64,')) ? 'data:image/jpeg;base64,' : 'data:image/png;base64,');
        var imgString = imgData.replace(formatMatch, "");
        if(useBase.checked){
            var x = new Object();
            x.src = imgData;
            x.id = ident;
            imgDataUrl.push(x);
        } else {
            imgFolder.file(name, imgString, {base64: true});
        }
    });
    xhr.open('GET', path);
    xhr.responseType = 'blob';
    xhr.send();
}

setImgFunc = function(){
    if(useBase.checked){
        console.log("Base64 Encoding");  
    } else {
        imgFolder = zipContent.folder("images");
        exportManifest = lib.properties.manifest;
    }
    for (i = 0; i < lib.properties.manifest.length; i++){
        var data = lib.properties.manifest[i];
        setImg(data.src, data.id);
        refreshTemplates();
    }
}

exportTemplate = function(template){
    var exportName = exportFileName + '.zip';
    zipContent.file("index.html", template);
    zipContent.file("index.js", exScript);
    zipContent.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, exportName);
    });
}

// Image Export Preferences ========================================>

createControls = function(){
    
    createEL('div', function(e){
        contRols = e;
        contRols.style.position = 'absolute';
        contRols.style.display = 'block';
        contRols.style.width = '290px';
        contRols.style.bottom = '0';
        contRols.style.right = '0';
        contRols.style.zIndex = '2';
        contRols.style.textAlign = 'right';
        
    });
    
    createEL('div', function(e){
        controlsBox = e;
        controlsBox.style.display = 'block';
        controlsBox.style.backgroundColor = 'rgba(0,0,0,0.7)';
        controlsBox.style.padding = '15px';
        controlsBox.className = 'controlBox';
    });
    
    appendEL(controlsBox, contRols);
    
    createEL('span', function(e){
        prefTitle = e;
        prefTitle.style.display = 'block';
        prefTitle.innerHTML = 'PREFERENCES';
        prefTitle.style.marginBottom = '10px';
    });
    
    appendEL(prefTitle, controlsBox);
    
    createEL('span', function(e){
        zipName = e;
        zipName.innerHTML = 'Zip Name : ';
        zipName.style.marginBottom = '10px';
    });
    
    appendEL(zipName, controlsBox);
    
    createEL('input', function(e){
        zipInput = e;
        zipInput.setAttribute('name', 'zip_name');
        zipInput.setAttribute('class', 'form-control');
        zipInput.setAttribute('type', 'text');
        zipInput.setAttribute('value', 'banner');
        zipInput.style.marginBottom = '10px';
        zipInput.className = 'fileName';
    });
    
    appendEL(zipInput, controlsBox);
    
    createEL('div', function(e){
        clearDiv = e;
        clearDiv.style.clear = 'both';
    });
    
    appendEL(clearDiv, controlsBox);
    
    createEL('span', function(e){
        baseTitle = e;
        baseTitle.innerHTML = 'Use base64 : ';
        baseTitle.style.marginBottom = '10px';
    });
    
    appendEL(baseTitle, controlsBox);
    
    createEL('input', function(e){
        useBase = e;
        useBase.className = 'useBase64';
        useBase.setAttribute('name', 'useBase');
        useBase.setAttribute('type', 'checkbox');
        useBase.style.marginBottom = '10px';
    });
    
    appendEL(useBase, controlsBox);
    
    createEL('div', function(e){
        clearDiv = e;
        clearDiv.style.clear = 'both';
    });
    
    appendEL(clearDiv, controlsBox);
    
    createEL('button', function(e){
        setImgOption = e;
        setImgOption.style.display = 'inline-block';
        setImgOption.style.marginBottom = '10px';
        setImgOption.setAttribute('type', 'button');
        setImgOption.innerHTML = 'Set Images'
        setImgOption.onclick = function(){
            setImgFunc();
            setTimeout(function(){refreshTemplates(); console.log("Ready");}, 300);
        }
    });
    
    appendEL(setImgOption, controlsBox);
    
    createEL('hr', function(e){
        deviderTag = e;
    });
    
    appendEL(deviderTag, controlsBox);
    
    /*PREFERENCES*/
    
    createEL('button', function(e){
        centerX = e;
        centerX.style.marginBottom = '10px';
        centerX.setAttribute('type', 'button');
        centerX.innerHTML = 'X - Center'
        centerX.onclick = function(){
            contentPreferences.horizontalMiddle = true;
            setResp = true;
            refreshTemplates();
            SetCanvas();
        }
    });
    
    appendEL(centerX, controlsBox);
    
    createEL('button', function(e){
        centerY = e;
        centerY.style.marginBottom = '10px';
        centerY.setAttribute('type', 'button');
        centerY.innerHTML = 'Y - Center'
        centerY.onclick = function(){
            contentPreferences.verticalMiddle = true;
            setResp = true;
            refreshTemplates();
            SetCanvas();
        }
    });
    
    appendEL(centerY, controlsBox);
    
    createEL('button', function(e){
        scaleContent = e;
        scaleContent.style.marginBottom = '10px';
        scaleContent.setAttribute('type', 'button');
        scaleContent.innerHTML = 'Scale'
        scaleContent.onclick = function(){
            contentPreferences.reScale = true;
            setResp = true;
            refreshTemplates();
            SetCanvas();
        }
    });
    
    appendEL(scaleContent, controlsBox);
    
    createEL('button', function(e){
        fullWidth = e;
        fullWidth.style.marginBottom = '10px';
        fullWidth.setAttribute('type', 'button');
        fullWidth.innerHTML = 'Full Width'
        fullWidth.onclick = function(){
            bannerS.w = sScale.iw
            exportSize.w = 'sScale.iw';
            setResp = true;
            refreshTemplates();
            SetCanvas();
        }
    });
    
    appendEL(fullWidth, controlsBox);
    
    createEL('button', function(e){
        fullHeight = e;
        fullHeight.style.marginBottom = '10px';
        fullHeight.setAttribute('type', 'button');
        fullHeight.innerHTML = 'Full Height'
        fullHeight.onclick = function(){
            bannerS.h = sScale.ih
            exportSize.h = 'sScale.ih';
            setResp = true;
            refreshTemplates();
            SetCanvas();
        }
    });
    
    appendEL(fullHeight, controlsBox);
    
    createEL('hr', function(e){
        deviderTag = e;
    });
    
    appendEL(deviderTag, controlsBox);
    
    /*EXPORT OPTIONS*/
    
    createEL('span', function(e){
        exOpt = e;
        exOpt.style.display = 'block';
        exOpt.innerHTML = 'EXPORT OPTIONS';
        exOpt.style.marginBottom = '10px';
    });
    
    appendEL(exOpt, controlsBox);
    
    createEL('button', function(e){
        previewBtn = e;
        previewBtn.style.background = 'rgb(255, 65, 65)';
        previewBtn.style.color = 'rgb(255, 255, 255)';
        previewBtn.style.border = 'none'
        previewBtn.setAttribute('type', 'button');
        previewBtn.innerHTML = 'Preview'
        previewBtn.onclick = function(){
            exportTemplate(previewTemplate);
        }
    });
    
    appendEL(previewBtn, controlsBox);
    
    createEL('button', function(e){
        adwiseBtn = e;
        adwiseBtn.setAttribute('type', 'button');
        adwiseBtn.innerHTML = 'Adwise'
        adwiseBtn.onclick = function(){
            exportTemplate(adwiseTemplate);
        }
    });
    
    appendEL(adwiseBtn, controlsBox);
    
    createEL('button', function(e){
        mixTraffBtn = e;
        mixTraffBtn.setAttribute('type', 'button');
        mixTraffBtn.innerHTML = 'MixTraff'
        mixTraffBtn.onclick = function(){
            exportTemplate(mixtraffTemplate);
        }
    });
    
    appendEL(mixTraffBtn, controlsBox);
    
    createEL('button', function(e){
        googleBtn = e;
        googleBtn.setAttribute('type', 'button');
        googleBtn.innerHTML = 'Google'
        googleBtn.onclick = function(){
            exportTemplate(googleTemplate);
        }
    });
    
    appendEL(googleBtn, controlsBox);
    
    createEL('button', function(e){
        adFoxBtn = e;
        adFoxBtn.setAttribute('type', 'button');
        adFoxBtn.innerHTML = 'AdFox'
        adFoxBtn.onclick = function(){
            exportTemplate(adFoxTemplate);
        }
    });
    
    appendEL(adFoxBtn, controlsBox);
    
    createEL('button', function(e){
        mobsterBtn = e;
        mobsterBtn.setAttribute('type', 'button');
        mobsterBtn.innerHTML = 'Mobster'
        mobsterBtn.onclick = function(){
            exportTemplate(mobsterTemplate);
        }
    });
    
    appendEL(mobsterBtn, controlsBox);
    
    createEL('span', function(e){
        hideControls = e;
        hideControls.style.width = '100px';
        hideControls.style.backgroundColor = 'rgba(255, 23, 23, 0.81)';
        hideControls.style.color = 'rgba(255, 255, 255, 1)';
        hideControls.style.padding = '7px';
        hideControls.style.lineHeight = '28px';
        hideControls.style.fontFamily = 'sans-serif';
        hideControls.style.fontSize = '12px';
        hideControls.style.textTransform = 'uppercase';
        hideControls.style.textAlign = 'center';
        hideControls.innerHTML = 'Hide Controls';
        
        function hideBox(){
            controlsBox.style.opacity = '0';
            hideControls.removeEventListener('click', hideBox);
            hideControls.addEventListener('click', showBox);
            hideControls.style.backgroundColor = 'rgba(0, 186, 64, 0.7)';
            hideControls.innerHTML = 'Show Controls';
        }
        
        function showBox(){
            controlsBox.style.opacity = '1';
            hideControls.removeEventListener('click', showBox);
            hideControls.addEventListener('click', hideBox);
            hideControls.style.backgroundColor = 'rgba(255, 23, 23, 0.81)';
            hideControls.innerHTML = 'Hide Controls';
        }
        
        hideControls.addEventListener('click', hideBox);
    });
    
    appendEL(hideControls, contRols);
    
    appendEL(contRols, body);
    
    getEL('.controlBox > span', function(e){
        e.style.color = 'rgb(255,255,255)';
        e.style.fontFamily = 'sans-serif';
    });
    
    getEL('.fileName', function(e){
        e.onkeyup = function(){ exportFileName = e.value };
        e.onblur = function(){ exportFileName = e.value };
        e.onchange = function(){ exportFileName = e.value };
    });
}
createControls();