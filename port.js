function sendMail(){
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    };
    const serviceId='service_mlj0qfk';
    const templateId='template_2pbfz4b';
    emailjs.send(serviceId,templateId,params).then(
        res=>{
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('message').value="";
            console.log(res);
            alert("your message sended succesfuly");
        }
    )
    .catch(err=> console.log(err));
}