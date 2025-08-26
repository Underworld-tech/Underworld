// Gift Hub
const gifts = ["100 Coins", "1 Rare Item", "50 Gems", "Special Potion"];
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", () => {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    giftMessage.textContent = `You received: ${randomGift}!`;
});

// Characters with religion
let characters = [
    { name: "Caroline", trait: "Brave", religion: "Christian" },
    { name: "Hardy", trait: "Smart", religion: "Muslim" },
    { name: "Jonathan", trait: "Kind", religion: "Christian" },
    { name: "Syila", trait: "Loyal", religion: "Muslim" },
    { name: "Ulil", trait: "Self-confidence", religion: "Muslim" },
    { name: "Yeremia", trait: "Friendly", religion: "Christian" }
];

const characterList = document.getElementById("characterList");

// Function to display characters
function displayCharacters() {
    characterList.innerHTML = "";
    characters.forEach((char, index) => {
        const li = document.createElement("li");
        li.textContent = `${char.name} - ${char.trait} - ${char.religion}`;
        characterList.appendChild(li);
    });
}

// Initial display
displayCharacters();

// Add new character
const newCharName = document.getElementById("newCharName");
const newCharTrait = document.getElementById("newCharTrait");
const newCharReligion = document.getElementById("newCharReligion");
const addCharButton = document.getElementById("addCharButton");

addCharButton.addEventListener("click", () => {
    if(newCharName.value && newCharTrait.value && newCharReligion.value) {
        characters.push({ 
            name: newCharName.value, 
            trait: newCharTrait.value,
            religion: newCharReligion.value
        });
        displayCharacters();
        newCharName.value = "";
        newCharTrait.value = "";
        newCharReligion.value = "";
    }
});

// Change trait of first character
const changeTraitInput = document.getElementById("changeTraitInput");
const changeTraitButton = document.getElementById("changeTraitButton");

changeTraitButton.addEventListener("click", () => {
    if(changeTraitInput.value) {
        characters[0].trait = changeTraitInput.value;
        displayCharacters();
        changeTraitInput.value = "";
    }
});
