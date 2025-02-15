let array=[];
if( localStorage.getItem("array") !=null){
  array= JSON.parse( localStorage.getItem("array"));
  showTodo();

}
 



function addTodo(){
  let toTxtEle = document.querySelector('#todoTxt');
  let toDateEle = document.querySelector('#todoDate');
  let task = toTxtEle.value;
  let date = toDateEle.value;
  if(task==="" || date === ""){
    alert("Fill all the feild");
  }
  else{
    array.push({
      item:task,
      date: date
    });
    localStorage.setItem('array',JSON.stringify(array));
    toTxtEle.value="";
  toDateEle.value="";

  }
    
  
  showTodo();
  


}

function showTodo(){
  document.getElementById('content').innerHTML="";


  for (let index = 0; index < array.length; index++) {
    let tr= document.createElement("tr");

    tr.innerHTML=`
                    <td> ${array[index].item} </td>
                    <td> ${array[index].date} </td>
                    <td> <button onclick=" removeEle(${index});
                    showTodo();                    
                     " class= "btn-delete" >Delete </delete>  </td>
                     ` ;
    document.getElementById('content').appendChild(tr);
    
    
  }
}

function removeEle(idx){
  if (idx !== -1) {
    array.splice(idx, 1);
    localStorage.setItem('array',JSON.stringify(array));
  }
  
}
