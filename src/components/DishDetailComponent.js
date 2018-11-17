import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.selectedDish;
        if (dish != null) {
            const dishComments = this.props.selectedDish.comments.map((dishComment) => {
                return (
                    <div key={dishComment.id}>
                        <p>{dishComment.comment}</p>
                        <p>--{dishComment.author}, {dishComment.date}</p>
                    </div>
                )
            });

            return (
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                            
                        <div className="col-12 col-md-5 m-1">
                            <h2>Comments</h2>
                            {dishComments}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

export default DishDetail;