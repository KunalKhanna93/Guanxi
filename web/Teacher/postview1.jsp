<%-- 
    Document   : attendence
    Created on : 15 Mar, 2014, 1:51:46 AM
    Author     : Anirudh
--%>
<%@  page import="java.util.*,java.sql.*,javax.swing.*,java.awt.*"  %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <link rel="stylesheet" type="text/css" href="table.css" media="all" />
    </head>
    <%
    try
       { 
           Connection c=null;
          Class.forName("com.mysql.jdbc.Driver");
          c=DriverManager.getConnection("jdbc:mysql://localhost:3306/guanxi","root", "root");
          String user=(String)session.getAttribute("user");
          String utype=(String)session.getAttribute("type");
          
          out.println(user);
         
          if(user==null || utype.equals("teacher")==false)
          {
        String site ="http://localhost:8084/Guanxi/Campcon/Campcon.htm";
        response.setStatus(response.SC_MOVED_TEMPORARILY);
        response.setHeader("Location", site); 
          }
          
          String sql="SELECT post,postid FROM posttable WHERE user='"+user+"'";
           Statement s = c.createStatement();
             ResultSet rs=s.executeQuery(sql);
   int count=1;
   out.println("<form action='postview2.jsp' method='post'><center><table class='tsc_table_s9' summary='Sample Table' style='width:80%;'><thead><tr><th>S No.</th><th style='max-width:70px;'>Post</th><th>View</th></tr></thead><tfoot><tr><th scope='row'>Total</th><td colspan='7'>4 buildings</td></tr></tfoot><tbody>");
   while(rs.next())
      {String tablename=rs.getString(2);
          out.println("<tr><td>"+count+"</td><td style='max-width:70px; text-align:left;'>"+rs.getString(1)+"</td><td><input type='radio' id='radio"+count+"' name='post' value='"+rs.getString(2)+"'><label for ='radio"+count+"'>"+"View"+"</label></input></td></tr>");
          count++;
      }
   out.println("</body></table></center>");
   out.println("<input type='submit' style='display:block; border-radius:10px; position:absolute; top:500px; left:600px; background:#C30; border:5px; width:150px; color:white; font-size:23px; height:50px;' value='Submit'></form>");
       }
    catch(Exception e)
                    {out.println("There has been an exception. Call/mail me asap!");
                     System.out.println(e);
                      out.println(e);
                   }
%>

    <body>
        <h1 style="position:relative; left:600px; top:0px;">Hello <% String user=(String)session.getAttribute("user");out.println(user);%> !</h1>
    </body>
</html>