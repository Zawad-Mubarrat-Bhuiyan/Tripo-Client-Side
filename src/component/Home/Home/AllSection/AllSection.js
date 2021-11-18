import React from 'react';
import Feedback from '../Feedback/Feedback';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Question from '../Question/Question';

const AllSection = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Offers></Offers>
                  <Question></Question>
                  <Feedback></Feedback>
            </div>
      );
};

export default AllSection;