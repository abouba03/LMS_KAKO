const CourseIdPage = ({params}: {params: {courseId: string}}) => {
    return ( 
        <div className="">
            Course Id : {params.courseId}
        </div>
     );
}
 
export default CourseIdPage;