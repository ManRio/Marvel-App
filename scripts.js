const marvel = {
    render: () => {
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a14bc79cc7a6cab8660f85adae2d308d&hash=206bbd81a93f633fea3b4a84fd8e39e6`;
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(url)
            .then(res => res.json())
            .then((json) => {
                for (const character of json.data.results) {
                    contentHTML += `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top" alt="${character.name}">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.description}</p>
                                <a href="${character.urls[0].url}" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                    `;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();