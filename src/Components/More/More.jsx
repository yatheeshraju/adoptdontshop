import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" timeout='15' ref={ref} {...props} />;
  });

export default function More(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog TransitionComponent={Transition} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} >
      <DialogTitle id="simple-dialog-title">Actions </DialogTitle>
      <List>
      <ListItem autoFocus button onClick={() => handleListItemClick('share')}>
          <ListItemText primary="Share" />
        </ListItem>
        <ListItem  button onClick={() => handleListItemClick('link')}>
          <ListItemText primary="Get Link" />
        </ListItem>
      </List>
    </Dialog>
  );
}

More.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};


