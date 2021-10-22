const imgPlaygroundRandomizer = (imgPathsArray, outputCount=25) => {
  const resultImages = new Set();

  do {
    const rIndex = Math.floor(Math.random() * imgPathsArray.length);
    resultImages.add(imgPathsArray[rIndex]);
  } while (resultImages.size !== outputCount);

  return Array.from(resultImages);
}
