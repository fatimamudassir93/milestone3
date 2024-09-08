var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var workExperienceElement = document.getElementById('workExperience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && educationElement && workExperienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var workExperience = workExperienceElement.value;
        var skills = skillsElement.value;
        // create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name: </strong> ".concat(name_1, " </p>\n<p> <strong>Email: </strong> ").concat(email, " </p>\n<p><strong>Phone Number: </strong> ").concat(phone, " </p>\n\n<h3> Education </h3>\n<p>").concat(education, "</p>\n\n<h4>Work Experience </h4>\n<p>").concat(workExperience, "</p>\n\n<h5> Skills </h5>\n<p>").concat(skills, "</p>\n\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
