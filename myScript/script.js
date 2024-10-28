// 奴才發洩區
$("#messageForm").on("submit", function(e){
    e.preventDefault();
    
    const name = $("#name").val();
    const message = $("#message").val();

    if(name == "" && message ==""){
        return alert("您是按到了還是來亂的？");
    }else if(message == ""){
        return alert("想抱怨怎麼會沒有內容呢？");        
    }else if(name == ""){
        return alert("總該給個名子吧");     
    }

    const messageHtml = `
    <div class="alert alert-secondary" role="alert">
        <strong>${name} 說==> </strong>${message}
    </div>`;
    console.log(name);
    console.log(message);
    console.log(messageHtml);


    $("#messageContainer").append(messageHtml);
    $("#messageForm")[0].reset();
});