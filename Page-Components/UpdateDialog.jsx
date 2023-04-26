import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, Stack } from '@mui/material';
import { useRouter } from 'next/router';
// import { url } from '../enviroment';
// import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';
// import { Update } from '../Toolkit/ContactSlice';

export default function UpdateDialog({ open, close, data }) {
    // const dispatch = useDispatch();
    const router = useRouter();
    const [update, setupdate] = useState();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        // console.log(data, "Dialog open");
        setupdate(data);
    }, [data]);

    const handleUpdate = async (id) => {
        console.log(id, 'id for PUT');
        await fetch(`/api/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: update?.name,
                contact: update?.contact,
                birth: update?.birth,
                email: update?.email,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        router.replace(router.asPath);
    };
    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={close}
                aria-labelledby="responsive-dialog-title"
            >
                <Box sx={{ padding: { xs: 2, md: 5 } }}>
                    <Box fontSize={{ xs: '26px', md: '38px' }} fontWeight={700} textAlign="center">
                        Update Contact
                    </Box>
                    <Stack
                        my={5}
                        direction="column"
                        gap={3}
                        justifyContent="space-between"
                        sx={{
                            '& input': {
                                border: 'none',
                                boxShadow: '0 0 10px 2px #854640',
                                fontSize: '24px',
                                py: 1,
                                px: 2.5,
                                borderRadius: '10px',
                            },
                            '& input:focus': {
                                outline: 'none',
                                boxShadow: '0 0 1px 1px #854640',
                            },
                            '& input::placeholder': {
                                color: '#85464050',
                            },
                        }}
                    >
                        <input
                            placeholder="Name"
                            value={update && update.name}
                            onChange={(e) => setupdate({ ...update, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={update && update.contact}
                            onChange={(e) => setupdate({ ...update, contact: e.target.value })}
                        />
                    </Stack>
                    <Stack
                        my={5}
                        direction="column"
                        gap={3}
                        justifyContent="space-between"
                        sx={{
                            '& input': {
                                border: 'none',
                                boxShadow: '0 0 10px 2px #854640',
                                fontSize: '24px',
                                py: 1,
                                px: 2.5,
                                borderRadius: '10px',
                            },
                            '& input:focus': {
                                outline: 'none',
                                boxShadow: '0 0 1px 1px #854640',
                            },
                            '& input::placeholder': {
                                color: '#85464050',
                            },
                        }}
                    >
                        <input
                            placeholder="Date Of Birth"
                            value={update && update.birth}
                            onChange={(e) => setupdate({ ...update, birth: e.target.value })}
                        />
                        <input
                            placeholder="Email"
                            value={update && update.email}
                            onChange={(e) => setupdate({ ...update, email: e.target.value })}
                        />
                    </Stack>
                    <Button
                        sx={{
                            display: 'flex',
                            mx: 'auto',
                            bgcolor: '#854640',
                            color: '#fff',
                            '&:hover': {
                                color: '#854640',
                                boxShadow: '0 0 5px 1px #854640',
                            },
                        }}
                        onClick={() => {
                            // dispatch(Update(update));
                            handleUpdate(update._id);
                            close();
                        }}
                    >
                        Update
                    </Button>
                </Box>
            </Dialog>
        </>
    );
}
