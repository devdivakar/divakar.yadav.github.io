import React, { useState } from 'react';
import './Stepper.css';
import WorkExperience from '../WorkExperience/WorkExperience';

const Stepper = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Software Engineer', company: 'Capri Global Capital',skills:['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], startDate: '12-04-2023', endDate: '12-04-2023', tasks: ['Built an Audit System for Gold Auditing Purpose.Where a central assigner can upto 100k audit tasks to a auditor in 100ms-200ms using Mongo DB Bulk Update.','Worked on a Gold Loan Distribution Product In which involved the whole journey from customer onboarding to disbursal of loan amount now it is making annual revenue of $66M','Implemented a Dead Letter queue-based Retry mechanism to reduce the failure rate of Bulk API Calls rate by 30%']},
    { id: 2, title: 'Software Engineer', company: 'Udaan',skills:['Back-End Web Development', 'Cosmos DB' , 'Kotlin', 'Redis', 'Test Driven Development', 'Distributed Systems', 'Kubernetes', 'Docker'], startDate: '12-04-2023', endDate: '12-04-2023', tasks: ['Boosted onboarding rate 24% by developing a portal allowing sellers to bulk-upload product listings via Excel sheets, streamlining the process and reducing warehouse idle inventory','Improved listing resubmission process by adding a "Rejection Reason" field in the database, enabling sellers to quickly update rejected listings instead of starting from scratch. Achieved nearly 100% QC rejected listing resubmissions.','Addressed duplicate SKU creation issue in Udaan warehouse system caused by concurrent product inwards. Implemented Redis-based SKU lookup with a TTL greater than Cosmos DB replication time to ensure data consistency and prevent duplicate SKUs'] },
    { id: 3, title: 'Software Engineer', company: 'PhonePe',skills:['Back-End Web Development', 'NodeJS', 'ReactJS', 'Distributed Systems', 'Docker', 'Marathon'], startDate: '12-04-2023', endDate: '12-04-2023',tasks: ['Created a tool for Re-ordering the gift card on the basis of user interest with drag and drop. which increased the gift card conversion rate by 10%.'] },
    { id: 3, title: 'Software Engineer', company: 'DeepFlux',skills:['Full Stack Web Development', 'ReactJS', 'HighChartJS', 'Flask', 'Python', 'Supervisor',
    'Postgresql'], startDate: '12-04-2023', endDate: '12-04-2023',tasks: ['Automated mail report through cronejob whenever anomaly is found in datasets using luminoil(A linkedin library).','Built monolithic backend services from scratch.','Created a analytics dashboard for monitoring of different types of matrices.'] },
  ]);

  return (
<div class="container">
    {items.map((item)=>{
        return (
            <div class="step completed">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content">
              <WorkExperience item ={item}/>
            </div>
        </div>)
    })}
    {/* <div class="step completed">
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>

      <div class="content">
        <WorkExperience/>
      </div>
  </div>
  
  <div class="step active">
    <div class="v-stepper">
      <div class="circle"></div>
      <div class="line"></div>
    </div>

    <div class="content">
    <WorkExperience/>
    </div>
  </div>

  <div class="step">
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <WorkExperience/>
      </div>
  </div> */}
  
</div>
  );
};

export default Stepper;
