$(document).ready(function(){$('#call').bind('click',function(){$.ajax({url:"forms/form_1.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('#modal_1').show().delay(3000);CenterForm($("#modal_1"));$('#modal_1').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});$('#manual').bind('click',function(){$.ajax({url:"forms/form_2.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('#modal_2').show().delay(3000);CenterForm($("#modal_2"));$('#modal_2').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});$('#package_1').bind('click',function(){$.ajax({url:"forms/form_3.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$("#package_id").val("1");$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('.proposal_completed').show().delay(3000);CenterForm($(".proposal_completed"));$('.proposal_completed').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});$('#package_2').bind('click',function(){$.ajax({url:"forms/form_3.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$("#package_id").val("2");$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('.proposal_completed').show().delay(3000);CenterForm($(".proposal_completed"));$('.proposal_completed').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});$('#package_3').bind('click',function(){$.ajax({url:"forms/form_3.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$("#package_id").val("3");$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('.proposal_completed').show().delay(3000);CenterForm($(".proposal_completed"));$('.proposal_completed').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});$('#package_4').bind('click',function(){$.ajax({url:"forms/form_3.html",type:'POST',dataType:'html',beforeSend:function(){startLoadingAnimation();},success:function(response){stopLoadingAnimation();$(response).appendTo('body');CenterForm($(".form_call"));$("#package_id").val("4");$('.close').click(function(){$(this).parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$('.block_page').click(function(){$('.close').parent().fadeOut().remove();$('.block_page').fadeOut().remove();});$("#form_call").submit(function(e){var formData=new FormData($('#form_call')[0]);e.preventDefault();$.ajax({type:"POST",processData:false,contentType:false,url:'/form.php',data:formData,success:function(result){$('.form_call').fadeOut().remove();$('.block_page').fadeOut().remove();$('.proposal_completed').show().delay(3000);CenterForm($(".proposal_completed"));$('.proposal_completed').fadeOut(2000);}});});},error:function(){stopLoadingAnimation();}});});});function startLoadingAnimation(){var imgObj=$("#loadImg");imgObj.show();var centerY=$(window).scrollTop()+($(window).height()-imgObj.height())/2;var centerX=$(window).scrollLeft()+($(window).width()-imgObj.width())/2;imgObj.offset({top:centerY,left:centerX});}function CenterForm(Obj){var centerY=$(window).scrollTop()+($(window).height()-Obj.height())/2;var centerX=$(window).scrollLeft()+($(window).width()-Obj.width())/2;Obj.offset({top:centerY,left:centerX});}function stopLoadingAnimation(){$("#loadImg").hide();}