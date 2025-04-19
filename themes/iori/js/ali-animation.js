//Text amination 1
document.addEventListener("DOMContentLoaded", function(event) {
    animation_text_1(".text-anim");
});

function animation_text_1(element) {
    if ($(".text-anim")[0]) {
        var newText = "";
        var words = document.querySelector(element).innerText.split(' ');

        for (i = 0; i < words.length; i++) {
            newText += "<div>";
            if (words[i] === "") { // Handle multiple consecutive spaces
                newText += "&nbsp;";
            } else {
                newText += words[i];
            }
            newText += "</div>";
        }

        document.querySelector(element).innerHTML = newText;
        var targetsDiv = document.querySelectorAll(element + " div");
        TweenMax.staggerFromTo(targetsDiv, 2, {
            opacity: 0,
            y: 90,
            ease: Elastic.easeOut.config(1.2, 0.5)
        }, {
            opacity: 1,
            y: 0,
            ease: Elastic.easeOut.config(1.2, 0.5)
        }, 0.03);
    }
}

//Image amination 1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9
};

let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
        let container = entry.target;
        let img = entry.target.querySelector("img");
        const easeInOut = "power3.out";
        const revealAnim = gsap.timeline({
            ease: easeInOut
        });

        if (entry.isIntersecting) {
            revealAnim.set(container, {
                visibility: "visible"
            });
            revealAnim.fromTo(
                container, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: easeInOut
                }
            );
            revealAnim.from(img, 4, {
                scale: 1.4,
                ease: easeInOut,
                delay: -1
            });
            self.unobserve(entry.target);
        }
    });
};

let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".img-reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
});