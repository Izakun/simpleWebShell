var path = "";

function getCmd(){
    let inputCmd = document.getElementById('cmd');
    let cmd = inputCmd.value
    let response = document.getElementById("response");

    inputCmd.value = "";
    if(cmd != "clear"){
        jQuery.ajax({
            type: "POST",
            url: 'shell.php',
            dataType: "json",
            data: {cmd: cmd, path: path},
            success: function (json) {    
                let currentPath = path;
                if(currentPath == ""){
                    currentPath = json["path"];
                }
                response.innerHTML += "<div class='prompt'>" + currentPath + "$ <label class='text'>" + cmd + "</label></div>";
    
                if(json["cmdResult"] !== null && json["cmdResult"] !== "null") {
                    for (let line of json["cmdResult"].substring(1, json["cmdResult"].length - 1).split('\\n')) {
                        if(line !== "") {
                            response.innerHTML += (line + '<br>');
                        }
                    }
                }
                path = json["path"];
                document.getElementById('cmdLabel').innerHTML = path + "$";
            }, complete: function(){
                response.scrollTop = response.scrollHeight;
            }
        });
    } else {
        response.innerHTML = "";
    }
}