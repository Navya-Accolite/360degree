import React, { Component } from 'react'
import '../styles/stylesforfeedbackreceived.css';
import FeedbackReceivedService from '../Services/FeedbackReceivedService';
class FeedbackGiven extends Component {
    constructor(props) {
        super(props)

        this.state={
            feedbacks:[],
            employeeid:null,
            employeename:null,
            feedback_average:null,
            comments:null,
        
        }
    
        
    }

    componentDidMount(){
        FeedbackReceivedService.getResultsgiven(this.props.history.location.state?.data).then((res)=>{
            console.log(this.props.history.location);
            console.log(res.data);
            this.setState({feedbacks:res.data});
            this.setState({employeeid:res.data[0][1]});
            this.setState({employeename:res.data[0][0]});
            this.setState({feedback_average:res.data[0][3]});
            this.setState({comments:res.data[0][2]});

        });

        

   
    
    }
    render() {
        return (
<>
<div className='name'><h1>Welcome, {this.props.history.location.state?.prop2}</h1>
<div>These are the feedbacks given by you!</div></div>

<div className='table-wrapper'>
<table className='my-table'>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Emp Name</th>
          <th>Feedback Average</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>

      {this.state.feedbacks.map((subArray, index) => (
    <tr key={index}>
      {subArray.map((item, i) => (
        <td key={i}>{item}</td>
      ))}
    </tr>
  ))}

      </tbody>
    </table>

                
            
            
    </div>
    </>
        )
    }
}

export default FeedbackGiven




