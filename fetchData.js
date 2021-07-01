const api_endpoint = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);

    showData(data);
}

getData(api_endpoint);

function showData(data) {
    let table = 
        `<tr>
            <th rowspan="1" colspan="1"> ID </th>
            <th rowspan="1" colspan="1"> Name </th>
            <th rowspan="1" colspan="1"> Email </th>
            <th rowspan="1" colspan="1"> Phone </th>
            <th rowspan="1" colspan="1"> Website </th>
            <th rowspan="1" colspan="1"> Comapny </th>
        </tr>`;

        for (let x of data) {
            table += `<tr>
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td>${x.email}</td>
                <td>${x.phone}</td>
                <td>${x.website}</td>
                <td>${x.company.name + x.company.catchPhrase + x.company.bs}</td>
            </tr>`;
        }

        document.getElementById("data-displayer").innerHTML = table
}