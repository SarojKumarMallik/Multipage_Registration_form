
$("#photo").change(function (e) {
    if(document.getElementById('photo').files[0].size < 4194304){
        
    }
    else{
        document.getElementById('photo-msg').style="display:block";
        document.getElementById('photo-msg').style="color:red";
    }
});
$("#hsc").change(function (e) {
    if(document.getElementById('hsc').files[0].size < 4194304){
    }
    else{
        document.getElementById('hsc-msg').style="display:block";
        document.getElementById('hsc-msg').style="color:red";
    }
});
$("#ssc").change(function (e) {
    if(document.getElementById('hsc').files[0].size < 4194304){
    }
    else{
        document.getElementById('ssc-msg').style="display:block";
        document.getElementById('ssc-msg').style="color:red";
    }
});
$("#sem").change(function (e) {
    if(document.getElementById('hsc').files[0].size < 1048576){
    }
    else{
        document.getElementById('sem-msg').style="display:block";
        document.getElementById('sem-msg').style="color:red";
    }
});


$(document).ready(function(){
    $(".btn").click(function(){
        if($(this).attr("next") == '1'){
            $("#1").removeClass("d-none");
            $("#2").addClass("d-none");
            $("#3").addClass("d-none");
        }
        if($(this).attr("next") == '2'){
            $("#2").removeClass("d-none");
            $("#1").addClass("d-none");
            $("#3").addClass("d-none");
        }
        if($(this).attr("next") == '3'){
            $("#3").removeClass("d-none");
            $("#2").addClass("d-none");
            $("#1").addClass("d-none");
        }
    });
});
function myfunc(event){
    event.preventDefault();
var first_name=document.getElementById("first").value;
var last_name=document.getElementById("last").value;
var date_of_birth=document.getElementById("date_of_birth").value;
var email=document.getElementById("email").value;
var fn_first=document.getElementById("fn_first").value;
var fn_last=document.getElementById("fn_last").value;
var mn_first=document.getElementById("mn_first").value;
var mn_last=document.getElementById("mn_last").value;
var temp_gender=document.getElementById("gender");
var nationality=document.getElementById("nationality").value;
var street=document.getElementById("street").value;
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;
var t_home=document.getElementById("t_home").value;
var t_mobile=document.getElementById("t_mobile").value;

localStorage.setItem("FullName",(first_name+" "+last_name));
localStorage.setItem("Date Of Birth",date_of_birth);
localStorage.setItem("Email",email);
localStorage.setItem("Father's Name",(fn_first+" "+fn_last));
localStorage.setItem("Mother's Name",(mn_first+" "+mn_last));
temp_gender.checked ? gender="Male": gender="Female";
localStorage.setItem("Gender",gender);
localStorage.setItem("Nationality",nationality);
localStorage.setItem("Home Address",(street+" "+city+" "+country));
localStorage.setItem("Telephone_Home",t_home);
localStorage.setItem("Telephone_Mobile",t_mobile);


var hsc_name=document.getElementById("hsc_name").value;
var hsc_score=document.getElementById("hsc_score").value;
var ssc_board=document.getElementById("ssc_board").value;
var c_pursuing=document.getElementById("c_pursuing").value;
var o_per=document.getElementById("o_per").value;

var hsc_board=document.getElementById("hsc_board").value;
var ssc_name=document.getElementById("ssc_name").value;
var ssc_score=document.getElementById("ssc_score").value;
var cp_institute=document.getElementById("cp_institute").value;
var c_backlogs=document.getElementById("c_backlogs").value;

localStorage.setItem("HSC Institute Name",hsc_name);
localStorage.setItem("HSC Board",hsc_board);
localStorage.setItem("HSC Score",hsc_score);
localStorage.setItem("SSC Institute Name",ssc_name);
localStorage.setItem("SSC Board",ssc_board);
localStorage.setItem("SSC Score",ssc_score);
localStorage.setItem("Current Pursuing",c_pursuing);
localStorage.setItem("Current Pursuing Institute Name",cp_institute);
localStorage.setItem("Overall Percentage",o_per);
localStorage.setItem("Current Backlogs",c_backlogs);

            var reader=new FileReader();
            reader.addEventListener('load',function(){
                if(this.result && localStorage){
                    localStorage.setItem("Recent Passport Size Photo",this.result);
                   
                }
            })
            reader.readAsDataURL(document.getElementById('photo').files[0])

            var reader1=new FileReader();
            reader1.addEventListener('load',function(){
                if(this.result && localStorage){
                    localStorage.setItem("HSC Marksheet",this.result);
                }
            })
            reader1.readAsDataURL(document.getElementById('hsc').files[0])
            var reader2=new FileReader();
            reader2.addEventListener('load',function(){
                if(this.result && localStorage){
                    localStorage.setItem("SSC Marksheet",this.result);
                }
            })
            reader2.readAsDataURL(document.getElementById('ssc').files[0])

            var reader3=new FileReader();
            reader3.addEventListener('load',function(){
                if(this.result && localStorage){
                    localStorage.setItem("Semestar Marksheet",this.result);
                }
            })
            reader3.readAsDataURL(document.getElementById('sem').files[0])
            alert("Upload Sucessfully");
}