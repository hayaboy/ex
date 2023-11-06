<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

<!--  <script>
	function click1() {
		alert("hi222233");

	}

	 window.onload = function() {
	    let btn  = document.getElementById("checkJson");
	    
	  
	    btn.addEventListener("click", click1, false);
		//btn.onclick = click1;	

	} 
</script>  -->
<script>

/* $(document).ready(function(){
	

	$("#checkJson").click(function(){
		alert("ddd");
	});
});
 */


$(function(){
	$("#checkJson").click(function(){
		alert("ddd2");
	});
}
	

	
);
		


</script>

</head>
<body>

	여기는 JSON 테스트 페이지
	<p>
		<!-- <input type="button" id="checkJson" value="클릭"  onclick="click1()"/><br> -->
		<input type="button" id="checkJson" value="클릭" /><br> <br>

		<!-- <script>
	function click1() {
		alert("hi");

	}

	
</script>	 -->
	<div id="output"></div>
	<!--  <form  name="form1" method="post" action="/pro29/">
  <input type="submit">
  </form>  -->
</body>
</html>