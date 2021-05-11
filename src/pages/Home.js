import getData from '@utils/getData'

const Home = async () => {
    const characters = await getData()
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}"></img>
                        <h2>${character.name}</>
                    </a>
                </article>
            `).join('')}
        </div>
    `
    return view
}

export default Home