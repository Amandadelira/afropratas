import BemVindo from "./Ben=mVindo.js";
import "./UsandoProps.css";

const UsandoProps = () => {
    const users = [{
        id : 123,
        name: "Amanda",
        lastName: "Lira",
        avatar: "https://aventurebox.ninja/thumbor/NV_iTU-lcW1uvOLfUeWK5nRYzp4=/50x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/60061274f160c/profile/625c8f769cd8f-4.jpg",
        status: "Transformando café em códingo..."
    },{
        id : 124,
        name: "Marcos",
        lastName: "Cunha",
        avatar: "https://aventurebox.ninja/thumbor/wCZ17qOmnZvnI7YapqLmMcHwXGw=/50x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/61fc29ffe1252/profile/6201972321f1c-4.jpg",
        status: "Online"
    }]

    return(
        <div className="lastusers">
            {users && users.map((user) => {
                return <BemVindo {...user} />
            })}
        </div>
    )
}

export default UsandoProps;