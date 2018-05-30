
//鐣欒█鐗堝垽绌鸿〃鍗?#form
function checkForm()
{
	var flag = true;
	$('#guestbook').find('input[required="required"]').each(function() {
		var obj = $(this);
		if($.trim(obj.val()) == '')
		{
			var label = obj.parent().parent().find('.titles').text().replace(/锛?/, '');
			var str = '璇峰～鍐?' + label + '锛?';
			alert(str);
			obj.focus();
			flag = false;
			return false;
		}
	});
	if(flag == true)
	{
		$('#guestbook').submit();
	}
}


//浜烘墠鎷涜仒鍒ょ┖琛ㄥ崟#job
function checkFormA()
{

	var flag = true;

	$('#apply').find('input[required="required"]').each(function() {

		var obj = $(this);

		if($.trim(obj.val()) == '')

		{

			var label = obj.parent().parent().find('.titles').text().replace(/锛?/, '');

			var str = '璇峰～鍐?' + label + '锛?';

			alert(str);

			obj.focus();

			flag = false;

			return false;

		}

	});

	if(flag == true)

	{

		$('#job').submit();

	}
}
//鎼滅储鍒ょ┖
 function checkFormS()
 {
 	var gosubmit = true;
 	var seastr = document.getElementById("SeaStr");

 	if(seastr.value == '')
 	{
 		gosubmit = false;
 		alert('璇疯緭鍏ユ悳绱㈠唴瀹?!');
 		seastr.focus();
 	}
 	return gosubmit;
 }