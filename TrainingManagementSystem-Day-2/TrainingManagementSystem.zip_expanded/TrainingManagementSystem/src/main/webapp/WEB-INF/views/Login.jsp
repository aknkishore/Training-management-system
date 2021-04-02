<jsp:include page="cheader.jsp"></jsp:include>
<div class="container">
<div class="row">
		<div class="col-sm-5 mx-auto">
			<%
				if (session.getAttribute("msg") != null) {
			%>
			<div class="alert alert-success text-center">
				<strong><%=session.getAttribute("msg")%></strong>
			</div>
			<%
				session.removeAttribute("msg");
			}
			%>
			<%
				if (session.getAttribute("error") != null) {
			%>
			<div class="alert alert-danger text-center">
				<strong><%=session.getAttribute("error")%></strong>
			</div>
			<%
				session.removeAttribute("error");
			}
			%>
		</div>
	</div>
<div class="row">
	<div class="col-sm-5 mx-auto p-3">
		<div class="card bg-transparent p-3 mt-2 shadow">		
		<form method="post" onsubmit="return loginvalidate();" action="login">
			<div class="form-group">
				<label for="userid">User ID</label> <input
					type="text" class="form-control form-control-sm" id="userid" name="userid"
					placeholder="Enter userid">
			</div>
			<div class="form-group">
				<label for="pwd">Password</label> <input name="pwd"
					type="password" class="form-control form-control-sm" id="pwd"
					placeholder="Password">
			</div>
			<div class="form-group">
				<label for="role">Role</label>
				<select name="role"
					class="form-control form-control-sm" id="role">
					<option value=""><-- Select Role --></option>
					<option>Administrator</option>
					<option>Employee</option>
				</select>
			</div>
			<input type="submit" class="btn btn-primary btn-sm px-3 float-right" value="Login">
		</form>
		</div>
		
	</div>
</div>
</div>
<jsp:include page="cfooter.jsp"></jsp:include>