// 1. Loop through the myEmojis array and log each of them out to the console

const myEmojis = ["👨‍💻", "⛷", "🍲"]

const emojiContainer = document.getElementById('emojiContainer')


for (let i = 0; i < myEmojis.length; i++) {
    // emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

const pushBtn = document.getElementById('push-btn')

pushBtn.addEventListener('click', function () {
    const emojiInput = document.getElementById('emoji-input')
    
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        console.log(myEmojis)}
})