import React from "react";
import CourseImage from "./Modules/CourseImage.jsx";
import CourseTitle from "./Modules/CourseTitle.jsx";
import CourseSubject from "./Modules/CourseSubject.jsx";
import CourseDescription from "./Modules/CourseDescription.jsx";
import CourseTags from "./Modules/CourseTags.jsx";
import CoursePrice from "./Modules/CoursePrice.jsx";
import BuyButton from "./Modules/BuyButton.jsx";

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
