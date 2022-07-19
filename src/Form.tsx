import React, {useContext, useEffect} from "react";
import {Card, CardContent, Grid, TextField, Button, Typography, Alert} from "@mui/material";
import {StoreContext} from "./store";

export default function Form() {
    const {
        weight, height, generated, errors,
        onWeight, onHeight, onErrors, onGenerated
    } = useContext(StoreContext);


    function onChangeWeight(e: React.ChangeEvent) {
        let target = e.target as HTMLTextAreaElement;
        onWeight && onWeight(target.value.replace(',', '.'));
    }

    function onChangeHeight(e: React.ChangeEvent) {
        let target = e.target as HTMLTextAreaElement;
        onHeight && onHeight(target.value.replace(',', '.'));
    }

    function onSubmit() {
        if (isNaN(parseFloat(weight)) || parseFloat(weight) === 0) {
            onErrors && onErrors('Некорректное значение веса!');
            return;
        }
        if (isNaN(parseFloat(height)) || parseFloat(height) === 0) {
            onErrors && onErrors('Некорректное значение роста!');
            return;
        }
        if (weight.trim().length === 0) {
            onErrors && onErrors('Значение веса не может быть пустым!');
            return;
        }
        if (height.trim().length === 0) {
            onErrors && onErrors('Значение роста не может быть пустым!');
            return;
        }
        onErrors && onErrors('');
        onGenerated && onGenerated(true);
    }

    useEffect(() => {
        if (generated) onGenerated && onGenerated(!generated);
    }, [weight, height])
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    {(errors.length > 0 && (
                        <Grid item xs={12}>
                            <Alert severity="warning">
                                {errors}
                            </Alert>
                        </Grid>
                    )) || null}
                    <Grid item xs={12}>
                        <TextField fullWidth id="weight" label="Вес, кг" variant="outlined" value={weight}
                                   onChange={onChangeWeight}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="height" label="Рост, м" variant="outlined" value={height}
                                   onChange={onChangeHeight}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button  {...(generated && {disabled: true})} variant="outlined" onClick={onSubmit}>Подсчет
                            индекса массы</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}