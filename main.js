let btnSearch = document.getElementById("btnsearch");
let txtSearch = document.getElementById("search");
let btnSuccess = document.getElementById("success");
let btnFail = document.getElementById("fail");
// let btnSgrade =document.getElementById("Sgrade");
// let btnSname =document.getElementById("Sname");
let btnAdd = document.getElementById("btnAdd");
let popup = document.getElementById("popup");
let table = document.getElementById("table");
let btnSave = document.getElementById("btnSave");
let txtname = document.getElementById("name");
let txtgrade = document.getElementById("grade");
let btndelete = document.getElementById("delete"); 


if(localStorage.getItem("data") != null){
   table.innerHTML = localStorage.getItem("data");
}
btnSuccess.addEventListener("click",()=> active(btnSuccess));
btnFail.addEventListener("click",()=> active(btnFail));
// btnSgrade.addEventListener("click",()=> active(btnSgrade));
// btnSname.addEventListener("click",()=> active(btnSname));
btnAdd.addEventListener("click",()=>{
    txtname.value = "";
    txtgrade.value = "";
   popup.style.display = "block";
   document.getElementById("cover").style.display = "block";
});
document.getElementById("close").addEventListener("click",()=>{
   popup.style.display = "none";
   document.getElementById("cover").style.display = "none";
}); 
function deleteRow(e){
   table.deleteRow(e.target.parentElement.parentElement.rowIndex);
   localStorage.setItem("data",table.innerHTML);
};
function Edit(e){
     popup.style.display = "block";
     document.getElementById("cover").style.display = "block";

     txtname.value = e.target.parentElement.parentElement.children[0].innerHTML;
     txtgrade.value = e.target.parentElement.parentElement.children[1].innerHTML;
     deleteRow(e); 
}

btnSave.addEventListener("click",()=>{
     if(txtname.value!="" && txtgrade.value!="" ){
          let row = document.createElement("tr");
    let rowtd = document.createElement("td");
    rowtd.innerHTML = txtname.value;
    row.appendChild(rowtd);
    rowtd = document.createElement("td");
    rowtd.innerHTML = txtgrade.value;
    row.appendChild(rowtd);
    rowtd = document.createElement("td");
    rowtd.innerHTML = `
                            <button class="edit" onclick="Edit(event)">Edit</button>
                            <button class="delete" onclick="deleteRow(event)">Delete</button>
    `;
    row.appendChild(rowtd);
    table.appendChild(row);

    popup.style.display = "none";
    document.getElementById("cover").style.display = "none";
    localStorage.setItem("data",table.innerHTML);   
     }
     else{
          alert("Please enter name and grade");
     }
})

function selectSucceess(e){
    let tr = document.querySelectorAll("tr");
    if(e.target.classList.contains("active")){
    for(let i=1;i<tr.length;i++){
        if(tr[i].children[1].innerHTML >= 50){
           tr[i].classList.remove("success");
        }
    }}
else
    {
 for(let i=1;i<tr.length;i++){
        if(tr[i].children[1].innerHTML >= 50){
           tr[i].classList.add("success");
        }
    }
}}



function selectFail(e){
    let tr = document.querySelectorAll("tr");
if(e.target.classList.contains("active")){
    for(let i=1;i<tr.length;i++){
        if(tr[i].children[1].innerHTML < 50){
           tr[i].classList.remove("fail");
        }
    }
}
else{
for(let i=1;i<tr.length;i++){
        if(tr[i].children[1].innerHTML < 50){
           tr[i].classList.add("fail");
        }
    }
}
}

// function SortByGrade(e){
//     let tr = document.querySelectorAll("tr");
//     if(!e.target.classList.contains("active")){    
//                 for(let i=1;i<tr.length;i++){
//                     for(let j=i+1;j<tr.length;j++){
//                         console.log(tr[i].children[1].innerHTML);
//                             if(tr[i].children[1].innerHTML > tr[j].children[1].innerHTML){
//                                 let temp = tr[i].innerHTML;
//                                 tr[i].innerHTML = tr[j].innerHTML;
//                                 tr[j].innerHTML = temp;
//                             }else{
//                                 break;
//                             }   
//     }
//         }
// }
// else{
//     table.innerHTML = localStorage.getItem("data");
// }
// }


btnSearch.addEventListener("click",()=>{
 let tr = document.querySelectorAll("tr");
 for(let i=1;i<tr.length;i++){
     if(tr[i].children[0].innerHTML.toLowerCase().includes(txtSearch.value.toLowerCase())){
         tr[i].style.display = "table-row";
     }
     else{
         tr[i].style.display = "none";
     }
 }


});


function active(btn){
      btn.classList.toggle("active");
}