let imageIndex = 0;
let imageContainer = Array.from(
  document.getElementsByClassName("imageContainer")
);
let regenerate = document.getElementById("regenerate");
let loadMore = document.getElementById("loadMore");
let originalImages = document.getElementById("originalImages");

imageContainer.forEach((element) => {
  let rn = Math.floor(Math.random() * 1000 + 1);
  console.log(rn);
  element.getElementsByTagName(
    "img"
  )[0].src = `https://picsum.photos/id/${rn}/400/260`;
  imageIndex++;
});

loadMore.addEventListener("click", () => {
  createNewImages();
});

function createNewImages() {
  for (let index = 0; index < 9; index++) {
    let rn = Math.floor(Math.random() * 1000 + 1);
    const newImgElement = document.createElement("div");
    newImgElement.innerHTML = `<div
          class="imageContainer p-1 mx-2 items-center justify-center flex shadow-md shadow-zinc-600 w-96 h-64 bg-zinc-800"
        >
          <img src="https://picsum.photos/id/${rn}/400/260" alt="" />
        </div>`;
    originalImages.appendChild(newImgElement);
  }
}

function remove() {
  document.getElementById("warning").remove();
}

function whoIsUser1() {
  document.body.innerHTML = `<div class="items-center justify-center text-2xl p-10">
    <span class="RIG text-5xl">Congratulations</span> <br />
    you've found User1 <br />
    It's none other than <span class="RIG">@Anoop2005</span>. <br /><img
      class="h-96 mt-20"
      src="https://media1.tenor.com/m/ws3kwe64uTAAAAAd/watson-no-shit-sherlock.gif"
      alt=""
    /> <br>
          <a href="index.html">			<button class="border-none border hover:scale-95 duration-300 relative group cursor-pointer text-black  overflow-hidden h-16 w-64 rounded-md bg-emerald-200 p-2 flex justify-center items-center font-extrabold">

              <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-emerald-900"></div>
              <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-emerald-800"></div>
              <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-emerald-700"></div>
              <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-emerald-600"></div>
              <p class="z-10">Go Back</p>
          </button></a>

          
  </div>`;
}
