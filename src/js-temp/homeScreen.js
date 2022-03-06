import Headr from "./navbar";
import React from "react";
import Card, {Menu} from "./card";
import $ from "jquery";
import {useEffect} from "react"
import {renderToString} from "react-dom/server"
import articles from "./articles.json"
import "../style/modal.css"
/*

y=e^(2x)
y^1=e^(2x)*^1=e^(2x)*2=2*e^2x
y^11=2*e^2x*(2x)^1=2*e*^2x*2=2^2*e^2x=4e^2x
y^111=
y^n=

y=e^-2
y^1=e^-x*-1
y^11=

y=ln*(x)
y=1/x=x^-1
y^11=(-1)*x^-1-1=(-1)*x^-2-(-(1/x^2))
y^111=(-1)

*/
articles=articles['articles']
function Home(){
    useEffect(() => {


        $(window).on('unload', function() {
            $(window).scrollTop(0);
        });
        let image,content;
        let running = 9;
        function modalShow(){
            if($("#my-modal-2").hasClass("hidden")){
                $("#my-modal-2").removeClass("hidden")
                $("body").addClass("overflow-hidden")

                console.log(1)
            }else{
                console.log(2)
                $("body").removeClass("overflow-hidden")

                $("#my-modal-2").addClass("hidden")
            }

        }
        while(running){
            if (articles[running]['urlToImage']==null){image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg"}else{image=articles[running]['urlToImage']}
            content=articles[running]['content'].split("[")[0]
            const Element=renderToString(<Card name={articles[running]['source']['name']} content={content} href={articles[running]['url']} img={image} />)

            $("#cardHolder").append(Element)
            running--;


        }

        $(".modalA").each((e)=>{console.log(this);$(this).click(modalShow)})
        $(".modalA").click(modalShow)

        $("#modBtn").click(modalShow)

        console.log(Element)
    })
    return(
<div className={"bg-gray-900 background"}>
    <Headr/>

    <div className={"flex justify-center flex-wrap bg-gray-900 "} id={"cardHolder"}>

    </div>

    <div className="modal z-30 hidden " id="my-modal-2" href={"#"}>
        <div className={"background z-40 modal-action"} id={"modHide"} href={"#"}/>
        <div className="modal-box p-0 z-50 overflow-x-hidden">
            <figure><div  className={"modalImg bg-gray-800"} alt="Shoes">
                    <a id={"modBtn"}  className="btn">Yay!</a>
            </div></figure>


            <Menu size={10}/>

        </div>

    </div>

</div>

    )
}

export default Home