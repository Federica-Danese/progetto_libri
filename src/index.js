document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', search);
    document.querySelector('.search-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

async function search() {
    const query = document.querySelector('.search-input').value;
    if (query) {
        try {
            const response = await axios.get('https://openlibrary.org/subjects/' + query + '.json');
            console.log(response.data.works);

            const list = document.getElementById('list');
            list.innerHTML = '';

            for (let work of response.data.works) {
                const node = document.createElement("p");
                node.classList.add('result-item');
                const textnode = document.createTextNode(work.title);
                node.appendChild(textnode);
                list.appendChild(node);                  
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Please enter a search query.');
    }
}