let todoele= document.getElementById('textinfo');
let tasklist=document.getElementById('tasklist');


 /*eventlistener for add button */  
document.getElementById('add').onclick=function(){
    if(todoele.value.length==0){
        alert("Enter the task details")
    }
    else{
        tasklist.innerHTML= tasklist.innerHTML+ `<div class="task">
        <span id="work">${todoele.value}</span>
        <button class="del"><i class="fa fa-trash"></i></button>
    </div>` 
    
    /*gets delete button tag of all tasks added */  
    let alltasks=document.querySelectorAll('.del')
    for(i=0;i<alltasks.length;i++){

        /*eventlistener for delete button */  
        alltasks[i].onclick=function(){

            /*delete parent element tasklist */  
            this.parentNode.remove();
        }
         
    } 
    todoele.value="";
}   
    
    
}



