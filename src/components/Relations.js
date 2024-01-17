import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanels from './CustomTabPanels';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Faq from './Faq';

const Relations = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleOpen = () => {
    setOpen((open) => !open);
  }
  const [studyArray, setStudyArray] =  useState(['9 + 6 + 7x - 2x - 3', '2x + 3', '5x + 2 + 4', '4x + 3', '232 + 242 + 4x', '45 + 9 + 3x',
  '3 + 5 + 5x', '2x+4+5+6', '3+0+5', '8x+0+8', '9x+52']);
  const [quizArray, setQuizArray] = useState(['question 1', 'question 2', 'question 3', 'question 4', 'question 5']);
  const [testArray, setTestArray] = useState(['question 1', 'question 2', 'question 3', 'question 4', 'question 5']);
  const [gameArray, setGameArray] = useState(['game 1', 'game 2', 'game 3', 'game 4', 'game 5', 'game 6']);
  const [otherContent, setOtherContent] = useState(['other content 1', 'other content 2', 'other content 3']);
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className='my-9 w-full'>
      <h1 className='text-2xl font-bold text-indigo-800'>Relations and Functions (Mathematics)</h1>
      <Box sx={{ width: '100%', marginTop: '1.5rem' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered
        textColor='secondary' indicatorColor='secondary'>
          <Tab label="Study" {...a11yProps(0)} />
          <Tab label="Quiz" {...a11yProps(1)} />
          <Tab label="Test" {...a11yProps(2)} />
          <Tab label="Game" {...a11yProps(3)} />
          <Tab label="Others" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanels value={value} index={0} valueArray={studyArray}/>
      <CustomTabPanels value={value} index={1} valueArray={quizArray}/>
      <CustomTabPanels value={value} index={2} valueArray={testArray}/>
      <CustomTabPanels value={value} index={3} valueArray={gameArray}/>
      <CustomTabPanels value={value} index={4} valueArray={otherContent}/>
    </Box>
    <div className='w-full flex justify-between my-16'>
        <div className='flex gap-4 items-center'>
          <div className='custom_shadow h-16 w-16 rounded-full flex justify-center items-center'>
            <img src='/images/seperate_logo.png' className='h-10 w-10 rounded-full' alt='logo'/>
          </div>
          <div className='flex-col'>
            <p className='text-xs font-bold text-slate-500'>Published by</p>
            <img src='/images/name.png' className='h-10 w-28' alt='logo'/>
          </div>
        </div>
        <button className='flex gap-2 items-center' onClick={toggleOpen}>
          <div className='h-10 w-10 rounded-full text-white custom_bg flex justify-center items-center'>
            <AddIcon fontSize='large' />
          </div>
          <p className='custom_color text-xl font-semibold'>Create Flashcard</p>
        </button>
      </div>
      <Dialog
        open={open}
        onClose={toggleOpen}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const new_value = formJson.content
            switch(value){
              case 0:
                setStudyArray([...studyArray, new_value]);
                break;
              case 1:
                setQuizArray([...quizArray, new_value]);
                break;
              case 2:
                setTestArray([...testArray, new_value]);
                break;
              case 3:
                setGameArray([...gameArray, new_value]);
                break;
              case 4:
                setOtherContent([...otherContent, new_value]);
                break;
              default:
                console.log(value);
            }
            toggleOpen();
          },
        }}
      >
        <DialogTitle>Create Flashcard</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a new flashcard content
          </DialogContentText>
          <TextField
            required
            name='content'
            margin="dense"
            label="New content"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
      <h1 className='text-3xl font-bold text-indigo-800 mt-20'>FAQ</h1>
      <Faq />
    </div>
  )
}

export default Relations
