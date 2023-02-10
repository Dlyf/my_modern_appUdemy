// receive this object props
// 3ème façon 
function ProfileCard({ title, handle }) {
    // Argument destructuring
    // const title = props.title;
    // const handle = props.handle;
    //2ème façon
    // const { title, handle } = props;
    return(
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;