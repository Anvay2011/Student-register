name_of_the_students=[];
display_student_array=[]

function submit()
{
    for( var j=1;j<=4; j++){
        var name_student=document.getElementById("name_of_students"+j).value;
        console.log(name_student);
        name_of_the_students.push(name_student);
    
    }
    for( var k=0; k<name_of_the_students.length;k++){
        display_student_array.push("<h4> Name-"+name_of_the_students[k]+"</h4>")
    }
    document.getElementById("display_name").innerHTML=display_student_array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_commas").innerHTML=remove_commas;
}


function sort()
{
    name_of_the_students.sort(); 
    console.log(name_of_the_students); 

    var display_student_array_sorting = [];

     var lenght_of_name_of_students_array = name_of_the_students.length; 

     console.log(lenght_of_name_of_students_array);

      for (var k = 0; k < lenght_of_name_of_students_array; k++) 
      { display_student_array_sorting.push("NAME- " + name_of_the_students[k] + "</h4>"); 
      console.log(display_student_array_sorting); } 

    var remove_commas = display_student_array_sorting.join(" "); 

    console.log(remove_commas); 

    document.getElementById("display_commas").innerHTML = remove_commas
}
function new_update() {
     document.getElementById("display_commas").innerHTML = "<h1>" + name_of_the_students +"</h1>"; }