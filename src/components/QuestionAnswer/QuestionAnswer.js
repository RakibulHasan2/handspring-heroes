import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
    <div >
            <h1 className= 'heading'>FAQ Section</h1>
      <div>
        <div className='QA'>
            <h3>Question-01 : How dose react work?</h3>
            <h4> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. </h4>
        </div>
        <div className='QA'>
            <h3>Question-02 : What is the difference between props and state?</h3>
            <h4>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component. </h4>
        </div>
        <div className='QA'>
            <h3>Question-03 : How dose react work?</h3>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum perferendis necessitatibus quod repudiandae facere. Reprehenderit, est. Ullam, nam dolore? </h4>
        </div>   
      </div>

    </div>

    );
};

export default QuestionAnswer;