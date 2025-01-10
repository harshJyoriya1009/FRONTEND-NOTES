function createCard(title, cName, views, monthSold, duration, thumbnail) {
    let viewNumbers;
    if (views < 1000000) {
        viewNumbers = views / 1000 + "k";
    }
    else if (views > 1000000) {
        viewNumbers = views / 1000000 + "M";
    }
    else {
        viewNumbers = views / 1000 + "k";
    }
    let html = ` <div class="card">
            <div class="image">
                <img  src="${thumbnail}">
                     <div class="capsule">${duration} </div>
                    </div>
                    <div class="text">
                    <h1>${title}</h1>
                    <P>${cName} . ${viewNumbers} views .${monthSold} months ago</P>
                    </div>
                    </div>`
                    
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


// src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw">

createCard("Introduction to Web Development | Yo Yo Honey Singer", "Harsh Gamer", 727000, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw ")