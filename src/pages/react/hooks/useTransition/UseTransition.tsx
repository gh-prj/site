import React, { useState, useTransition, Suspense, HTMLAttributes } from 'react';
import ReactDOM from "react-dom/client";
import { fetchProfileData } from "./fakeApi";
import styles from './UseTransition.module.scss'

const UseTransition = () => {
    return (
        <div className={styles.container}>
            <Main />
        </div>
    );
}

export default UseTransition;

function getNextId(id: number) {
    return id === 3 ? 0 : id + 1;
}

const initialResource = fetchProfileData(0);

function Main() {
    const [resource, setResource] = useState(
        initialResource
    );
    const [
        isPending,
        startTransition
    ] = useTransition();
    // ] = useTransition({ timeoutMs: 3000 });
    return (
        <>
            <button
                disabled={isPending}
                onClick={() => {
                    startTransition(() => {
                        const nextUserId = getNextId(
                            resource.userId
                        );
                        setResource(
                            fetchProfileData(nextUserId)
                        );
                    });
                }}
            > Next </button>
            {isPending ? " Loading..." : null}
            <ProfilePage rsrc={resource} />
        </>
    );
}

interface Props extends HTMLAttributes<any> {
    rsrc: ReturnType<typeof fetchProfileData>,
}

const ProfilePage: React.FC<Props> = ({ rsrc }) => {
    return (
        <Suspense
            fallback={<h1>Loading profile...</h1>}
        >
            <ProfileDetails rsrc={rsrc} />
            <Suspense
                fallback={<h1>Loading posts...</h1>}
            >
                <ProfileTimeline rsrc={rsrc} />
            </Suspense>
        </Suspense>
    );
}

const ProfileDetails: React.FC<Props> = ({ rsrc }) => {
    const user = rsrc.user.read();
    return <h1>{user.name}</h1>;
}

const ProfileTimeline: React.FC<Props> = ({ rsrc }) => {
    const posts: { id: number, text: string }[] = rsrc.posts.read();
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>
    );
}
