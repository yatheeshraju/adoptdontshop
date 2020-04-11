import React from 'react';
import './PostItem.scss';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import More from './../More/More';
export default function PostItem (){
        const [open, setOpen] = React.useState(false);
        const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = (value) => {
            setOpen(false);
          };
        var scrwidth=window.innerWidth;
        if(scrwidth>700){
            scrwidth=500
        }
        return (
            <div className='postitem' width={scrwidth}>
                 <More open={open} onClose={handleClose} />
                <div className='header'>
                    <img src="https://source.unsplash.com/50x50/?dog" alt="postedby"/>
                    <span>save pets org </span>
                    <button className='more'  onClick={handleClickOpen}><MoreHorizOutlinedIcon fontSize='large'/></button>

                </div>
                <div className='content' width={scrwidth}>
                    <img src="https://source.unsplash.com/400x600/?dog" width={scrwidth} alt="dog"/>
                </div>
                <div className='footer'>
                    <div className='favbar'>
                    <button className='likes'><FavoriteBorderOutlinedIcon fontSize='large'/></button>
                    <button className='comments'><CommentOutlinedIcon fontSize='large'/></button>
                    </div>
                    <div className='favcount'>
                    <span className='likescount'>1234 likes</span>
                    <span className='viewscount'>234 views</span>
                    </div>
                    </div>
                
            </div>
        )
}
