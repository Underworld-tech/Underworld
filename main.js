const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#f0f0f0',
    parent: 'gameContainer',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

let characters = [];
let gifts = [];

function preload() {
    this.load.json('gameData', 'data.json');
}

function create() {
    const data = this.cache.json.get('gameData');
    characters = data.characters;
    gifts = data.gifts;

    displayCharacters();

    // Tombol Claim Gift
    const claimGiftBtn = document.getElementById('claimGiftButton');
    const giftMessage = document.getElementById('giftMessage');

    claimGiftBtn.addEventListener('click', () => {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        giftMessage.textContent = `You received: ${randomGift}!`;
    });

    // Tombol tambah karakter
    const addCharBtn = document.getElementById('addCharButton');
    addCharBtn.addEventListener('click', () => {
        const name = document.getElementById('newCharName').value;
        const trait = document.getElementById('newCharTrait').value;
        const religion = document.getElementById('newCharReligion').value;
        if(name && trait && religion) {
            characters.push({ name, trait, religion });
            displayCharacters();
            document.getElementById('newCharName').value = '';
            document.getElementById('newCharTrait').value = '';
            document.getElementById('newCharReligion').value = '';
        }
    });

    // Tombol ubah trait karakter pertama
    const changeTraitBtn = document.getElementById('changeTraitButton');
    changeTraitBtn.addEventListener('click', () => {
        const newTrait = document.getElementById('changeTraitInput').value;
        if(newTrait && characters.length > 0) {
            characters[0].trait = newTrait;
            displayCharacters();
            document.getElementById('changeTraitInput').value = '';
        }
    });
}

// Fungsi tampilkan karakter di halaman
function displayCharacters() {
    // hapus daftar lama dulu
    let existingList = document.getElementById('characterList');
    if(existingList) existingList.remove();

    const ul = document.createElement('ul');
    ul.id = 'characterList';

    characters.forEach(char => {
        const li = document.createElement('li');
        li.textContent = `${char.name} - ${char.trait} - ${char.religion}`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}
