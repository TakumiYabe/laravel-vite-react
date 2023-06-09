import React from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Delete from '../delete/Delete';

function Update(props) {
    const { onClose, open, data, setFormData } = props;

    //入力値を一時保存
    const editChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        data[key] = value;
        let datas = Object.assign({}, data);
        setFormData(datas);
    }

    const handleClose = () => {
        onClose();
    };
    console.log(data);
    //ダイアログデータを登録
    const updateSchedule = async () => {
        //入力値を投げる
        await axios
            .post('/api/update', {
                id: data.id,
                sch_category: data.sch_category,
                sch_contents: data.sch_contents,
                sch_date: data.sch_date,
                sch_time: data.sch_hour + ':' + data.sch_min
            })
            .then((res) => {
                //戻り値をtodosにセット
                setFormData(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    スケジュール更新
                </DialogContentText>
                <TextField margin="dense" id="sch_date" name="sch_date" label="予定日" type="text" fullWidth variant="standard" value={data.sch_date} onChange={editChange} />
                <InputLabel id="sch_time_label">時刻</InputLabel>
                <Select labelId="sch_hour" id="sch_hour_select" name="sch_hour" label="Hour" variant="standard" value={data.sch_hour} onChange={editChange}>
                    <MenuItem value="00">00</MenuItem><MenuItem value="01">01</MenuItem>
                </Select>
                <Select labelId="sch_min" id="sch_min_select" name="sch_min" label="Min" variant="standard" value={data.sch_min} onChange={editChange}>
                    <MenuItem value="00">00</MenuItem><MenuItem value="01">01</MenuItem>
                </Select>
                <InputLabel id="sch_category">カテゴリー</InputLabel>
                <Select labelId="sch_category" id="sch_category_select" name="sch_category" label="Category" variant="standard" value={data.sch_category} onChange={editChange}>
                    <MenuItem value="勉強">勉強</MenuItem>
                    <MenuItem value="案件">案件</MenuItem>
                    <MenuItem value="テスト">テスト</MenuItem>
                </Select>
                <TextField margin="dense" id="sch_contents" name="sch_contents" label="内容" type="text" fullWidth variant="standard" value={data.sch_contents} onChange={editChange} />
            </DialogContent>
            <DialogActions>
                <Delete id={data.id} />
                <Button onClick={onClose}>Cancel</Button>
                <Button href="/dashboard" onClick={updateSchedule}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Update;

