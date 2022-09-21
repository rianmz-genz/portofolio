    var darkkk = document.getElementById(togel);
    var x = document.getElementById("school");
    var y = document.getElementById("experience");

        togel.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                togel.src ="sun.png";
            }else{
                togel.src = "moon.png";
            }
        }
        const boxes = document.querySelectorAll('.box');
        window.addEventListener('scroll', checkBoxes)
        checkBoxes()
            function checkBoxes() {
                const triggerBottom = window.innerHeight / 5 + 4
                boxes.forEach(box =>{
                    const boxTop = box.getBoundingClientRect().top
                    if(boxTop < triggerBottom){
                        box.classList.add('show')
                    }else{
                        box.classList.remove('show')
                    }
                })
            }
            function school() {
                if(x.style.display === "block"){
                  
                }
                else{
                    x.style.display = "block";
                    y.style.display = "none";
                }
            }
            
            function ex() {
                if(y.style.display === "block"){
                    
                }
                else{
                    y.style.display = "block";
                    x.style.display = "none";
                }
            }



            var btn =document.getElementsByClassName("btn");
            var slide = document.getElementById("slide");

            if (window.innerWidth <= 400) {
                btn[0].onclick = function(){
                    slide.style.transform = "translateX(0px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }
                btn[1].onclick = function(){
                    slide.style.transform = "translateX(-300px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }
                btn[2].onclick = function(){
                    slide.style.transform = "translateX(-600px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }
            }else{
                btn[0].onclick = function(){
                    slide.style.transform = "translateX(0px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }
                btn[1].onclick = function(){
                    slide.style.transform = "translateX(-800px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }
                btn[2].onclick = function(){
                    slide.style.transform = "translateX(-1600px)";
                    for(i=0;i<3;i++){
                        btn[i].classList.remove("aktive");
                    }
                    this.classList.add("aktive");
                }

                
            }
            var popup = document.getElementById("popup");
            
            const txt1 = document.getElementById('tbuser');
            const btn1 = document.getElementById('btn1');
            function openPopup(){
                popup.classList.add("open-popup");
            }
            function closePopup(){
                popup.classList.remove("open-popup");
                txt1.forEach(input => txt1.value = '');
            }

           

            function fun1(){
                const outp = txt1.value;
                const message = `${outp}`
                const whatsapp = `https://wa.me/6285889730015?text=${message}`
                open(whatsapp, "_blank")
                txt1.forEach(input => txt1.value = '');
            }
            btn1.addEventListener('click',fun1);


            // function chat(ask){
            //     const message = `${ask}`
            //     const whatsapp = `https://wa.me/6288227852900?text=${message}`
            //     open(whatsapp, "_blank")
            // }