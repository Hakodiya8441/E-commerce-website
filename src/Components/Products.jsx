import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { addWishList } from '../features/wishSlice';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products({product}) {

const dispatch = useDispatch()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345,height:"70vh",backgroundColor:"#ffdefe" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title}
        subheader="September 14, 2016"
      />
      <Link to={`/singleproduct/${product.id}`}> <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      /></Link>
      <CardContent>
        <Typography variant="h5" >
          Price :- ${product.price}
        </Typography>
        <Typography variant='h6'>
          Rating :- ⭐{product.rating.rate}/5
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{marginTop:"50px"}}>
        <IconButton aria-label="add to favorites">
          <Button variant='contained' color='success' onClick={()=>{
            dispatch(addToCart(product))
          }}>Add to Cart</Button>
        </IconButton>
        <IconButton aria-label="share">
          <Button variant='contained' color='warning'onClick={()=>{
            dispatch(addWishList(product))
          }}>Wishlist</Button>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}
