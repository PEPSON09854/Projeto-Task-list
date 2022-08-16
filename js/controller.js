let counter=0,input=document.querySelector("#tool"),btnAdd=document.querySelector("#btn-add"),list=document.querySelector("#list");btnAdd.addEventListener("click",()=>{let a=input.value;if(""!==a&&null!==a&&a!==void 0){++counter;let b=`<div id='${counter}' class='item'>
            <div onclick="scheduleTask(${counter})" class="item-icon">
                <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
            </div>

            <div onclick="scheduleTask(${counter})" class="item-name">
                ${a}
            </div>

            <div class="item-button">
                <button onclick="delet(${counter})" class="delete"><i class="mdi mdi-trash-can"></i></button>
            </div>
        </div>`;list.innerHTML+=b,input.value="",input.focus()}});function delet(a){let b=document.getElementById(a);b.remove()}function scheduleTask(a){let b=document.getElementById(a),c=b.getAttribute("class");if("item"===c){b.classList.add("checked");let c=document.getElementById("icon_"+a);c.classList.remove("mdi-circle-outline"),c.classList.add("mdi-check-circle"),~b.parentNode.appendChild(b)}else{b.classList.remove("checked");let c=document.getElementById("icon_"+a);c.classList.remove("mdi-check-circle"),c.classList.add("mdi-circle-outline")}}input.addEventListener("keyup",a=>{13===a.keyCode&&(a.preventDefault(),btnAdd.click())});