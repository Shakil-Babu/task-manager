let inputField = document.getElementById("inputField");
let allTaks = document.getElementById("allTask");

inputField.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    // for col div
    let col = document.createElement("div");
    col.className = "col-sm-3";
if(this.value === ''){
    alert('Fill in the blank!') ;
}else{
    
    // for single div
    var singleTask = document.createElement("div");

    singleTask.className = " singleTask my-3";

    // for random colors
    var colors = ["purple", "orangered", "orange", "skyblue", "tomato"];
    var random = Math.round(Math.random(0) * colors.length);
    if (random === 0) {
      singleTask.style.background = colors[0];
    } else if (random === 1) {
      singleTask.style.background = colors[1];
    } else if (random === 2) {
      singleTask.style.background = colors[2];
    } else if (random === 3) {
      singleTask.style.background = colors[3];
    } else {
      singleTask.style.background = colors[4];
    }
    // for d-flex title and cross btn
    var alignTitileandCorss = document.createElement("div");
    alignTitileandCorss.className = "d-flex";
    singleTask.appendChild(alignTitileandCorss);
    // for title
    var p = document.createElement("p");
    p.className = "titleStyle p-2";
    p.innerHTML = this.value;

    // for cross btn
    var span = document.createElement("span");
    span.className = "ml-auto  hoverEffect p-2";
    span.innerHTML = '<i class="fas fa-times-circle"></i> ';

    // singleTask Appentchild
    alignTitileandCorss.appendChild(p);
    alignTitileandCorss.appendChild(span);

    // col appendchild
    col.appendChild(singleTask);
    allTaks.appendChild(col);

    // for color div
    var colorBox = document.createElement("div");
    colorBox.className = "colorBox d-flex align-items-center";
    colorBox.style.visibility = "hidden";
    singleTask.appendChild(colorBox);
    singleTask.addEventListener("mouseover", function () {
      colorBox.style.visibility = "visible";
    });
    singleTask.addEventListener("mouseleave", function () {
      colorBox.style.visibility = "hidden";
    });

    // for 4 different color
    var colorList = ["lime", "lightgray", "gold", "salmon", "teal"];
    colorList.forEach((Color) => {
      var colorDiv = document.createElement("div");
      colorDiv.className = "color-circle ml-1";
      colorDiv.style.background = Color;
      colorBox.appendChild(colorDiv);

      // for change background color after click colorDiv button
      colorDiv.addEventListener("click", function () {
        singleTask.style.background = Color;
      });
    });
    // for edit button
    var edit = document.createElement("spna");
    edit.innerHTML = '<i class="fas fa-edit" > </i>';
    edit.className = "ml-auto text-light mr-2";
    colorBox.appendChild(edit);

    // after click edit button
    edit.addEventListener("click", function () {
        var textArea = document.createElement('textarea') ;
        textArea.innerText = p.innerHTML ;
        textArea.className = 'inner-textarea';
        textArea.style.width = singleTask.offsetWidth +'px';
        textArea.style.height = singleTask.offsetHeight + 'px';

        // after click enter
        textArea.addEventListener('keypress' , function(e){
            e.stopPropagation();
            if(e.keyCode === 13){
                p.innerHTML = this.value ;
               e.target.remove(this) ;
            }
        })
        singleTask.appendChild(textArea);
    });

    // after click cross btn
    span.addEventListener("click", function () {
      allTaks.removeChild(col);
    });

    // for emty value
    this.value = "";
}
  }
});
