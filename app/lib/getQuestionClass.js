import ChooseAnswer from '../components/ChooseAnswer';
import FreeAnswer from '../components/FreeAnswer';

import {
    CHOOSE_ANSWER,
    FREE_ANSWER
} from '../constants/questions';

const getQuestionClass = (type) => {
    switch (type) {
        case CHOOSE_ANSWER:
            return ChooseAnswer;
        case FREE_ANSWER:
            return FreeAnswer;
        default:
            return null;
    }
};

export default getQuestionClass;