import React from 'react';
import PropTypes from 'prop-types';
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
import Register from './Register';

function Registerdis(props) {
    const { onClose, open, data, setFormData } = props;

    const handleClose = () => {
        onClose();
    };

    //入力値を一時保存
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        data[key] = value;
        let datas = Object.assign({}, data);
        setFormData(datas);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    スケジュール登録
                </DialogContentText>
                <TextField margin="dense" id="sch_date" name="sch_date" label="予定日" type="text" fullWidth variant="standard" onChange={inputChange} />
                <InputLabel id="sch_time_label">時刻</InputLabel>
                <Select labelId="sch_hour" id="sch_hour_select" name="sch_hour" label="Hour" variant="standard" defaultValue="00" onChange={inputChange}>
                    <MenuItem value="00">00</MenuItem><MenuItem value="01">01</MenuItem>
                </Select>
                <Select labelId="sch_min" id="sch_min_select" name="sch_min" label="Min" variant="standard" defaultValue="00" onChange={inputChange}>
                    <MenuItem value="00">00</MenuItem><MenuItem value="01">01</MenuItem>
                </Select>
                <InputLabel id="sch_category_label">カテゴリー</InputLabel>
                <Select labelId="sch_category" id="sch_category_select" name="sch_category" label="Category" variant="standard" defaultValue="勉強" onChange={inputChange}>
                    <MenuItem value="勉強">勉強</MenuItem>
                    <MenuItem value="案件">案件</MenuItem>
                    <MenuItem value="テスト">テスト</MenuItem>
                </Select>
                <TextField margin="dense" id="sch_contents" name="sch_contents" label="内容" type="text" fullWidth variant="standard" onChange={inputChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Register formData={data} />
            </DialogActions>
        </Dialog>
    );
}

Registerdis.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default Registerdis;