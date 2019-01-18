$(document).ready(function(){
           
            // on click of submit for contact form
            $('#submit-contact').on('click', function(event){
                // prevent refresh
                event.preventDefault();
                // check validity of the form
                // make sure all required fields have value
                
                var name = $('#user-name').val();
                var email = $('#user-email').val();
                var message = $('#user-message').val();

                // create an object that maps to google sheet fields
                var userData = {
                   'entry.1638477740': name,
                   'entry.1724319885': email,
                   'entry.1340064703': message
                }

                // before making call to send data make sure all required forms are filled in
                
                
                // send data to google sheet
                sendContactPayload(userData);

            });

            // post user data to google sheet
            function sendContactPayload(payload){
                var googleSheet = 'https://docs.google.com/forms/d/e/1FAIpQLSeC7Z3Fj_LmvSM6D6DKlTFKqrVeMm34TUjE1q5RgajXR_qcnA/formResponse';
                
                $.post( "googleSheet", payload,  function( response) {
                    console.log(response);
                });
            }
        });