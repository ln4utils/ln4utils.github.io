    ss="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@";
	
	function v10toX(n,m){m=String(m).replace(/ /gi,"");if(m=="")return"";if(parseInt(m)!=m){M("请输入整数！");return""}var t="";var a=ss.substr(0,n);while(m!=0){var b=m%n;t=a.charAt(b)+t;m=(m-b)/n}return t}function vXto10(n,m){m=String(m).replace(/ /gi,"");if(m=="")return"";var a=ss.substr(0,n);if(eval("m.replace(/["+a+"]/gi,'')")!=""){M("请输入"+n+"进制数！");return""}var t=0,c=1;for(var x=m.length-1;x>-1;x--){t+=c*(a.indexOf(m.charAt(x)));c*=n}return t}function vXtoY(n,m,y){a=vXto10(n*1,m);if(a=="")return"";a=v10toX(y,a);return a}function M(str){alert(str)}function convert(hex_input,id_input,hex_output,id_output){var input_v=document.getElementById(id_input).value;var outputEle=document.getElementById(id_output);var hex_in_v=document.getElementById(hex_input).value;var hex_out_v=document.getElementById(hex_output).value;outputEle.value=vXtoY(hex_in_v,input_v,hex_out_v)}function convert_c(hex_input_v,id_input,hex_output_v,id_output){var input_v=document.getElementById(id_input).value;var outputEle=document.getElementById(id_output);outputEle.value=vXtoY(hex_input_v,input_v,hex_output_v)}

	function jz(){
		var input_value = $("#input_value").val();
	
		if(input_value!=""){
				var in1 = $("input:radio:checked").val();
			$("input[id^=base_]").each(function(){
				var id = $(this).attr("id");
				var to = id.replace("base_","");
				var out = vXtoY(in1,input_value,to);
				$(this).val(out);
			})
		}
		
	}
	
	function px(){
		convert_c($("#input_num").val(), 'input_value', $("#output_num").val(), 'output_value');
	}

	 function Empty() {
        document.getElementById('str').value = '';
		document.getElementById('estr').value = '';
        document.getElementById('str').select();
    }
	
    function GetFocus() {
			document.getElementById('str').focus();
    }