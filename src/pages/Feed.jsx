import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Feed = ({ user }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
    }, []);

    const handlePost = async () => {
        const content = document.getElementById('postContent').value;
        await firebase.firestore().collection('posts').add({
            userId: user.uid,
            userName: user.displayName,
            content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        document.getElementById('postContent').value = '';
    };

    return (
        <div className="p-4">
            <Card className="mb-4">
                <textarea id="postContent" placeholder="Share a moment..." className="w-full p-2 border rounded-lg mb-2"></textarea>
                <Button onClick={handlePost} className="bg-purple-600 text-white">Post</Button>
            </div>
            {posts.map(post => (
                <Card key={post.id} className="mb-4">
                    <h3 className="font-bold">{post.userName}</h3>
                    <p>{post.content}</p>
                    <div className="flex mt-2">
                        <Button className="bg-purple-600 text-white mr-2">Like</Button>
                        <Button className="bg-gray-200 text-gray-800">Comment</Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Feed;