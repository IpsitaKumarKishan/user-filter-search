let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://plus.unsplash.com/premium_photo-1715876268461-7d85ee7b1452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
  {
    name: "lisa jackson",
    pic: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
  {
    name: "sumit sharma",
    pic: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

function showUsers(arr){
    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("div");
        h3.textContent = user.name;

        const para = document.createElement("div");
        para.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);

    });
}

showUsers(users);

let inp = document.querySelector(".inp");

let debounce;

inp.addEventListener("input", function () {
  
    clearTimeout(debounce); // clear previous timer

    debounce = setTimeout(() => {
        let inputvalue = inp.value.trim().toLowerCase();

        let newUsers = users.filter((user) => {
            return user.name.toLowerCase().startsWith(inputvalue);
            
        });

        document.querySelector(".cards").innerHTML = "";

        if (inputvalue === "") {
            showUsers(users);
        } else if (newUsers.length === 0) {
            document.querySelector(".cards").innerHTML = "<p>No users found.</p>";
        } else {
            showUsers(newUsers);
        }
    }, 300); // delay in milliseconds
});