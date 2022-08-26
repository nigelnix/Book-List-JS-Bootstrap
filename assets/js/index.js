const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

function reverseName(author){
  return author.split(" ").reverse().join(", ")
}
// reverseName(books.author)

books.sort((a,b )=> {
  return reverseName(a.author).localeCompare(reverseName(b.author))
})
//sorts alphabetically

let grabUl = document.querySelector(".book-list")
grabUl.classList.add(".book-list")

books.forEach(ele => {

let bookItem = document.createElement("div")
bookItem.classList.add("card", "book")

let cardImg = document.createElement("img")
cardImg.classList.add("card-img-top", "book-cover")
cardImg.src = ele.img

let cardBody = document.createElement("div")
cardBody.classList.add("card-body")

let h5 = document.createElement("h5")
h5.classList.add("card-title")
h5.textContent = ele.title

let p = document.createElement("p")
p.classList.add("card-text", "text-secondary")
p.textContent = reverseName(ele.author)

let cardFooter = document.createElement("div")
cardFooter.classList.add("card-body-two")

let link = document.createElement("div")

let read = document.createElement("span")
read.classList.add("badge", "bg-secondary", "status")
link.classList.add("card-link")
read.textContent = "To Read"
if(ele.alreadyRead){
  read.textContent = "Read"
  read.classList.replace("bg-secondary", "bg-success")
}
cardBody.append(h5,p)
link.append(read)
cardFooter.append(link)
bookItem.append(cardImg,cardBody,cardFooter)
grabUl.append(bookItem)
});