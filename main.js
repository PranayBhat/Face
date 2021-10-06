Webcam.attach("#Web_Cam");
Web_Cam = document.getElementById("Web_Cam");
Webcam.set({ width: 350, height: 300, image_format: "png", png_quality: 90 });
function Cap() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id="selfie_image" src="' + data_uri + '">';
  });
}
classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/2rE6oiQiv/model.json",
  modelLoaded
);
function identify() {
  img = document.getElementById("selfie_image");
  classifier.classify(img, gotResult);
}
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered  by
   console.log(results);
    document.getElementById("People").innerHTML = results[0].label;
    document.getElementById("Accuracy").innerHTML =
      results[0].confidence.toFixed(3);
  }
}
function modelLoaded() { console.log('Model Loaded!'); }