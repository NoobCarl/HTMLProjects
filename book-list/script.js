let books = [];
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}   
let list = document.getElementById("list-books");
document.getElementById("add").onclick = function(){
    list.style.display = "none";
    document.getElementById("add-screen").style.display = "inline";
};
function create_book(title, author, pages, read){
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(title));
    li.appendChild(h2);
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(author));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode(pages));
    p.appendChild(document.createElement("br"));
    if(read == 1) p.appendChild(document.createTextNode("Read"));
    else p.appendChild(document.createTextNode("Not Read"));
    li.appendChild(p);
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove"));
    li.appendChild(btn);
    return li;
}
document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    books.push(new book(title, author, pages, read));
    list.appendChild(create_book(title, author, pages, read));
    list.style.display = "flex";
    document.getElementById("add-screen").style.display = "none";
})
