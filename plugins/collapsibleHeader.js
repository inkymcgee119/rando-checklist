export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('collapsibleHeader',
        {
            mounted(el, binding) {
                el.style.cursor = "pointer";
                
                el.addEventListener('click', (e) => {
                    // set maxheight so the transition activates
                    let currentTarget = e.currentTarget;
                    if (!currentTarget.nextElementSibling.style.maxHeight) {
                        currentTarget.nextElementSibling.style.maxHeight = `${currentTarget.nextElementSibling.scrollHeight}px`;
                    }
                    currentTarget.nextElementSibling.style.transition = "max-height 200ms ease 0s";
                    currentTarget.nextElementSibling.style.overflow = "hidden";

                    // hack, delay to handle the maxheight not being initially set
                    setTimeout(() => {
                        if (currentTarget.nextElementSibling.style.maxHeight != "0px") {
                            currentTarget.nextElementSibling.style.maxHeight = "0px";
                        }
                        else {
                            currentTarget.nextElementSibling.style.maxHeight = `${currentTarget.nextElementSibling.scrollHeight}px`;
                        }
                    }, 10);
                });
            }
        })
});