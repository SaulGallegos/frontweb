import * as React from 'react';
import Box from '@mui/material/Box';
import UserCard from './UserCard';

export default function MembersPage() {
    const [members, setMembers] = React.useState([]);

    const getMembers = async () => {
        const response = await fetch('http://localhost:3000/api/user');
        const data = await response.json();
        if (data.ok) {
            setMembers(data.users);
        }
    };

    React.useEffect(() => {
        getMembers();
    }, []);

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{ mt: 1 }}>
                {
                    members.map(member => (
                        <UserCard
                            key={member._id}
                            username={member.username}
                            img={member.img}
                        />
                    ))
                }
            </Box>
        </Box>
    );
}
