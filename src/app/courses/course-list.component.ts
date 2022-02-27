import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    public  filterCourses: Course[] = [];

    private _courses: Course[] = [];
    private _filterBy: string = '';

    constructor(
        private courseService: CourseService
    ) { }

    ngOnInit(): void {
        this.retriveAll();
    }

    retriveAll(): void {
        this.courseService.retriveALl().subscribe({ //se escreve no metodo para charma a função
            next: courses => {
                this._courses = courses;
                this.filterCourses = this._courses;
            },
            error: err => console.log(err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                this.retriveAll();
            },
            error: err => console.log(err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filterCourses = this._courses.filter(
            (course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        );
    }

    get filter() {
        return this._filterBy;
    }

}