import { Avatar, Box, Button, Container, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useDispatch, useSelector } from 'react-redux';
// import { Delete } from '../Toolkit/ContactSlice';

// import axios from 'axios';
import UpdateDialog from './UpdateDialog';
import Link from 'next/link';

export default function ContactList({ contacts }) {
    const [update, setUpdate] = useState(false);
    const [updateData, setUpdateData] = useState({});

    // const [Data, setData] = useState();
    // const dispatch = useDispatch();
    // const { Contact, Filter } = useSelector((store) => store.Contact);

    // useEffect(() => {
    //     // console.log(Contact, 'Contact', Filter);
    //     Filter.length > 0 ? setData(Filter) : setData(Contact);
    // }, [Contact, Filter]);

    const handleUpdate = () => {
        setUpdate((prev) => !prev);
    };

    const handleDelete = async (id) => {
        console.log(id, 'id for delete');
        await fetch(`/api/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return (
        <>
            <UpdateDialog open={update} close={handleUpdate} data={updateData} />
            <Box>
                <Container maxWidth="lg">
                    <Box
                        my={10}
                        fontSize={{ xs: '32px', md: '48px' }}
                        fontWeight={700}
                        textAlign="center"
                    >
                        Contact List
                    </Box>
                    <Grid container my={5} spacing={4}>
                        {contacts &&
                            contacts.map((item, id) => {
                                return (
                                    <Grid item xs={6} sm={4} md={3} m={2} key={id}>
                                        <Box
                                            height="100%"
                                            p={2}
                                            sx={{
                                                boxShadow: '0 0 10px 1px #80008080',
                                                borderRadius: '10px',
                                            }}
                                        >
                                            <Stack
                                                py={1}
                                                direction="row"
                                                alignItems="center"
                                                fontSize="22px"
                                                justifyContent="space-between"
                                            >
                                                <a
                                                    href={item.img}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{
                                                        textDecoration: 'none',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <Avatar src={item.img} />
                                                </a>
                                                <Box color="#800080">{item.name}</Box>
                                                <EditIcon
                                                    sx={{ color: '#800080', cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setUpdateData(item);
                                                        handleUpdate();
                                                    }}
                                                />
                                                <DeleteForeverIcon
                                                    sx={{ color: '#800080', cursor: 'pointer' }}
                                                    onClick={() => {
                                                        // dispatch(Delete(item));
                                                        handleDelete(item._id);
                                                    }}
                                                />
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Box>Content : </Box>
                                                <Box>{item.contact}</Box>
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Box>Birth</Box>
                                                <Box>{item.birth}</Box>
                                            </Stack>
                                            <Box>
                                                <Box>Mail:</Box>
                                                <Box textAlign="center">{item.email}</Box>
                                            </Box>
                                            <Button>
                                                <Link href={`/ContactList/${item._id}`}>
                                                    Detail
                                                </Link>
                                            </Button>
                                        </Box>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
