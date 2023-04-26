import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
// import { CreateContact } from '../Toolkit/ContactSlice';
// import { useDispatch } from 'react-redux';

export default function AddContact({ addContact }) {
    const theme = useTheme();
    const router = useRouter();
    // const dispatch = useDispatch();
    const mode = theme.palette.mode;
    const [detail, setdetail] = useState({
        name: '',
        contact: '',
        birth: '',
        email: '',
        file: '',
    });

    async function AddNew() {
        try {
            if (Object.keys(detail).length !== 0 && detail.name && detail.contact && detail.file) {
                // dispatch(CreateContact(detail));

                const url = await handleChange();
                console.log(url);
                await addContact({ ...detail, file: url });
                setdetail({
                    name: '',
                    contact: '',
                    birth: '',
                    email: '',
                    file: '',
                });
                router.push('/ContactList');
            } else {
                console.log('null');
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = async () => {
        try {
            const data = new FormData();
            data.append('file', detail.file);
            data.append('upload_preset', 'usman2210');
            data.append('cloud_name', 'dqhsionv3');
            const res = await fetch('https://api.cloudinary.com/v1_1/dqhsionv3/image/upload', {
                method: 'post',
                body: data,
            });
            const result = await res.json();
            return result.url;
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Box>
                <Container maxWidth="md">
                    <Box
                        my={10}
                        fontSize={{ xs: '32px', md: '48px' }}
                        fontWeight={700}
                        textAlign="center"
                        sx={{
                            color:
                                mode === 'light'
                                    ? `${theme.palette.text.light}`
                                    : `${theme.palette.text.dark}`,
                        }}
                    >
                        Add A New Contact
                    </Box>
                    <Stack
                        my={5}
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                            '& input': {
                                border: 'none',
                                boxShadow:
                                    mode === 'light'
                                        ? `0 0 10px 2px ${theme.palette.shadow.light}`
                                        : `0 0 10px 2px ${theme.palette.shadow.dark}`,
                                backgroundColor:
                                    mode === 'light'
                                        ? ` ${theme.palette.background.light}`
                                        : ` ${theme.palette.background.dark}`,
                                color:
                                    mode === 'light'
                                        ? ` ${theme.palette.text.light}`
                                        : ` ${theme.palette.text.dark}`,
                                fontSize: '24px',
                                py: 1,
                                px: 2.5,
                                borderRadius: '10px',
                            },
                            '& input:focus': {
                                outline: 'none',
                                boxShadow:
                                    mode === 'light'
                                        ? `0 0 1px 1px ${theme.palette.text.light}`
                                        : `0 0 1px 1px ${theme.palette.text.dark}`,
                            },
                            '& input::placeholder': {
                                color:
                                    mode === 'light'
                                        ? ` ${theme.palette.text.light}`
                                        : ` ${theme.palette.text.dark}`,
                            },
                        }}
                    >
                        <input
                            placeholder="Name"
                            value={detail && detail.name}
                            onChange={(e) => setdetail({ ...detail, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={detail && detail.contact}
                            onChange={(e) => setdetail({ ...detail, contact: e.target.value })}
                        />
                    </Stack>
                    <Stack
                        my={5}
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                            '& input': {
                                border: 'none',
                                boxShadow:
                                    mode === 'light'
                                        ? `0 0 10px 2px ${theme.palette.shadow.light}`
                                        : `0 0 10px 2px ${theme.palette.shadow.dark}`,
                                backgroundColor:
                                    mode === 'light'
                                        ? ` ${theme.palette.background.light}`
                                        : ` ${theme.palette.background.dark}`,
                                color:
                                    mode === 'light'
                                        ? ` ${theme.palette.text.light}`
                                        : ` ${theme.palette.text.dark}`,
                                fontSize: '24px',
                                py: 1,
                                px: 2.5,
                                borderRadius: '10px',
                            },
                            '& input:focus': {
                                outline: 'none',
                                boxShadow:
                                    mode === 'light'
                                        ? `0 0 1px 1px ${theme.palette.text.light}`
                                        : `0 0 1px 1px ${theme.palette.text.dark}`,
                            },
                            '& input::placeholder': {
                                color:
                                    mode === 'light'
                                        ? ` ${theme.palette.text.light}`
                                        : ` ${theme.palette.text.dark}`,
                            },
                        }}
                    >
                        <input
                            placeholder="Date Of Birth"
                            value={detail && detail.birth}
                            onChange={(e) => setdetail({ ...detail, birth: e.target.value })}
                        />
                        <input
                            placeholder="Email"
                            value={detail && detail.email}
                            onChange={(e) => setdetail({ ...detail, email: e.target.value })}
                        />
                    </Stack>
                    <input
                        type="file"
                        onChange={(e) => setdetail({ ...detail, file: e.target.files[0] })}
                    />
                    <Button
                        sx={{
                            display: 'flex',
                            mx: 'auto',
                            backgroundColor:
                                mode === 'light'
                                    ? ` ${theme.palette.button.dark}`
                                    : ` ${theme.palette.button.light}`,
                            color:
                                mode === 'light'
                                    ? ` ${theme.palette.text.dark}`
                                    : ` ${theme.palette.text.light}`,
                            '&:hover': {
                                boxShadow:
                                    mode === 'light'
                                        ? `0 0 5px 1px ${theme.palette.shadow.light}`
                                        : `0 0 5px 1px ${theme.palette.shadow.dark}`,
                            },
                        }}
                        onClick={() => AddNew()}
                    >
                        Add Contact
                    </Button>
                </Container>
            </Box>
        </>
    );
}
