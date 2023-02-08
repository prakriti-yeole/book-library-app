let url1 = "https://openlibrary.org/search.json?q=";
let subtn = document.getElementById("sub-btn");
let table = document.getElementById("tab");



// showing Loading


subtn.addEventListener("click", () => {

    let subin = document.getElementById("sub-search").value;

    fetch(url1 + subin)
        .then((response) => response.json()) //convert response in js
        .then((data) => {

            let mydata = data.docs;
            console.log(mydata);

            table.innerHTML = `
            <tr>
                <th>Title</th>
                <th>author</th>
                <th>latest publish year</th>
                <th>first publish year</th>
            </tr>

            `;


            mydata.forEach(async function (obj, index) {
                console.log(index);

                let row = "";
                if (index < 10) {


                    row = table.insertRow(index + 1);
                    let data1 = row.insertCell(0);

                    if (obj.subtitle != undefined)
                        data1.innerHTML = `${obj.title + " " + obj.subtitle}`;
                    else data1.innerHTML = `${obj.title}`;
                    let data2 = row.insertCell(1);
                    data2.innerHTML = `${obj.author_name[0]}`;

                    let data3 = row.insertCell(2);
                    data3.innerHTML = `${obj.publish_year[0]}`;

                    let data4 = row.insertCell(3);
                    data4.innerHTML = `${obj.first_publish_year}`;

                }
            });


        })


})



function myfunction(inputs) {
    // let subin = document.getElementById("sub-search").value;
    table.innerHTML = "";
    fetch(url1 + inputs)
        .then((response) => response.json()) //convert response in js
        .then((data) => {

            let mydata = data.docs;
            console.log(mydata);

            table.innerHTML = `
            <tr>
                <th>Title</th>
                <th>author</th>
                <th>latest publish year</th>
                <th>first publish year</th>
            </tr>
    
            `;


            mydata.forEach(async function (obj, index) {
                console.log(index);



                let row = "";
                if (index < 10) {
                    row = table.insertRow(index + 1);
                    let data1 = row.insertCell(0);

                    if (obj.subtitle != undefined)
                        data1.innerHTML = `${obj.title + " " + obj.subtitle}`;
                    else data1.innerHTML = `${obj.title}`;
                    let data2 = row.insertCell(1);
                    data2.innerHTML = `${obj.author_name[0]}`;

                    let data3 = row.insertCell(2);
                    data3.innerHTML = `${obj.publish_year[0]}`;

                    let data4 = row.insertCell(3);
                    data4.innerHTML = `${obj.first_publish_year}`;
                }

            });


        })
}