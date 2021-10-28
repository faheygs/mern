import { useContext } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";

const People = ({ people, handleFollow }) => {
    const [state, setState] = useContext(UserContext);
    const router = useRouter();

    return (
        <>
            <List itemLayout="horizontal" dataSource={people} renderItem={(user) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={user.image ? (<Avatar src={user.image.url}></Avatar>) : (<Avatar>{user.username[0].toUpperCase()}</Avatar>)}
                        title={<div className="d-flex justify-content-between">{user.username} <span onClick={() => handleFollow(user)} className="text-primary pointer">Follow</span></div>}
                    />
                </List.Item>
            )} />
        </>
    )
};

export default People;