
function start() {
  let quotes_api = document.querySelectorAll(".quotes-api");
  let copyquote = document.createElement("input");
  let errmsg = document.querySelector("#errmsg");
  let quotesData = fetch("https://type.fit/api/quotes");
  quotesData
    .then((quoteslist) => {
      return quoteslist.json();
    })
    .then((getData) => {
      const quotesDataStrucrure = [
        Math.floor(Math.random() * (160 - 1 + 1) + 1),
        Math.floor(Math.random() * (320 - 161 + 1) + 161),
        Math.floor(Math.random() * (480 - 321 + 1) + 321),
        Math.floor(Math.random() * (640 - 481 + 1) + 481),
        Math.floor(Math.random() * (800 - 641 + 1) + 641),
        Math.floor(Math.random() * (960 - 801 + 1) + 801),
        Math.floor(Math.random() * (1120 - 961 + 1) + 961),
        Math.floor(Math.random() * (1280 - 1120 + 1) + 1120),
        Math.floor(Math.random() * (1440 - 1281 + 1) + 1281),
        Math.floor(Math.random() * (1600 - 1440 + 1) + 1440),
      ];
      console.log(getData)
      for (let i = 0; i < quotes_api.length; i++) {
        quotes_api[i].innerHTML = `${getData[quotesDataStrucrure[i]].text}
      
        ${
          getData[quotesDataStrucrure[i]].author === null
            ? `
            <p class="text-red-400 font-semibold text-end text-sm">
              *_* author not found
            <p>
        `
            : `
            <p class="text-white font-semibold text-end text-sm">"${
              getData[quotesDataStrucrure[i]].author
            }"<p>
        `
        }
       `;
       quotes_api[i].addEventListener("click" , copy);
       function copy() {
        copyquote.setAttribute("value" , getData[quotesDataStrucrure[i]].text);
        copyquote.style.opacity = "0";
        copyquote.style.position = "absolute";
        copyquote.style.left = "-10rem";
        copyquote.style.top = "0";
        document.body.append(copyquote);
        copyquote.select();
        document.execCommand("copy");
        
        errmsg.style.left = "1.5rem";
        setTimeout(() => {
          errmsg.style.left = "-14rem";
        } , 2000)
       }
      }
    })
    .catch((err) => {
      for (let i = 0; i <  quotes_api.length; i++) {
        quotes_api[i].innerHTML = `Oops :( ${err.message}! pull it again`;
      }
    });
}
start();
let quotes_api = document.querySelectorAll(".quotes-api");
let refetch_btn = document.querySelector("#btn_fetch");
refetch_btn.addEventListener("click", () => {
  for (let i = 0; i < quotes_api.length; i++) {
    quotes_api[i].innerHTML = `
            <lord-icon
                src="https://cdn.lordicon.com/ymrqtsej.json"
                trigger="loop"
                delay="1000"
                style="width:50px;height:50px">
                </lord-icon>
            </div>
    `;

  }
  start();
});
const url = document.querySelector("#url");
url.onclick = () => {
  document.location = document.baseURI;
}
