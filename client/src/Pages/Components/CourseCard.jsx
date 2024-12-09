import React from "react";
import BuyButton from "./Modules/BuyButton.jsx";
import CoursePrice from "./Modules/CoursePrice.jsx";
import CourseTags from "./Modules/CourseTags.jsx";
import CourseDescription from "./Modules/CourseDescription.jsx";
import CourseSubject from "./Modules/CourseSubject.jsx";
import CourseTitle from "./Modules/CourseTitle.jsx";
import CourseImage from "./Modules/CourseImage.jsx";


function CourseCard() {
    return (
        <>
            <h1>Welcome to CUT👑!</h1>
            <div className="course-cards-wrapper">
                <div className="course-card-container">
                    < CourseImage />
                    < CourseTitle />
                    < CourseSubject />
                    < CourseDescription />
                    < CourseTags />
                    < CoursePrice />
                    < BuyButton />
                </div>
            </div>
        </>
    );
}
export default CourseCard;
