function enlargeText(){
    TextField.style.fontSize = "2em";
    console.log("Page called: enlargeText()");
}

function toggleFancify(state){
    console.log("State is: " + state);

    if (state === 'fancy'){
        TextField.style.color = "#0000FF";
        TextField.style.textDecoration = "underline #0000FF";
        TextField.style.fontWeight = "bold";
    } 
    else if (state === 'boring'){
        TextField.style.color = "#000000";
        TextField.style.textDecoration = "none";
        TextField.style.fontWeight = "normal";
    } 
    else {
        alert("Hit an Undefined State!")
    }
}

function addMoo(){
    let ContentString = TextField.value;
    console.log("Appending -Moo to: " + ContentString);

    let SlicedString = ContentString.split(".");

    for(let i = 0; i < SlicedString.length; i++){
        if(SlicedString[i].length > 0){
            console.log("Slice is: " + SlicedString[i]);
            SlicedString[i] += "-Moo"
            console.log("Added Moo: " + SlicedString[i]);
        }
    }

    let NewString = SlicedString.join(".");
    NewString = NewString.toUpperCase();
    console.log("New String is: " + NewString);

    TextField.value = NewString;
}

let TextField = document.getElementById("TextField");
TextField.style.resize = "none";