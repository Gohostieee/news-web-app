import "../style/card.css"
import {useEffect} from "react"
import $ from "jquery";


export function Menu(arg){
   function menuItem(placeholder) {

       return ( `<li>
           <a class="w-500">
                       <p class="right-5">Guest</p> 

               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               ${placeholder}
               
           </a>
       </li>`)
   }


    useEffect(() => {


        if (arg.size!=null){
            for(let x = 0; x<arg.size;x++){
                $("#chatBox").append(menuItem("LOREM IPSUM OR SOMETHING IDK"))
            }
        }
    })

        return(

            <ul className="menu w-max bg-base-100 w-56 p-2 rounded-box scroll-m-8" id={"chatBox"}>


            </ul>





    )
}


export default function Card(arg="unavailable"){

    console.log(arg, "LOOK MOM IM ON TV")
    return(
        <div className="card w-96 h-90 bg-base-100 shadow-xl shadow-black shadow-lg m-10" >
            <figure><img src={arg.img} className={"cardImg"} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {arg.name}
                    <div className="badge">NEW</div>
                </h2>
                <p className={"text-justify  tracking-tight"}>{arg.content}</p>
                <div className="justify-end card-actions ">
                    {arg.tags}
                </div>
                <div className="btn-group mt-2 justify-center">
                    <a href={"#my-modal-2"} id="" className="btn modalA hover:bg-red-500 border-hidden">Chatroom</a>
                    <a  href={arg.href}  target={"_blank"} className="btn hover:bg-red-500 border-hidden">More info</a>


                </div>
            </div>
        </div>
    )
}