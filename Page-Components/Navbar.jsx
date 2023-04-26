import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../Toolkit/ContactSlice';

export default function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [search, setsearch] = useState();
    const [filter, setfilter] = useState([]);
    // console.log(search, "setsearch");
    const dispatch = useDispatch();
    const { Contact } = useSelector((store) => store.Contact);

    useEffect(() => {
        if (search) {
            let filtr = Contact.filter(
                (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1,
            );
            setfilter(filtr);
        }
        dispatch(Search(filter));
    }, [search]);
    return (
        <>
            <Box bgcolor="#85464080" py={3}>
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box fontSize={{ xs: '28px', md: '36px' }} fontWeight={700}>
                            <Link href="/">Contact Toolkit</Link>
                        </Box>
                        <Stack
                            direction="row"
                            spacing={3}
                            alignItems="center"
                            fontSize={{ xs: '16px', md: '20px' }}
                            fontWeight={500}
                            sx={{
                                '& input': {
                                    border: 'none',
                                    fontSize: '24px',
                                    py: 1,
                                    px: 2.5,
                                    borderRadius: '15px',
                                },
                                '& input:focus': {
                                    outline: 'none',
                                },
                                '& input::placeholder': {
                                    color: '#85464050',
                                },
                            }}
                        >
                            <Box>
                                <Link
                                    href="/AddContact"
                                    sx={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    Create
                                </Link>
                            </Box>
                            <Box>
                                <Link
                                    href="/ContactList"
                                    sx={{
                                        textDecoration: 'none !important',
                                        color: 'inherit',
                                    }}
                                >
                                    Contacts
                                </Link>
                            </Box>
                            <input
                                placeholder="Search for Contact"
                                onChange={(e) => setsearch(e.target.value)}
                            />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
