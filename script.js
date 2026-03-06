    const hamburger = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".overlay");

    hamburger.addEventListener("click", () => 
    {
        menu.classList.toggle("open");
    });
    window.addEventListener("resize", ()=>
    {
        if (window.innerWidth >= 768) 
        {
            menu.classList.remove("open");
        }
    });
    //scrolling
    // const slider = document.querySelector(".product-line");
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // slider.addEventListener("mousedown", (e)=>{
    //     isDown = true;
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    //     // console.log(scrollLeft);
    // });
    // slider.addEventListener("mouseleave", ()=>{
    //     isDown = false;
    // });
    // slider.addEventListener("mouseup", ()=>{
    //     isDown = false;
    // });
    // slider.addEventListener("mousemove", (e)=>{
    //     if(!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - slider.offsetLeft;
    //     const walk = (x - startX) * 1.5; // scroll speed
    //     slider.scrollLeft = scrollLeft - walk;
    });

    
