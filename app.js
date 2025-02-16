function upDate(previewPic) {
    // Log to check the event is firing
    console.log("Mouse over event triggered");
  
    // Log details about the previewPic element
    console.log("Preview image alt: " + previewPic.alt);
    console.log("Preview image source: " + previewPic.src);
  
    // Use document.getElementById to find the element with id "image"
    var imageDiv = document.getElementById("image");
    
    // Update the text content to the alt text of the hovered image
    imageDiv.textContent = previewPic.alt;
    
    // Update the background image based on the hovered image's source
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}
  
function undo(){
    // Log to check the event is firing
    console.log("Mouse out event triggered");
    
    // Get the element with id "image"
    var imageDiv = document.getElementById("image");
    
    // Reset the text content to the original instruction
    imageDiv.textContent = "Hover over an image below to display here.";
    
    // Reset the background image to its original (none)
    imageDiv.style.backgroundImage = "url('')";
}
