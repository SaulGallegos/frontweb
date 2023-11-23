import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function UserCard({ username, img }) {

    return (
        <Card sx={{ maxWidth: 345, mb: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={username}
            />
            <CardMedia
                component="img"
                height="250"
                image={img}
                alt={username}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit nesciunt dolore dolorem, natus quas perspiciatis eligendi illo tenetur reiciendis nisi repudiandae suscipit cum quam voluptate facere repellat amet numquam!
                </Typography>
            </CardContent>

        </Card>
    );
}