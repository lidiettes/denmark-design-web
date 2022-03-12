function validate() {
    if (document.myForm.name.value === "") {
        alert("Introduce a name");
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.email.value === "") {
        alert("Introduce a valid email");
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.description.value === "") {
        alert("Tell us what you need");
        document.myForm.description.focus();
        return false;
    }
    return (alert("Thank you"));
}


