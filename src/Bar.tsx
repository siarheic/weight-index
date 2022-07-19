import {Card, CardContent, Grid, Alert, Typography} from "@mui/material";
import React, {useContext} from "react";
import {StoreContext} from "./store";

export default function Bar() {
    const {weight, height, generated} = useContext(StoreContext);
    let generateValue = 0;
    if (generated) {
        generateValue = parseFloat(height) * parseFloat(height);
        generateValue = parseFloat(weight) / generateValue;
        generateValue = Math.round(generateValue) * 100;
        generateValue = generateValue / 100;
    }

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom component="div">
                            Сгенерируйте значение:
                        </Typography>
                    </Grid>
                    {(generated && (
                        <Grid item xs={12}>
                            <Typography variant="h2" gutterBottom component="div">
                                {generateValue}
                            </Typography>
                        </Grid>
                    )) || null}
                    <Grid item xs={12}>
                        {(generated && generateValue < 16 && (
                            <Alert severity="error">Значительный дефицит массы тела.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 16 && generateValue < 18.5) && (
                            <Alert severity="warning">Дефицит массы тела.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 18.5 && generateValue < 25) && (
                            <Alert severity="success">Норма.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 25 && generateValue < 30) && (
                            <Alert severity="warning">Лишний вес.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 30 && generateValue < 35) && (
                            <Alert severity="error">Ожирение первой степени.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 35 && generateValue < 40) && (
                            <Alert severity="error">Ожирение второй степени.</Alert>
                        )) || null}
                        {(generated && (generateValue >= 40) && (
                            <Alert severity="error">Ожирение третьей степени.</Alert>
                        )) || null}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}