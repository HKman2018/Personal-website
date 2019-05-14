let content = "This block of text goes on and on and does not show any sign of slowing down. Instead, it will continue to sprawl and creep down the page. It just keeps going and going and going and will start new topics without "
let contentArray = content.split('.')
contentArray.pop()

for (let i = 0; i < contentArray.length; i++) {
  console.log(contentArray[i].trim() + '.')
}