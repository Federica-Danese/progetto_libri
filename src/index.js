
async function search() {
    const query = document.querySelector('.search-input').value;
    if (query) {
        try {
            const response = await axios.get('https://openlibrary.org/subjects/' + query + '.json');
            console.log(response.data.works);
            for (let work of response.data.works) {
                const node = document.createElement("p");
                const textnode = document.createTextNode(work.title);
                node.appendChild(textnode);
                document.getElementById("list").appendChild(node);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Please enter a search query.');
    }
}