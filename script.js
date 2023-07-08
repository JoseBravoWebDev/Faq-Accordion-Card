"use strict";

const faqSubtitle = document.querySelectorAll(".faq-subtitle");

faqSubtitle.forEach((subtitleToggle)=>{
	subtitleToggle.addEventListener("click", ()=>{
		if (!subtitleToggle.hasAttribute("open")) {
			subtitleToggle.setAttribute("open","");
		} else {
			subtitleToggle.removeAttribute("open");
		}
	})
})