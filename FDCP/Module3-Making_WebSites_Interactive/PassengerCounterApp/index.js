// 1. Loop through the myEmojis array and log each of them out to the console

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById('emojiContainer')
const emojiInput = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

function renderEmojis() {
    emojiContainer.innerHTML = ""
for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}
}

renderEmojis()

pushBtn.addEventListener('click', function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener('click', function () {    
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

shiftBtn.addEventListener('click', function () {    
        myEmojis.shift()
        renderEmojis()
})

popBtn.addEventListener('click', function () {    
    myEmojis.pop()
    renderEmojis()
})

