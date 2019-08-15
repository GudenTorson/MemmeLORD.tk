
var agreeTerms = confirm("Do you agree to the Terms of Service? \n Click ’Cancel’ to read them.")

if (agreeTerms == false) {
  document.location.assign("access.html")
}