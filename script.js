$(document).ready(function () {
    $("#btnSearch").on("click",function (e) {
      e.preventDefault();
     // console.log($("#grpSearch").val());
  
      getAPI($("#grpSearch").val());
  
    });
  
  
    function getAPI(grpname="") {
     // console.log("sending psi data request");
      var params= {
        url: `https://raw.githubusercontent.com/yoonpatrick3/kpop-api-web/master/kpop_data.json?grp_name=${grpname}`,
        method: "GET",
        timeout: 0,
      };
  
      $.ajax(params).done (function (data) {
        var content = "";
        //convert to proper object
        let response = JSON.parse(data);
  
        //using jquery $.each
        $.each(response, function (key, obj) {
          $.each(obj, function(k,value){
            //append content at the same time 
            //template literal does not allow += 
            content = `${content} ${k}: ${value}`;
          })
        });
        //dump to html
        $("#name").html(content);
  
        let tableContent = "";
        //using normal loop 
       
        for(var i = 0; i< response.length;i++){
           tableContent = `${tableContent}
           Stage Name: ${response[i]["Stage Name"]}
           Full Name: ${response[i]["Full Name"]}
           Korean Name: ${response[i]["Korean Name"]}
           Korean Stage Name: ${response[i]["KoreanStage Name"]}
           DOB: ${response[i]["DOB"]}
           Group: ${response[i]["Group"]}
           Country: ${response[i]["Country"]}
           Second Country: ${response[i]["Second Country"]}
           Height: ${response[i]["Height"]}
           Weight: ${response[i]["Weight"]}
           Birthplace: ${response[i]["Birthplace"]}
           Other Group: ${response[i]["Other Group"]}
           Former Group: ${response[i]["Former Group"]}
           Gender: ${response[i]["Gender"]}
           Position: ${response[i]["Position"]}
           Instagram: ${response[i]["Instagram"]}
           Twitter: ${response[i]["Twitter"]}
           `
        }//end loop 
        //dump to console
      console.log(tableContent);
      });
    }
  });