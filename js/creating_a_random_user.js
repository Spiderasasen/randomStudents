function callAPI(numUsers) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", processUserResults);
    xhr.open("GET", "https://randomuser.me/api?results=" + numUsers + "&nat=us");
    xhr.responseType = "json";
    console.log("Before Call to API");
    xhr.send();
    console.log("After Call to API");
}

function callAPIWithFetch(numUsers) {
    const responsePromise = fetch("https://randomuser.me/api?results=" + numUsers + "&nat=us");
    console.log(responsePromise);
}

function processUserResults(event) {
    console.log("Received Results From API");
    let apiResult = event.target;
    if (apiResult.status === 200) {
        const apiUserList = apiResult.response.results;
        const mappedStudentList = apiUserList.map(apiStudent => {
            return mapAPIUserToOutUSer(apiStudent);
        });
        addStudents(mappedStudentList);

    } else {
        console.log("Response Status=" + apiResult.status + " - " + apiResult.statusText);
    }

}

function mapAPIUserToOutUSer(apiUser) {
    const newStudent = {};
    newStudent.userFullName = apiUser.name.first + " " + apiUser.name.last;
    newStudent.streetAddress = apiUser.location.street.number + " " + apiUser.location.street.name +
    " " + apiUser.location.city + " " + apiUser.location.state + " " + apiUser.location.postcode;
    newStudent.userEmail = apiUser.email;
    newStudent.cell = apiUser.cell;
    newStudent.bioPic = apiUser.picture.large;
    newStudent.nat = apiUser.picture.nat;
    return newStudent;
}