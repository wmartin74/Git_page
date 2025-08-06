function pullfdata() {
    try {
        const submittedName = document.getElementById("name").value;
        return submittedName;
    } catch (error) {
        console.error("Error parsing input:", error);
        window.alert("Please enter a valid name.(first and last)");
        return null;
    }
}

function runscript(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let submittedname = pullfdata();
    console.log(submittedname);
    localStorage.setItem("submission", JSON.stringify(submittedname));
    console.log("saved submission");
    window.location.href = "result.html";
    }

document.getElementById("testForm").addEventListener("Submit", runscript);
