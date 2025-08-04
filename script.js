function pullfdata() {
    try {
        const submittedName = parseFloat(document.getElementById("name").value);
        }
    
        return submittedName;
    
    catch (error) {
        console.error("Error parsing input:", error);
        window.alert("Please enter a valid name.");
        return null;
    }
}