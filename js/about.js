/*Author ailsapm NCI 2024*/
function verifyAge() {
    if (confirm("You must be 18 or over to view our Drinks Menu.")) {
        // Redirect to the drinks menu
        window.location.replace("drinks.html");
    } else {
        // show a message if the customer clicks cancel
        alert("Oops you must be at least 18 to drink!\nCheck out our delicious Food Menu instead.");
    }
}

/*Not going to lie, this took me FOREVER, I tried a gajillion different ways
using return true to allow the link to be followed and return false to prevent it,
but somehow it kept following the link and I was going round in circles until we
were talking about it in class and I realised I could change the way I was thinking 
and use a redirect on confirmation instead of actually having them click on the link 
and try to stop them from following it if the age confirmation failed.

I'm ridiculously happy I got this to work.*/

