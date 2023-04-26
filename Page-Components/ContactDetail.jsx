import { Avatar, Box, Container, Stack } from '@mui/material';
import React from 'react';

// import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';

export default function ContactDetail({ contact }) {
    // const [data, setdata] = useState();
    // const {
    //     query: { detailId },
    // } = useRouter();
    // console.log(detailId, 'detailId');
    // const { Contact } = useSelector((store) => store.Contact);
    // useEffect(() => {
    //     detailId &&
    //         Contact.find((item) => {
    //             item._id == detailId && setdata(item);
    //         });
    // }, []);
    return (
        <>
            <Container maxWidth="md">
                <Box
                    my={10}
                    p={2}
                    sx={{
                        boxShadow: '0 0 10px 1px #80008080',
                        borderRadius: '10px',
                    }}
                >
                    <Stack
                        py={1}
                        direction="column"
                        alignItems="center"
                        fontSize="22px"
                        justifyContent="space-between"
                    >
                        <Avatar sx={{ width: '100px', height: '100px' }} />
                        <Box my={2} color="#800080">
                            {contact?.name}
                        </Box>
                    </Stack>
                    <Stack
                        direction="row"
                        my={2}
                        px={{ xs: 2, sm: 5, md: 10 }}
                        justifyContent="space-between"
                    >
                        <Box>Content : </Box>
                        <Box>{contact?.contact}</Box>
                    </Stack>
                    <Stack
                        direction="row"
                        my={2}
                        px={{ xs: 2, sm: 5, md: 10 }}
                        justifyContent="space-between"
                    >
                        <Box>Birth</Box>
                        <Box>{contact?.birth}</Box>
                    </Stack>
                    <Stack
                        direction="row"
                        my={2}
                        px={{ xs: 2, sm: 5, md: 10 }}
                        justifyContent="space-between"
                    >
                        <Box>Mail:</Box>
                        <Box textAlign="center">{contact?.email}</Box>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
