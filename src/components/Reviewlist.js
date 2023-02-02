// a container inside of a Movie that houses Review components.


// import React from 'react'
// import Review from './review'
// import StarRating from './StarRating'
// import ReviewForm from './reviewForm';

// let e = React.createElement;

// export default class ReviewList extends React.Component {
//   render() {
//     return e ('div',
//         {class: 'card w-25'},
//     e('div',
//         {class: 'card-header bg-success text while'},
//         'User Name and Time'),
//     e('div',
//         {class: 'card-body'},
//         'Comment Content'),
//     e('div',
//         {class: 'card-footer'},
//         e(Review, {}, null),
//         e('span', {}, null),
//         e(StarRating, {}, null),
//         e(ReviewForm, {}, null),
//       )
//     );
//   }
// }



// import React from "react";
// import Review from "./review";
// import "../App.css";


// const ReviewList = ({ reviews }) => {
//   return (
//     <div>
//       {reviews.map((review, index) => (
//         <li key={index}>
//           <Review review={review} />
//         </li>
//       ))}
//     </div>
//   );
// };

// export default ReviewList;