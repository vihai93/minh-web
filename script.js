
        function functionToCloseMenu() {
            const selector = document.querySelector(".nav-container");
            selector.style.display = "none";
        }
        function functionToOpenMenu() {
            const selector= document.querySelector(".nav-container");
            selector.style.display = "flex";
        }
        function more() {
            alert("Sorry, We are maintaining this function!");
        }
        function functionToDisplayLayer() {
            const layer = document.querySelector(".layer-on-image");
            layer.style.display = "block";
        }
        function functionToHiddenLayer() {
            const layer = document.querySelector(".layer-on-image");
            layer.style.display = "none";
        }
        function goToGallery(){
            location.assign("gallery.html");
        }
        function goToHome(){
            location.assign("index.html");
        }
        function goToAboutUs(){
            location.assign("about-us.html");
        }
        function goToOurService(){
            location.assign("service-process.html");
        }
        function goToFb(){
            window.location.href="https://www.facebook.com/10studiovn";
        }
        function goToDetail(){
            location.assign("gallery-detail.html");
        }
