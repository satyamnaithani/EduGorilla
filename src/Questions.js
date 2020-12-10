import React , { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Ques from './Ques'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    height: '560px'
  },
}));

export default function Questions() {
  const classes = useStyles();
  const [data, setData] = useState({category: "Entertainment: Books",
  correct_answer: "J.K. Rowling",
  difficulty: "easy",
  incorrect_answers: ["J.R.R. Tolkien", "Terry Pratchett", "Daniel Radcliffe"],
  question: "Who wrote &quot;Harry Potter&quot;?",
  type: "multiple"});
  const [flag, setFlag] = useState(0);
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=20&category=10&difficulty=easy&type=multiple')
        .then(res=> res.json())
        .then((res)=>setData(res.results))
        .catch(err=> console.log(err))
      }, []);
      function handleRight() {
          setFlag(flag+1)
      }
      function handleLeft(){
          alert('fh')
      }
      console.log(data)


  return <div className={classes.root}>
      <Typography variant="h4">Questions</Typography>
      <Ques number='1' question= {data[flag].question} options={data[flag].incorrect_answers}/>
      <Button style={{float: 'left'}}><NavigateBeforeIcon onClick={() => handleLeft()}/></Button>
      <Button style={{float: 'right'}}><NavigateNextIcon  onClick={() =>  handleRight()}/></Button>
      </div>;
}
