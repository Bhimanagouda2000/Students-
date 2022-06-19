
function login(){
    
    if(document.getElementById("roll").value=="")
    {
        window.alert("Please Enter Roll Number");
        return false;
    }
    else if(document.getElementById("pass").value=="")
    {
        window.alert("Please Enter Password");  
        return false;
    }
   
    if((document.getElementById("roll").value=="20191CCE0086"&&document.getElementById("pass").value==17320705)||(document.getElementById("roll").value=="20191CCE0012"&&document.getElementById("pass").value==78982450)||(document.getElementById("roll").value=="20191CCE0021"&&document.getElementById("pass").value==13367116))
    {
        return true;
    }
    else{
        window.alert("The Details are not Correct ");
        return false;
    }
    
}