import React, {Component} from 'react';
import ReactStars from 'react-stars';

import Button from '../button';
if(process.env.WEBPACK) require('./index.scss');

class RatingCard extends Component{
    constructor(){
        super();

        this.state = {
            initialValue: 4,
            updateValue: 0
        };
    }

    handleClick = () => {
        this.setState({
            initialValue: this.state.updateValue,
            updateValue: 0
        });
    }

    ratingChanged = (newRating) => {
        this.setState({
            updateValue: newRating
        });
    }

    render() {
        const { initialValue, updateValue} = this.state;
        const {projectName, projectMember} = this.props;
        return(
            <div className='rating_card'>
                <div className='result_container'>
                    <span className='result_image'/>
                    <span>{projectMember}</span>
                    <span>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#5D8245'}
                            value={initialValue}
                            edit={false}
                            className='result_star'
                        />
                    </span>
                </div>
                <div className='edit_container'>
                    <span>{projectName}</span>
                    <span>
                        <ReactStars
                            count={5}
                            onChange={this.ratingChanged}
                            size={24}
                            color2={'#5D8245'}
                            value={updateValue}
                        />
                        </span>
                    <Button label='Rate' buttonClass='rate_button' handleclick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

export default RatingCard;