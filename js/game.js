$( ".btn" ).button();
const imgPathsArray = [];
const COUNT_IMAGES = 130;

for (let imgIdx = 0; imgIdx < COUNT_IMAGES; imgIdx++) {
  imgPathsArray.push(`/assets/img/${imgIdx + 1}.webp`);
}

const images = imgPlaygroundRandomizer(imgPathsArray)

$(".playground>img").each(function (idx) {
  this.src = images[idx]
})

const guessIdx = Math.floor(Math.random() * COUNT_IMAGES);
$("#guess-img").attr("src", images[guessIdx]);