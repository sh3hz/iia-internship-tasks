function validate() {
      
	if( document.registration.username.value == "" ) {
	   alert( "Please provide your name!\nMust only contain letters and numbers (no special characters)" );
	   document.registration.username.focus() ;
	   return false;
	}
	if( document.registration.zipcode.value == "" || isNaN( document.registration.zipcode.value ) ||
	   document.registration.zipcode.value.length != 6 ) {
	   
	   alert( "Please provide a zipcode in the format 123XXX." );
	   document.registration.zipcode.focus() ;
	   return false;
	}
	if( document.registration.email.value == "" ) {
	   alert( "Please provide your Email!" );
	   document.registration.email.focus() ;
	   return false;
	}
	if( document.registration.email_repeat.value == "" || document.registration.email_repeat.value != document.registration.email.value) {
		alert( "Please confirm your Email!" );
		document.registration.email_repeat.focus() ;
		return false;
	}
	if( document.registration.password.value == "" ) {
		alert( "Please enter password!" );
		document.registration.password.focus() ;
		return false;
	}
	if( document.registration.password_repeat.value == "" || document.registration.password_repeat.value!=document.registration.password.value) {
		alert( "Please confirm your password!" );
		document.registration.password_repeat.focus() ;
		return false;
	}
	return( true );
 }
