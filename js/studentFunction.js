function mapStudentToHTML(student) {
    const hackHTML = `
        <div class="studentPic">
            <img src=${student.bioPic} height="128" width="128">
        </div>
        <div class="studentInfo">
            <h2>${student.userFullName}</h2>
            <h3>${student.email}</h3>
            <h3>${student.cell}</h3>
        </div>
    `
    return hackHTML;
}

function addStudent(student) {
    const studentEntryHTML = mapStudentToHTML(student);
    newStudentEntryDiv.innerHTML = studentEntryHTML;
    document.body.append(newStudentEntryDiv);
}

function addStudents(studentsList) {
    studentsList.forEach(student => {
        /*addStudent(student);*/
        document.body.append(createStudentEntryDiv(student));
    })
}

function createStudentEntryDiv(student) {
    const studentEntryDiv = createDiv("studentEntry");
    const studentPicDiv = createStudentPic(student);
    studentEntryDiv.appendChild(studentPicDiv);
    const studentInfoDiv = createStudentInfo(student);
    studentEntryDiv.append(studentInfoDiv);
    return studentEntryDiv;

}

function createDiv(className) {
    const newDiv = document.createElement("div");
    newDiv.className = className;
    return newDiv;
}

function createStudentPic(student) {
    const studentPicDiv = createDiv("studentPic");
    const studentImg = document.createElement("img");
    studentImg.setAttribute("src",student.bioPic);
    studentPicDiv.append(studentImg);
    return studentPicDiv;
}

function createStudentInfo(student) {

    /* StraightForward Approach
    const studentInfoDiv = createDiv("studentInfo");
    const name = document.createElement("h2");
    name.innerHTML = student.userFullName;
    studentInfoDiv.append(name);
    const email = document.createElement("h3");
    email.innerHTML = student.email;
    studentInfoDiv.append(email);
    const phone = document.createElement("h3");
    phone.innerHTML = student.cell;
    studentInfoDiv.append(phone);
    */

    //Cleaner Code Approach
    const studentInfoDiv = createDiv("studentInfo");
    buildSimpleTextElement("h2",student.userFullName,studentInfoDiv);
    buildSimpleTextElement("h3",student.email,studentInfoDiv);
    buildSimpleTextElement("h3",student.cell,studentInfoDiv);

    return studentInfoDiv;
}

function buildSimpleTextElement(tagName,content,parentElement) {
    const simpleTextElement = document.createElement(tagName);
    simpleTextElement.innerHTML = content;
    parentElement.appendChild(simpleTextElement);
}