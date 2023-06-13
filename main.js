function boldfun(p){
    let text = document.getElementById("fname");
    let selectedText = text.value.substr(text.selectionStart, text.selectionEnd - text.selectionStart);
    // document.getElementById("fname").style.color = "bold";
    // document.getElementById("fname").innerHTML = "<b>"+x+"</b>";
    // document.getElementById("fname").replaceWith = "<b>"+x+"</b>";
    // alert("<b>"+x+"</b>")
    // alert(selectedText);
    // document.getElementsByClassName("demo")[0].innerHTML="<b>"+selectedText+"</b>";
    // document.getElementsById("fname").replace="<b>"+selectedText+"</b>";
    // document.text.write = "<b>"+selectedText+"</b>";
    p.replace = "<b>"+selectedText+"</b>";
    return false;
}