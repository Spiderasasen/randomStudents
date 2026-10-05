const userList = [
    {
        "userFullName":"Zack Alvarez",
        "streetAddress":"1822 E Pecan St Cincinnati, Virginia 25734",
        "email": "zack.alvarez@example.com",
        "dateOfBirth": "1971-08-18T03:27:07.010Z",
        "cell": "(766) 498-1282",
        "bioPic": "https://randomuser.me/api/portraits/men/81.jpg",
        "nat": "US"
    },
    {
        "userFullName":"Celina Beck",
        "streetAddress":"8889 Elgin St Gilbert,Maine 79219",
        "email": "celina.beck@example.com",
        "dateOfBirth": "1989-10-03T22:24:58.981Z",
        "cell": "(667) 399-6249",
        "bioPic": "https://randomuser.me/api/portraits/women/55.jpg",
        "nat": "US"
    },
    {
        "userFullName": "Alicia Richardson",
        "streetAddress": " 6876 W 6th St Jackson, South Carolina 55923",
        "email": "alicia.richardson@example.com",
        "dateOfBirth": "1959-07-01T23:31:08.338Z",
        "cell": "(620) 447-6831",
        "bioPic": "https://randomuser.me/api/portraits/women/20.jpg",
        "nat": "US"
    },
    {
        "userFullName": "Terry Peters",
        "streetAddress":"2267 Karen Dr Visalia, Nevada 36250",
        "email": "terry.peters@example.com",
        "dateOfBirth": "1947-04-28T05:04:03.024Z",
        "cell": "(597) 712-2260",
        "bioPic": "https://randomuser.me/api/portraits/women/5.jpg",
        "nat": "US"
    }
];

function addStudents(){
    const container = document.getElementById("student_container");

    for(let student of userList){
        const entry = `
            <div class="studentEntry">
                <div class="studentPic">
                    <img src="${student.bioPic}" alt="image of ${student.userFullName}" height="128" width="128">
                </div>
                <div class="studentInfo">
                    <h2>${student.userFullName}</h2>
                    <h3>${student.email}</h3>
                    <h3>${student.cell}</h3>
                </div>
            </div>
        `
        console.log(entry);
        container.innerHTML += entry;
    }
}