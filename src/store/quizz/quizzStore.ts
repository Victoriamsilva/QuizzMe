import { makeObservable, observable, action } from 'mobx';
import { QuizzModel } from '../../Domain/Entities/quizz/quizz.model';

export interface QuizzStoreProps {
  quizz: QuizzModel;
  changePage: (step: 'stepOne' | 'stepTwo') => void;
  viewQuizz: string;
}

class QuizzStore implements QuizzStoreProps {
  quizz: QuizzModel = new QuizzModel({ questions: [] });
  viewQuizz: 'stepOne' | 'stepTwo' = 'stepOne';

  constructor() {
    makeObservable(this, {
      quizz: observable,
      changePage: action,
      viewQuizz: observable
    });
  }

  changePage = (step: 'stepOne' | 'stepTwo') => {
    this.viewQuizz = step;
  };
}

export default new QuizzStore();
