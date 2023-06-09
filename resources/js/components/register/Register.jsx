import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function Register(props) {
    const { formData } = props;

    //ダイアログデータを登録
    const createSchedule = async () => {
        //タイトルが空なら弾く
        if (formData.sch_title == '') {
            return;
        }
        
        //入力値を投げる
        await axios
            .post('/api/posts/create', {
                sch_category: formData.sch_category,
                sch_contents: formData.sch_contents,
                sch_date: formData.sch_date,
                sch_time: formData.sch_hour + ':' + formData.sch_min
            })
            .then((res) => {
                //戻り値をtodosにセット
                const tempPosts = post;
                tempPosts.push(res.data);
                setPosts(tempPosts)
                setFormData('');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Button href="/dashboard" onClick={createSchedule}>Subscribe</Button>
    );
}

export default Register;