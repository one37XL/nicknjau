function handleSubmitBuilder(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const formJSON = Object.fromEntries(data.entries());
  // eslint-disable-next-line no-undef
  formJSON.form_id =window.formId;
  fetch("https://api.clicksites.ai/app/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formJSON)
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    //redirect to another page
    //if window has redirect url
    if(window.redirect_url){
      window.location.href = window.redirect_url;
    }else{
      //stay on same page
      window.location.reload();

    }
  });

} 

