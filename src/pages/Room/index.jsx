import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () =>{
    const { roomid } = useParams() ;

    const myMeeting = async(element) => {
      const appID = 1465548397 ;
      const serverSecret = "14a491669c97df502b1892fb577ac885";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret,
        roomid, 
        Date.now().toString() ,
        "Rishav"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:3000/room/${roomid}`
                }

            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:true,
        })

    }
    return (
            <div> 
                <div ref={myMeeting}/>
            </div>
    )
}

export default RoomPage ;