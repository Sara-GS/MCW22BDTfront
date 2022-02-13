class RandomAvatar {
    constructor(options = {}) {
      this.options = { container: "#container-1" };
      Object.assign(this.options, options);
          this.apiUrl = "https://avatars.dicebear.com/v2/:sprites/:seed.svg";
  
      this.elements = {
        container: document.querySelector(this.options.container)
      };
      this.init();
    }
    init() {
      this.elements.container.innerHTML = this.initialHtml();
      this.elements.btn = this.elements.container.querySelector(".btn-avatar");
      this.elements.avatars = this.elements.container.querySelector(".avatars");
      this.avatarIntoHtml();
      this.btnEventListener();
    }
  
    initialHtml() {
      return `
        <button class="btn btn-primary btn-avatar mb-4">Generate Avatar</button>
        <div class="avatars"></div>`;
    }
    btnEventListener() {
      this.elements.btn.addEventListener("click", e => {
        this.avatarIntoHtml();
      });
    }
    getAvatars() {
      const url = this.getRandomAvatarLink();
      console.log(url);
      return `
        <img src="${url}" title='${this.getRandomName(url)}' alt="random avatar" 
        width="200px" style="border:grey 1px solid; padding:10px" class="mt-4 mr-4">`;
    }
    avatarIntoHtml() {
      this.elements.avatars.innerHTML =
        this.getAvatars() //+ this.getAvatars() + this.getAvatars();
    }
    getRandomAvatarLink() {
      const uuid = Math.random();
      const sprites = ["male", "female", "identicon"];
      const randomIndex = Math.floor(Math.random() * Math.floor(sprites.length));
      const randomSprite = sprites[randomIndex];
      return this.apiUrl.replace(":sprites", randomSprite).replace(":seed", uuid);
    }
    randomIndex(length){
      Math.floor(Math.random() * Math.floor(length))    
    }
    getRandomName(url) {
      const girls = [
        "Elisabeth", 
        "Clara", 
        "Elise", 
        "Angelina", 
        "Leena"
      ];
      const boys = [
        "Victor",
        "Vincent",
        "Rene",
        "Johnny",
        "Rainer",
        "Bleda",
        "Ryan",
        "Georg",
        "Leon",
        "Alhasan",
        "Maximilian"
      ];
      if (url.includes("female")) {
        const randomIndex = Math.floor(Math.random() * Math.floor(girls.length));
        return girls[randomIndex];
      } else if (url.includes("male")) {
        const randomIndex = Math.floor(Math.random() * Math.floor(boys.length));
        return boys[randomIndex];
      } else {
        return "Dominik";
      }
    }
  }
  
  const initializing = new RandomAvatar()