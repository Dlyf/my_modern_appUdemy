import { Panel } from "rsuite";
// receive this object props
// 3ème façon
function ProfileCard({ title, handle, image, description }) {
  // Argument destructuring
  // const title = props.title;
  // const handle = props.handle;
  //2ème façon
  // const { title, handle } = props;
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 240, marginLeft:"20rem" }}
    >
      <img src={image} alt="pda logo" height="240"/>
      <Panel header={<h5>{title}</h5>}>
        <p>{handle}</p>
        <div className="content">{description}</div>
      </Panel>
    </Panel>
    // <div className="card">
    //     <img src={image} alt="pda logo"/>
    //     <div>Title is {title}</div>
    //     <div>Handle is {handle}</div>
    // </div>
  );
}

export default ProfileCard;
