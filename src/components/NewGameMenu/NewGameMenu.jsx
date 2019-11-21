import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuizSaga } from '../../actions/quizActions';
import { setQuizStatus } from '../../actions/configActions';

import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { DEFAULT } from '../../consts';
import './NewGameMenu.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const NewGameMenu = () => {
  
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const dispatch = useDispatch();

  return ( 
    <Formik
      initialValues={{ langA: '', langB: '', category: '' }}
      onSubmit={values => {
        dispatch(fetchQuizSaga(values));
        dispatch(setQuizStatus(DEFAULT.IS_PLAYING));
      }}
    >
      {props => {
        const {
          values,
          handleChange,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="new-game-menu">
            <h1>GAME OPTIONS</h1>
            <FormControl required variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel}>
                Native Language
              </InputLabel>
              <Select
                native
                value={values.langA}
                onChange={handleChange}
                labelWidth={400}
                inputProps={{
                  name: 'langA',
                }}
              >
                <option value="" />
                <option value={'spanish'}>Spanish</option>
                <option value={'english'}>English</option>
                <option value={'japaneseKana'}>Japanese Kana</option>
                <option value={'japaneseKanji'}>Japanese Kanji</option>
                <option value={'japaneseRomaji'}>Japanese Romaji</option>
              </Select>
            </FormControl>

            <FormControl required variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel}>
                Learning Language
              </InputLabel>
              <Select
                native
                value={values.langB}
                onChange={handleChange}
                labelWidth={400}
                inputProps={{
                  name: 'langB',
                }}
              >
                <option value="" />
                <option value={'spanish'}>Spanish</option>
                <option value={'english'}>English</option>
                <option value={'japaneseKana'}>Japanese Kana</option>
                <option value={'japaneseKanji'}>Japanese Kanji</option>
                <option value={'japaneseRomaji'}>Japanese Romaji</option>
              </Select>
            </FormControl>

            <FormControl required variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel}>
                Category
              </InputLabel>
              <Select
                native
                value={values.category}
                onChange={handleChange}
                labelWidth={400}
                inputProps={{
                  name: 'category',
                }}
              >
                <option value="" />
                <option value={'animals'}>Animals</option>
                <option value={'colors'}>Colors</option>
              </Select>
            </FormControl>

            <Button type="submit" variant="outlined" className={classes.button}>
              Start game
            </Button>
          </form>
        );
      }}
    </Formik>
   );
}
 
export default NewGameMenu;