
//get all images with data-scr attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the intersectionalObserver
const imgOptions = {
    threshold:1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
  };

 //first check to see if Intersection Observer is supported 
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer ) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    // loop through each img on check status and load if necessary
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
  });
}
else{ // just load all imges if not supported
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}