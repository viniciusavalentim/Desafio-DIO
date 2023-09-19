class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const container = document.createElement("div");
        container.setAttribute("class", "container");


        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous");

        const linkTitle = document.createElement("h1");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")
        const newsImage = document.createElement("img")
        newsImage.src = "assets/asset-vader.png";
        newsImage.alt = "Imagem do papai grandao";


        cardRight.appendChild(newsImage)



        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        container.appendChild(componentRoot);

        return container;
    }
    style(){
        const style = document.createElement("style")
        style.textContent = `*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe Ui';
        }
        .container{
            display: flex;
            justify-content: center;
        }
        
        .card{
            width: 80%; 
            margin-bottom: 20px;
            box-shadow: 12px 22px 57px -6px rgba(0,0,0,0.75);
            -webkit-box-shadow: 12px 22px 57px -6px rgba(0,0,0,0.75);
            -moz-box-shadow: 12px 22px 57px -6px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        .card_left > span{
            font-weight: 500;
        }
        
        .card_left > h1{
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left > p{
            color: rgb(70,70,70);
        }`

        return style;
    }
}

customElements.define("card-news", Cardnews)