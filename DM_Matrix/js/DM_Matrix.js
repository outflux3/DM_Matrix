

jQuery(document).ready(function() { 

$("#editpages").tablesorter({widgets: ['zebra']})
.tablesorterPager({container: $("#pager")}); 

//$('#nav_DM_Matrix').insertAfter($('#nav_pages'));


$("button.form_submit").on("click", function(){
		errors=false;
		$('.required').each(function(index) { 
			if ($(this).removeClass('formerror'));
			if ($(this).val()=="") {
				$(this).addClass('formerror');
				errors=true;
			}
		})
		if (errors==false){
			$(this).closest('form').submit();
		}
		return false;
	});	


$('.imagepicker').live("change",function() {
	//alert("changed..");
})

$('select#post-type').on("change",function() {
	//alert($(this).val());
	fieldtype=$(this).val();
	switch (fieldtype){
		case 'dropdown':
			$('#fieldoptions').html($('#field-dropdown').html());
			$('#post-table').on("change",function() {
				fields = $('#post-table option:selected').attr('data-fields');
				$('#post-rows').find('option').remove().end();
				 var fieldArray = fields.split(',');
			    for(var i=0;i<fieldArray.length-1;i++){
			        $('#post-row').append('<option value="' + fieldArray[i] + '" >'+ fieldArray[i]  + '</option>');
			    }
			})
			break; 
		default: 
			$('#fieldoptions').html('');
			break; 
	}
})



$('.datepicker').each(function(){
    $(this).datepicker({ dateFormat: 'dd-mm-yy' });
});

$('.datetimepicker').each(function(){
	$(this).datetimepicker({ dateFormat: 'dd-mm-yy' });	
})

$('#dm_addnew').on("click", function(){
	$('#DM_addnew_row').stop().slideUp();
	$(this).next().stop().slideToggle();
	//alert("add new");	
	return false;	
})
	
	
$('#addfield').on("click", function(){
	errors=false;
		$('.required').each(function(index) { 
			if ($(this).removeClass('error'));
			if ($(this).val()=="") {
				$(this).addClass('error');
				errors=true;
			}
		})
		if (errors==false){
			$(this).closest('form').submit();
		}
})


  $('.mtrx_but').button();
  $('.mtrx_but_add').button({icons:{primary: "mtrx_dbadd"}});


})



function makeSlug(element) {
    var Text = $('#'+element).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(regExp,'-');
    $('#' + element+"").val(Text);
}



