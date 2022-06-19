
function submit()
{
    if(document.getElementById("name").value=="" && document.getElementById("sec").value=="" &&document.getElementById("day").value=="")
    {
        window.alert("Please Enter Details ");
    }
    var x=document.getElementById("sec").value
    if(x.toUpperCase()=="6CCE01" || x.toUpperCase()=="6CCE02" )
    {
        document.getElementById("demo").innerHTML=("welcome to " +x.toUpperCase());
        var n=document.getElementById("name").value;
       
    switch(n.toLowerCase())
    {
        case "lakshmeesha" :
            {
                document.getElementById("demo1").innerHTML=("cabin at <br>" );
                document.getElementById("demo11").innerHTML=("  Q - block First Floor");
                var d=document.getElementById("day").value;
                switch(d.toLowerCase())
                {
                    case "monday":
                        {
                            document.getElementById("demo2").innerHTML=("Lakshmeesha Sir is free at <br> 10:00 - 10:50");
                            break;  
                        }
                    case "tuesday":
                        {
                            document.getElementById("demo2").innerHTML=("Lakshmeesha Sir is free at <br> 11:00 - 11:50");
                            break;  
                        }
                        case "wednesday":
                        {
                            document.getElementById("demo2").innerHTML=(" Lakshmeesha Sir is free at <br> 8:45 - 9:35");
                            break;  
                        }
                        case "thursday":
                        {
                            document.getElementById("demo2").innerHTML=("Lakshmeesha Sir is free at <br> 1:05 - 1:55");
                            break;  
                        }
                        case "friday":
                        {
                            document.getElementById("demo2").innerHTML=("Lakshmeesha Sir is free at <br> 3:55 - 4:45 ");
                            break;  
                        }
                        default: window.alert("Result not found");
                    }
                break;
            }
                 
         case "bhoomika" :
                {
                    document.getElementById("demo1").innerHTML=("cabin at <br>" );
                document.getElementById("demo11").innerHTML=("  L - block First Floor");
                    var d=document.getElementById("day").value;
                    switch(d.toLowerCase())
                    {
                        case "monday":
                            {
                                document.getElementById("demo2").innerHTML=("Bhoomika Mam is free at <br> 11:30 - 12:30");
                                break;  
                            }
                        case "tuesday":
                            {
                                document.getElementById("demo2").innerHTML=("Bhoomika Mam is free at <br> 10:00 - 11:30");
                                break;  
                            }
                            case "wednesday":
                            {
                                document.getElementById("demo2").innerHTML=("Bhoomika Mam is free at <br> 2:00 - 2:45");
                                break;  
                            }
                            case "thursday":
                            {
                                document.getElementById("demo2").innerHTML=("Bhoomika Mam is free at <br> 9:00 - 9:45");
                                break;  
                            }
                            case "friday":
                            {
                                document.getElementById("demo2").innerHTML=("Bhoomika Mam is free at <br> 3:00 - 3:50 ");
                                break;  
                            }
                            default: window.alert("Result not found");
                        }
                        break;
                    }
                case "vani ashok" :
                         {
                            document.getElementById("demo1").innerHTML=("cabin at <br>" );
                            document.getElementById("demo11").innerHTML=("  L - block Ground Floor");
                var d=document.getElementById("day").value;
                switch(d.toLowerCase())
                {
                    case "monday":
                        {
                            document.getElementById("demo2").innerHTML=("Vani Mam is free at <br> 9:00 - 9:55");
                            break;  
                        }
                    case "tuesday":
                        {
                            document.getElementById("demo2").innerHTML=("Vani Mam is free at <br> 2:00 - 2:50");
                            break;  
                        }
                        case "wednesday":
                        {
                            document.getElementById("demo2").innerHTML=("Vani Mam is free at <br> 8:45 - 9:35");
                            break;  
                        }
                        default: window.alert("Result not found");
                            

                    }
                    break; 
                }
            default: window.alert("Result not found");
            

    }
}
    

else{
    document.getElementById("demo").innerHTML=("Result not Found");

}


}


