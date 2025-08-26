// Gift Hub
const gifts = ["100 Coins", "1 Rare Item", "50 Gems", "Special Potion"];
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", () => {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    giftMessage.textContent = `You received: ${randomGift}!`;
});

// Characters
let characters = [
    { name: "Caroline", trait: "Brave", religion: "Christian" },
    { name: "Hardy", trait: "Smart", religion: "Muslim" },
    { name: "Jonathan", trait: "Kind", religion: "Christian" },
    { name: "Syila", trait: "Loyal", religion: "Muslim" },
    { name: "Ulil", trait: "Self-confidence", religion: "Muslim" },
    { name: "Yeremia", trait: "Friendly", religion: "Christian" }]

const characterList = document.getElementById("characterList");

function displayCharacters() {
    characterList.innerHTML = "";
    characters.forEach((char) => {
        const li = document.createElement("li");
        li.textContent = `${char.name} - ${char.trait} - ${char.religion}`;
        characterList.appendChild(li);
    });
}

displayCharacters();
