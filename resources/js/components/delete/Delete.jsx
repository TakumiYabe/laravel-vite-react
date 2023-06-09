import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function Delete(data) { 
    const id = data.id;
    const deletePost = async (e) => {
        // リンク移動の無効か
        e.preventDefault()
        // 削除処理
        await axios
            .post('/api/delete', {
                id: id
            })
            .then((res) => {
                this.setState({
                    posts: res.posts
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Button href="/dashboard" onClick={deletePost}>Delete</Button>
    );
}

export default Delete;