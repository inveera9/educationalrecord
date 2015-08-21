//= require active_admin/base
//= require bootstrap-sprockets
$(function (){
    $('#student_dob').datepicker({
       dateFormat: 'dd-mm-yy',
       changeYear: true,
       changeMonth: true,
       yearRange: "1950:2050"
   });
    $('#student_enroll_date').datepicker({
     dateFormat: 'dd-mm-yy',
     changeYear: true,
     changeMonth: true,
     yearRange: "1950:2050"
 });
    $('#student_graduation_date').datepicker({
     dateFormat: 'dd-mm-yy',
     changeYear: true,
     changeMonth: true,
     yearRange: "1950:2050"
 });
    $('.completion_year').each(function(){

        $('.completion_year').datepicker({
            dateFormat: 'dd-mm-yy',
            changeYear: true,
            changeMonth: true,
            yearRange: "1950:2050"
        });
    })

});
$(document).ready(function(){
	var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var x = 1;    
    var xval = $("#xval").val();
     // debugger
     if (typeof xval !== 'undefined' )
     {
        x=$("#xval").val();
    }
    // alert(xval);
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();


        x++; 
        $(wrapper).append('<div class="education secondEdu">'+
            '<h3>Course '+x+'</h3> <a href="#" class="remove_field">Remove</a>'+
            '<div style="clear:both;"></div>'+
            '<ol><li class="string input optional stringish">'+
            '<label for="completion_year">Completion Year</label>'+
            '<select name="completion_year[]">'+
            '<option value ="">Please Select</option>'+
            '<option value ="Freshman">Freshman</option>'+
            '<option value ="Sophomore">Sophomore</option>'+
            '<option value ="Junior">Junior</option>'+
            '<option value ="Senior">Senior</option>'+

            '</select>'+
            '</li>'+


            '<li class="string input optional stringish">'+
            '<label for="subject">Subject</label>'+
            '<input type="text" name="subject[]">'+
            '</li>'+

            '<li class="string input optional stringish">'+
            '<label for="course_name">Course Name</label>'+
            '<input type="text" name="course_name[]">'+
            '</li>'+

            '<li class="string input optional stringish">'+
            '<label for="honors">Honors</label>'+
            '<select name="honors[]">'+
            '<option value ="No">No</option>'+
            '<option value ="Yes">Yes</option>'+
            '</select>'+
            '</li>'+

            '<li class="string input optional stringish">'+
            '<label for="grade">Grade</label>'+
            '<select name="grade[]">'+
            '<option value ="A+">A+</option>'+
            '<option value ="A">A</option>'+
            '<option value ="A-">A-</option>'+
            '<option value ="B+">B+</option>'+
            '<option value ="B">B</option>'+
            '<option value ="B-">B-</option>'+
            '<option value ="C+">C+</option>'+
            '<option value ="C">C</option>'+
            '<option value ="C-">C-</option>'+
            '<option value ="D+">D+</option>'+
            '<option value ="D">D</option>'+
            '<option value ="D-">D-</option>'+
            '<option value ="F">F</option>'+
            '<option value ="CR">CR</option>'+
            '<option value ="NC">NC</option>'+
            '<option value ="W">W</option>'+
            '<option value ="I">I</option>'+

            '</select>'+
            '</li>'+

            '<li class="string input optional stringish">'+
            '<label for="credit">Credit</label>'+
            '<select name="credits[]">'+
            '<option value ="0.5">0.5</option>'+
            '<option value ="1.0">1.0</option>'+
            '<option value ="2.0">2.0</option>'+
            '</li>'+

            '<input type="hidden" name="total_credit[]">'+
            '<input type="hidden" name="gpa_credit[]">'+
            '<input type="hidden" name="gpa_points[]">'+
            '<input type="hidden" name="cumulative_gpa[]">'+
            

            '</ol>'+
            '</div>'); 


});

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        // e.preventDefault(); 
        $(this).parent('div').remove();
        x--;
    });
    var a =  $('#user_email_input p').html();
    if(a){
        var b = a.replace('and', '').trim(); 
        $('#user_email_input p').html(b);  
    }
    var c =  $('#school_email_input p').html();
    if(c){
        var d = c.replace('and', '').trim(); 
        $('#school_email_input p').html(d);  
    }
    var e =  $('#student_email_input p').html();
    if(e){
        var f = e.replace('and', '').trim(); 
        $('#student_email_input p').html(f);  
    }
    $('select#user_country').val('US');
    $('select#school_country').val('US');
    $('select#student_country').val('US');

    if(document.URL.contains("users")){
        $('#user_state_input').append('<div id="order_state_code_wrapper"></div>');
        $('#user_state').remove();
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        url = "/user/registrations/subregion_options?parent_region=US";
        select_wrapper.load(url);
    }
    
    $('select#user_country').change(function(){
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        country_code = $(this).val();
        url = "/user/registrations/subregion_options?parent_region="+country_code;
        select_wrapper.load(url);
    });

    if(document.URL.contains("schools")){
        $('#school_state_input').append('<div id="order_state_code_wrapper"></div>');
        $('#school_state').remove();
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        url = "/schools/subregion_options?parent_region=US";
        select_wrapper.load(url);
    }
    $('select#school_country').change(function(){
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        country_code = $(this).val();
        url = "/schools/subregion_options?parent_region="+country_code;
        select_wrapper.load(url);
    });


    if(document.URL.contains("students")){
        $('#student_state').wrap('<div id="order_state_code_wrapper"></div>');
        $('#student_state').remove();
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        url = "/students/subregion_options?parent_region=US";
        select_wrapper.load(url);
    }
    $('select#student_country').change(function(){
        select_wrapper = $('#order_state_code_wrapper');
        $('select', select_wrapper).attr('disabled', true);
        country_code = $(this).val();
        url = "/students/subregion_options?parent_region="+country_code;
        select_wrapper.load(url);
    });


    if(document.referrer.contains("user_id")){
      var id = document.referrer.split('user_id=')[1]
      $('select#school_user_id').val(id);
  }

  if(document.referrer.contains("school_id")){
    var id = document.referrer.split('school_id=')[1]
    $('select#student_school_id').val(id);
}

$('body.show.admin_students #page_title').html("Student Detail");
$('body.new.admin_students #page_title').html("Add Student Detail");



$('#student_submit_action').click(function(event){
    var flag = true;
    var first_name = $("#student_first_name").val();
    var last_name = $("#student_last_name").val();
    var zip = $("#student_zip").val();
    var phone = $("#student_phone").val();
    var dob= $("#student_dob").val();
    var enroll_date=$("#student_enroll_date").val();
    var grad_date=$("#student_graduation_date").val();
    if (first_name==''){
        $('#first_name_error').html('First name can not be blank');
        flag=false; 
        
    }
    else{
         $('#first_name_error').html('');
    }

     if(last_name==''){
        $('#last_name_error').html('Last name can not be blank');
        flag=false; 
        
    }
    else{
         $('#last_name_error').html('');
    }

    if(dob==''){
        $('#student_dob_error').html('dob can not be blank');
        flag =false;
    }
    else{
         $('#student_dob_error').html('');
    }

    
    if(!$.isNumeric(zip) || zip.length!=5){
        $('#zip_error').html('Zip code should be integer and length should be 5 character');
        flag=false;

    }
    else{
        $('#zip_error').html('');
    }

     if(!$.isNumeric(phone) || phone.length!=10){
            $('#phone_error').html('Length should be integer and 10 numbers');
          
            flag=false;
       }
       else{
        $('#phone_error').html('');

       }



     if(enroll_date==''){
        $('#student_enroll_date_error').html('enroll_date can not be blank');
        flag =false;
    }

    else{
         $('#student_enroll_date_error').html('');

    }
if(grad_date==''){
        $('#student_graduation_date_error').html('graduation date can not be blank');
        flag =false;
    }
    else{
         $('#student_graduation_date_error').html('');
    }
    

    return flag;
    event.preventDefault();
});

$('#student_email').blur(function(event){

     $.getJSON('/students/checkemail', { email: $('#student_email').val() }, function(data) {
        $('#student_email').addClass("error");
        if(data.email=='exist'){
             $('#student_email_error').html('Please use different Email');
             return false;
        }
        else{
             $('#student_email_error').html('');
        }

      });

});


});

function printpage()
{
    window.print()
}